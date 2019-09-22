import { types } from 'typestyle'
import { important, em } from 'csx'

type BoxUnit = number | string
const boxUnitToString = (value: BoxUnit): string => {
	if (typeof value === 'number') {
		return em(value) as string
	}
	return value
}

export const gridSpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		marginTop: `-${spacing}`,
		marginLeft: `-${spacing}`,
		'&>*': {
			marginTop: spacing,
			marginLeft: spacing,
		},
	} as types.CSSProperties
}

export const verticalSpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		'&>*': {
			marginBottom: important(spacing),
		},
		'&>*:last-child': {
			marginBottom: important(em(0)),
		},
	} as types.CSSProperties
}

export const horizontalSpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		'&>*': {
			marginRight: important(spacing),
		},
		'&>*:last-child': {
			marginRight: important(em(0)),
		},
	} as types.CSSProperties
}
