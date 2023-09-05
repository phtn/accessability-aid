import { CSSProperties, MouseEventHandler, ReactElement } from 'react'

type ColorModes = 'light' | 'dark' | 'system'

type ColorModeProps = {
	Icon: ({ isHovered }: { isHovered: boolean }) => ReactElement
	mode: ColorModes
	title: string
}

type ModeItemProps = {
	data: ColorModeProps[]
	index: number
	style: CSSProperties
}

export type { ColorModes, ColorModeProps, ModeItemProps }
