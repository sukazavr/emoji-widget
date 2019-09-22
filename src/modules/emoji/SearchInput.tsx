import React from 'react'
import { style } from 'typestyle'
import { emojiLineHeight } from './types'

export class SearchInput extends React.Component {
	inputRef = React.createRef<HTMLInputElement>()

	clearInput = () => {
		this.inputRef.current!.value = ''
	}

	render() {
		return (
			<div className={$container}>
				<div className={$icoSearch}>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10 5.75C10 8.09721 8.09721 10 5.75 10C3.40279 10 1.5 8.09721 1.5 5.75C1.5 3.40279 3.40279 1.5 5.75 1.5C8.09721 1.5 10 3.40279 10 5.75ZM9.25101 10.3117C8.28141 11.0569 7.06745 11.5 5.75 11.5C2.57436 11.5 0 8.92564 0 5.75C0 2.57436 2.57436 0 5.75 0C8.92564 0 11.5 2.57436 11.5 5.75C11.5 7.06745 11.0569 8.28141 10.3117 9.25101L13.5303 12.4697C13.8232 12.7626 13.8232 13.2374 13.5303 13.5303C13.2374 13.8232 12.7626 13.8232 12.4697 13.5303L9.25101 10.3117Z"
							fill="#9D9FA3"
						/>
					</svg>
				</div>
				<input type="search" placeholder="Search" className={$input} ref={this.inputRef} />
				<div className={$buttonClear} onClick={this.clearInput}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.96967 0.96967C1.26256 0.676777 1.73744 0.676777 2.03033 0.96967L6 4.93934L9.96967 0.96967C10.2626 0.676777 10.7374 0.676777 11.0303 0.96967C11.3232 1.26256 11.3232 1.73744 11.0303 2.03033L7.06066 6L11.0303 9.96967C11.3232 10.2626 11.3232 10.7374 11.0303 11.0303C10.7374 11.3232 10.2626 11.3232 9.96967 11.0303L6 7.06066L2.03033 11.0303C1.73744 11.3232 1.26256 11.3232 0.96967 11.0303C0.676777 10.7374 0.676777 10.2626 0.96967 9.96967L4.93934 6L0.96967 2.03033C0.676777 1.73744 0.676777 1.26256 0.96967 0.96967Z"
							fill="#9D9FA3"
						/>
					</svg>
				</div>
			</div>
		)
	}
}

const $container = style({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	height: `${emojiLineHeight}px`,
	backgroundColor: '#F2F3F5',
	borderRadius: '8px',
})

const webkitSearchDecs = `
&::-webkit-search-decoration,
&::-webkit-search-cancel-button,
&::-webkit-search-results-button,
&::-webkit-search-results-decoration
`

const $input = style({
	flex: '1 0 100%',
	zIndex: 1,
	height: '100%',
	padding: '0 40px 0 36px',
	border: 'none',
	outline: 'none',
	background: 'none',
	$nest: {
		'&::placeholder': {
			color: '#9D9FA3',
		},
		[webkitSearchDecs]: {
			'-webkit-appearance': 'none',
		},
	},
})

const $icoSearch = style({
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	width: '38px',
})

const $buttonClear = style({
	position: 'absolute',
	right: '4px',
	zIndex: 2,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '32px',
	height: '32px',
	cursor: 'pointer',
})
