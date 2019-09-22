import { types } from 'typestyle'

export const fontStack = `
	"-apple-system", BlinkMacSystemFont, "Segoe UI",
	Helvetica, Arial, sans-serif, "Apple Color Emoji",
	"Segoe UI Emoji", "Segoe UI Symbol"
`
export const fontMonoStack = "Monaco, Menlo, Consolas, 'Courier New', monospace"

export const colorForeground = '#171A1F'
export const colorBackground = '#E5E5E5'
export const colorBlue500 = '#1885F2'

type BoxUnit = number | string
const boxUnitToString = (value: BoxUnit): string => {
	if (typeof value === 'number') {
		return value.toString() + 'em'
	} else {
		return value
	}
}

export const gridSpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		marginTop: '-' + spacing,
		marginLeft: '-' + spacing,
		'&>*': {
			marginTop: spacing,
			marginLeft: spacing,
		},
	} as types.CSSProperties
}

export const verticallySpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		'&>*': {
			marginBottom: spacing + ' !important',
		},
		'&>*:last-child': {
			marginBottom: '0px !important',
		},
	} as types.CSSProperties
}

export const horizontallySpaced = (margin: BoxUnit) => {
	const spacing = boxUnitToString(margin)
	return {
		'&>*': {
			marginRight: spacing + ' !important',
		},
		'&>*:last-child': {
			marginRight: '0px !important',
		},
	} as types.CSSProperties
}
