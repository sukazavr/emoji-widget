import { emojiIDsByGroup } from './emoji'
import {
	EEmojiGroup,
	groupSort,
	emojiPerLine,
	emojiLineHeight,
	IEmojiLine,
	defaultEmojiLine,
} from '../types'

const preprocessedEmojis = groupSort.reduce<{
	heightByGroup: { [key in EEmojiGroup]: number }
	lines: IEmojiLine[]
}>(
	(acc, group) => {
		const { heightByGroup, lines } = acc
		lines.push({
			nav: group,
			emojis: [],
		})
		const emojiIDsInGroup = emojiIDsByGroup[group]
		const emojiLinesInGroup = Math.ceil(emojiIDsInGroup.length / emojiPerLine)
		for (let index = 0; index < emojiLinesInGroup; index++) {
			lines.push({
				nav: group,
				emojis: emojiIDsInGroup.slice(index * emojiPerLine, (index + 1) * emojiPerLine),
			})
		}
		heightByGroup[group] = emojiLinesInGroup * emojiLineHeight + emojiLineHeight
		return acc
	},
	{
		heightByGroup: groupSort.reduce<{ [key in EEmojiGroup]: number }>(
			(acc, group) => {
				acc[group] = 0
				return acc
			},
			{} as any
		),
		lines: [defaultEmojiLine],
	}
)

export const emojiLines = preprocessedEmojis.lines
export const emojiHeightByGroup = preprocessedEmojis.heightByGroup
