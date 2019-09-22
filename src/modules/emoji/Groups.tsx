import React from 'react'
import { groupSort, EEmojiGroup } from './types'
import { GroupName } from './GroupName'
import { actionsEmojiWidget } from '../../generic/actions'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'

export class Groups extends React.Component {
	sub!: Subscription
	groupRef = groupSort.reduce<{ [key in EEmojiGroup]: React.RefObject<HTMLDivElement> }>(
		(acc, group) => {
			acc[group] = React.createRef<HTMLDivElement>()
			return acc
		},
		{} as any
	)

	componentDidMount() {
		this.sub = actionsEmojiWidget.goToGroup.$.pipe(
			filter((group) => group !== EEmojiGroup.Recent)
		).subscribe((group) => {
			const ref = this.groupRef[group].current
			if (ref) {
				ref.scrollIntoView({ block: 'start', behavior: 'auto' })
			}
		})
	}

	componentWillUnmount() {
		this.sub.unsubscribe()
	}

	render() {
		return groupSort.map((group) => (
			<GroupName key={group} group={group} forwardRef={this.groupRef[group]} />
		))
	}
}
