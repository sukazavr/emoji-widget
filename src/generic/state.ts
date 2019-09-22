import { Atom } from '@grammarly/focal'
import { EEmojiGroup } from '../modules/emoji/types'

export interface IState {
	activeGroup: EEmojiGroup
	scrollTop: number
	virtualFrame: {
		startLineIndex: number
		endLineIndex: number
	}
}

export const defaultState: IState = {
	activeGroup: EEmojiGroup.Recent,
	scrollTop: 0,
	virtualFrame: {
		startLineIndex: 0,
		endLineIndex: 0,
	},
}

export const appState$ = Atom.create<IState>(defaultState)
