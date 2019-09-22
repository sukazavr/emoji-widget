export enum EEmojiGroup {
	Recent,
	People,
	Nature,
	Food,
	Places,
	Objects,
	Symbols,
	Flags,
}

export const groupSort = [
	EEmojiGroup.Recent,
	EEmojiGroup.People,
	EEmojiGroup.Nature,
	EEmojiGroup.Food,
	EEmojiGroup.Places,
	EEmojiGroup.Objects,
	EEmojiGroup.Symbols,
	EEmojiGroup.Flags,
]

export const virtualFrameHeight = 384
export const emojiLineHeight = 40
export const emojiPerLine = 8

export interface IEmojiLine {
	nav: EEmojiGroup
	emojis: string[]
}

export const defaultEmojiLine: IEmojiLine = {
	nav: EEmojiGroup.Recent,
	emojis: [],
}
