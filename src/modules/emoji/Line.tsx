import React from 'react'
import { style } from 'typestyle'
import { emojiLineHeight, IEmojiLine } from './types'
import { EmojiButton } from './EmojiButton'

type TProps = {
	top: number
	emojiLine: IEmojiLine
}

export const Line: React.FC<TProps> = ({ top, emojiLine }) => {
	const emojis = emojiLine.emojis
	return emojis.length ? (
		<div style={{ top }} className={$container}>
			{emojis.map((emojiID) => (
				<EmojiButton key={emojiID} emojiID={emojiID} />
			))}
		</div>
	) : null
}

const $container = style({
	display: 'flex',
	position: 'absolute',
	padding: '0 16px',
	width: '320px',
	height: `${emojiLineHeight}px`,
})
