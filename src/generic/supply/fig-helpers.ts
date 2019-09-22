import { Atom } from '@grammarly/focal'
import { defer, Observable, of } from 'rxjs'
import { catchError, share, switchMap, takeUntil, tap } from 'rxjs/operators'
import { ca } from './action-helpers'
import { retryStrategy } from './rxjs-helpers'

interface IFigTaskDesc<T1> {
	task: () => Promise<T1>
	attempts?: number
	onFinish?: (val: Error | T1) => void
}

enum EStatus {
	IDLE,
	ACTING,
	DONE,
}

interface IFigState<TMeta> {
	status: EStatus
	EStatus: typeof EStatus
	meta?: TMeta
}

export const createFig = <TMeta>() => {
	const state$ = Atom.create<IFigState<TMeta>>({ EStatus, status: EStatus.IDLE })

	// Start task, status ACTING
	// If trig during ACTING it'll start whole proc over again
	let proxyRun: (taskDesc: IFigTaskDesc<any>) => void
	const run = <T1>(taskDesc: IFigTaskDesc<T1>) => proxyRun(taskDesc)
	run.$ = new Observable<IFigTaskDesc<any>>((sub) => {
		proxyRun = sub.next.bind(sub)
	}).pipe(share())

	// Abort task, status IDLE
	const abort = ca()
	const setMeta = ca<TMeta>()

	run.$.pipe(
		tap(() => {
			const currentState = state$.get()
			if (currentState.status !== EStatus.ACTING) {
				state$.set({ ...currentState, status: EStatus.ACTING })
			}
		}),
		switchMap(({ task, attempts, onFinish }) =>
			defer(task).pipe(
				takeUntil(abort.$),
				retryStrategy(attempts || 0),
				catchError((error: Error) => of(error)),
				tap((val) => onFinish && onFinish(val))
			)
		)
	).subscribe(() => {
		state$.modify((s) => ({ ...s, status: EStatus.DONE }))
	})

	abort.$.subscribe(() => {
		const currentState = state$.get()
		if (currentState.status !== EStatus.IDLE) {
			state$.set({ ...currentState, status: EStatus.IDLE })
		}
	})

	setMeta.$.subscribe((meta) => {
		state$.modify((s) => ({ ...s, meta }))
	})

	return {
		run,
		abort,
		setMeta,
		state$: state$.view(),
	}
}
