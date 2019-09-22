import React from 'react'
import { style } from 'typestyle'
import { List } from './List'
import { Navigation } from './Navigation'

export const Widget: React.FC = () => {
	return (
		<div className={$container}>
			<div className={$head}>Emoji</div>
			<List />
			<Navigation />
		</div>
	)
}

const $container = style({
	backgroundColor: 'white',
	borderRadius: '8px',
	boxShadow: ['0px 0px 48px rgba(0,0,0,0.04)', '0px 8px 24px rgba(0,0,0,0.08)'],
	width: '352px',
	height: '480px',
})

const $head = style({
	height: '48px',
	fontWeight: 700,
	fontSize: '17px',
	lineHeight: '48px',
	letterSpacing: '-0.41px',
	padding: '0 16px',
	cursor: 'default',
})
