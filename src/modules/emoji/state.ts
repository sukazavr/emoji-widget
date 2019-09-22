import { appState$ } from '../../generic/state'
import { IEmojiLine } from './types'
import { emojiLines } from './joypixels/emoji-data'
import { lensScrollTop } from './lenses'

export const scrollTop$ = appState$.lens(lensScrollTop)

export const virtualLines$ = appState$
	.view('virtualFrame')
	.view(({ startLineIndex, endLineIndex }) => {
		const items: { [k: number]: IEmojiLine } = {}
		for (; startLineIndex <= endLineIndex; startLineIndex++) {
			items[startLineIndex] = emojiLines[startLineIndex]
		}
		return items
	})

// Init
scrollTop$.set(0)
