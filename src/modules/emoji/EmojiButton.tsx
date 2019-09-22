import React from 'react'
import { style } from 'typestyle'
import { emojiByID } from './joypixels/emoji'
import './joypixels/joypixels-sprite-24.css'
import { emojiLineHeight } from './types'
import { actionsEmojiWidget } from '../../generic/actions'

type TProps = {
	emojiID: string
}

export const EmojiButton: React.FC<TProps> = ({ emojiID }) => {
	const [, , group] = emojiByID[emojiID]
	const className = `joypixels-24-${group} _${emojiID}`
	return (
		<div className={$container} onClick={actionsEmojiWidget.injectEmoji._(emojiID)}>
			<span className={className}></span>
		</div>
	)
}

const $container = style({
	flex: 'none',
	display: 'flex',
	boxSizing: 'border-box',
	width: `${emojiLineHeight}px`,
	height: `${emojiLineHeight}px`,
	alignItems: 'center',
	justifyContent: 'center',
	paddingTop: '6px',
	borderRadius: '8px',
	cursor: 'pointer',
	$nest: {
		'&:hover,&:focus': {
			backgroundColor: '#F2F3F5',
		},
	},
})
