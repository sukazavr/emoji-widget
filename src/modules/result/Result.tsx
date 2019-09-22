import React from 'react'
import { F } from '@grammarly/focal'
import { actionsEmojiWidget } from '../../generic/actions'
import { startWith, map } from 'rxjs/operators'
import { emojiByID } from '../emoji/joypixels/emoji'
import { style } from 'typestyle'

export const Result: React.FC = () => {
	return (
		<div className={$container}>
			<F.div>
				{actionsEmojiWidget.injectEmoji.$.pipe(
					map((emojiID) => emojiByID[emojiID][1]),
					startWith('Your choice')
				)}
			</F.div>
			<F.div className={$emoji}>
				{actionsEmojiWidget.injectEmoji.$.pipe(
					map((emojiID) => emojiByID[emojiID][0]),
					startWith('🤷')
				)}
			</F.div>
		</div>
	)
}

const $container = style({
	width: '300px',
	height: '100px',
})

const $emoji = style({
	fontSize: '4em',
	lineHeight: 2,
})
