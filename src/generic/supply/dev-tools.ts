import { shareReplay, withLatestFrom } from 'rxjs/operators'
import { appState$ } from '../state'
import { generalActionsLog$ } from './action-helpers'

if (process.env.NODE_ENV !== 'production') {
	generalActionsLog$.subscribe(({ key, namespace, payload }) => {
		// tslint:disable:no-console
		console.group('🔷', key, '🔹', namespace)
		console.log(payload)
		console.groupEnd()
	})
}

const RDT = window.__REDUX_DEVTOOLS_EXTENSION__
if (RDT) {
	const devTools = RDT.connect()
	devTools.init(appState$.get())
	appState$
		.pipe(withLatestFrom(generalActionsLog$.pipe(shareReplay(1))))
		.subscribe(([state, { key, namespace }]) => {
			devTools.send(`${key}:${namespace}`, state)
		})
} else {
	appState$.subscribe(console.log)
}

/* if (process.env.NODE_ENV !== 'production') {
	const LS_LAYOUT = '_!LAYOUT!_'

	const LSLayout = localStorage.getItem(LS_LAYOUT)
	const ParsedLayout = LSLayout && JSON.parse(LSLayout)

	if (ParsedLayout) {
		appState$.modify((state) => ({
			...state,
			layout: ParsedLayout ? ParsedLayout : state.layout,
		}))
	}

	layout$.subscribe((state) => {
		localStorage.setItem(LS_LAYOUT, JSON.stringify(state))
	})
} */
