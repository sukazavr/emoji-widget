import { Lens } from '@grammarly/focal'
import { IState } from '../../generic/state'
import { emojiLines } from './joypixels/emoji-data'
import { emojiLineHeight, groupSort, virtualFrameHeight } from './types'

const linesInCache = 6
const linesInAdvance = 4
const linesPerFrame = Math.ceil(virtualFrameHeight / 40)
const latestLineIndex = emojiLines.length - 1
const firstGroup = groupSort[0]
const lastGroup = groupSort[groupSort.length - 1]

export const lensScrollTop = Lens.create<IState, number>(
	(state) => state.scrollTop,
	(scrollTop, state) => {
		const scrollBottom = virtualFrameHeight + scrollTop

		const startLineIndex = Math.floor(scrollTop / emojiLineHeight)
		const endLineIndex = Math.floor(scrollBottom / emojiLineHeight)

		const VF = {
			startLineIndex: Math.max(0, startLineIndex - linesInCache),
			endLineIndex: Math.min(endLineIndex + linesInCache, latestLineIndex),
		}

		const activeGroup =
			startLineIndex < linesInAdvance
				? firstGroup
				: startLineIndex >= latestLineIndex - linesPerFrame
				? lastGroup
				: emojiLines[startLineIndex + linesInAdvance].nav

		return { ...state, activeGroup, scrollTop, virtualFrame: VF }
	}
)
