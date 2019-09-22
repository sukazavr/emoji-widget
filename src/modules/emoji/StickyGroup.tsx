import React from 'react'
import { style } from 'typestyle'

type TProps = {
	height: number
	forwardRef?: React.RefObject<HTMLDivElement>
}

export const StickyGroup: React.FC<TProps> = ({ children, height, forwardRef }) => {
	return (
		<div style={{ height }} ref={forwardRef}>
			<div className={$sticky}>{children}</div>
		</div>
	)
}

const $sticky = style({
	position: 'sticky',
	top: 0,
	zIndex: 2,
	padding: '0 16px',
	width: '320px',
	background: 'rgba(255, 255, 255, 0.72)',
	backdropFilter: 'blur(16px)',
})
