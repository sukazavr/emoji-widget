import React from 'react'
import { style } from 'typestyle'
import { NavigationButton } from './NavigationButton'
import { colorBlue500 } from '../shell/theme'
import { groupSort } from './types'
import { appState$ } from '../../generic/state'
import { F } from '@grammarly/focal'
import { bind$ } from '../../generic/components/MapElement'
import { actionsEmojiWidget } from '../../generic/actions'

export const Navigation: React.FC = () => {
	const activeGroup$ = appState$.view('activeGroup')
	const cursorStyle$ = activeGroup$.view((group) => ({ transform: `translateX(${group * 40}px)` }))
	const { goToGroup } = actionsEmojiWidget
	return (
		<div className={$container}>
			<F.div className={$cursor} style={cursorStyle$} />
			{groupSort.map((group) =>
				bind$(
					activeGroup$.view((activeGroup) => activeGroup === group),
					(isActive) => (
						<NavigationButton
							group={group}
							isActive={isActive}
							onClick={goToGroup._(group)}
						/>
					),
					group
				)
			)}
		</div>
	)
}

const $container = style({
	position: 'relative',
	display: 'flex',
	height: '48px',
	padding: '0 16px',
})

const $cursor = style({
	position: 'absolute',
	left: '16px',
	top: '0px',
	height: '2px',
	width: '40px',
	background: colorBlue500,
	borderRadius: '0px 0px 100px 100px',
	transition: 'transform 150ms cubic-bezier(.29,.09,.24,.99)',
})
