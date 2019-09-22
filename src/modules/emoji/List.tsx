import { getElementProps } from '@grammarly/focal/dist/src/react'
import React from 'react'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'
import { style } from 'typestyle'
import { actionsEmojiWidget } from '../../generic/actions'
import { ReactiveList } from '../../generic/components/ReactiveList'
import { Groups } from './Groups'
import { Line } from './Line'
import { SearchInput } from './SearchInput'
import { scrollTop$, virtualLines$ } from './state'
import { StickyGroup } from './StickyGroup'
import { defaultEmojiLine, EEmojiGroup, emojiLineHeight, virtualFrameHeight } from './types'

export class List extends React.Component {
	sub!: Subscription
	scrollRef = React.createRef<HTMLDivElement>()

	componentDidMount() {
		this.sub = actionsEmojiWidget.goToGroup.$.pipe(
			filter((group) => group === EEmojiGroup.Recent)
		).subscribe(() => {
			const ref = this.scrollRef.current
			if (ref) {
				ref.scrollTop = 0
			}
		})
	}

	componentWillUnmount() {
		this.sub.unsubscribe()
	}

	render() {
		return (
			<div className={$container}>
				<div
					ref={this.scrollRef}
					className={$containerScroll}
					onScroll={getElementProps({ scrollTop: scrollTop$ })}
				>
					<StickyGroup height={emojiLineHeight}>
						<SearchInput />
					</StickyGroup>
					<Groups />
					<ReactiveList defaultItem={defaultEmojiLine} items={virtualLines$}>
						{(line$, index) => {
							return (
								<Line
									key={index}
									top={Number(index) * emojiLineHeight}
									emojiLine={line$.get()}
								/>
							)
						}}
					</ReactiveList>
				</div>
			</div>
		)
	}
}

const $container = style({
	height: `${virtualFrameHeight}px`,
	overflow: 'hidden',
})

const $containerScroll = style({
	position: 'relative',
	height: `${virtualFrameHeight}px`,
	width: `${virtualFrameHeight + 20}px`,
	overflowY: 'scroll',
})
