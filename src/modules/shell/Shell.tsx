import React from 'react'
import { cssRule, style } from 'typestyle'
import { fontStack, colorForeground, colorBackground, horizontallySpaced } from './theme'
import { Widget } from '../emoji/Widget'
import { Result } from '../result/Result'

export const Shell: React.FC = () => {
	return (
		<>
			<div className={$body}>
				<Widget />
				<Result />
			</div>
			<div className={$footer}>
				<a href="https://sukazavr.ru/">Dmitrii Bykov</a>
			</div>
		</>
	)
}

cssRule('html, body', {
	height: '100%',
	width: '100%',
})

cssRule('body', {
	display: 'flex',
	fontFamily: fontStack,
	fontWeight: 400,
	fontSize: '15px',
	lineHeight: '24px',
	letterSpacing: '-0.24px',
	contain: 'strict',
	overflow: 'hidden',
	overscrollBehavior: 'none',
	color: colorForeground,
	backgroundColor: colorBackground,
})

cssRule('#root', {
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	overflowY: 'auto',
})

const $body = style(horizontallySpaced(4), {
	flexGrow: 1,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '4em',
})

const $footer = style({
	display: 'flex',
	justifyContent: 'center',
	padding: '1em',
})
