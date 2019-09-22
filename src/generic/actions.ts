import { ca, ga } from './supply/action-helpers'
import { EEmojiGroup } from '../modules/emoji/types'

export const actionsEmojiWidget = ga('emoji-widget', {
	goToGroup: ca<EEmojiGroup>(),
	injectEmoji: ca<string>(),
})
