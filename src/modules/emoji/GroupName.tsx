import React from 'react'
import { style } from 'typestyle'
import { EEmojiGroup, emojiLineHeight } from './types'
import { StickyGroup } from './StickyGroup'
import { emojiHeightByGroup } from './joypixels/emoji-data'

type TProps = {
	group: EEmojiGroup
	forwardRef?: React.RefObject<HTMLDivElement>
}

export const GroupName: React.FC<TProps> = ({ group, forwardRef }) => {
	const name = icons[group]
	const height = emojiHeightByGroup[group]
	return (
		<StickyGroup height={height} forwardRef={forwardRef}>
			<div className={$container}>{name}</div>
		</StickyGroup>
	)
}

const $container = style({
	display: 'flex',
	alignItems: 'center',
	height: `${emojiLineHeight}px`,
	fontWeight: 600,
	cursor: 'default',
})

const icons: { [key in EEmojiGroup]: string } = {
	[EEmojiGroup.Recent]: 'Frequently Used',
	[EEmojiGroup.People]: 'Smileys & People',
	[EEmojiGroup.Nature]: 'Animals & Nature',
	[EEmojiGroup.Food]: 'Food & Drink',
	[EEmojiGroup.Places]: 'Travel & Places',
	[EEmojiGroup.Objects]: 'Objects',
	[EEmojiGroup.Symbols]: 'Symbols',
	[EEmojiGroup.Flags]: 'Flags',
}
