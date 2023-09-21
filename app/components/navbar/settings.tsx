'use client'
import { useState } from 'react'
import { ColorModeProps, ColorModes, ModeItemProps } from './types'
import { Button } from '@/components/ui/button'
import { toggle } from '@/utils/helpers'
import { useTheme } from 'next-themes'
import { FixedSizeListProps, FixedSizeList as ModeList } from 'react-window'

import {
	Description,
	ModeButton,
	ModeItem,
	SettingsContainer,
	SettingsContent,
	Title,
	TitlePanel,
} from './styled'

import { SettingsIcon } from '@/app/icons'
import { colorModes } from '@/app/static'

const Mode = (props: ColorModeProps) => {
	const { setTheme } = useTheme()

	const handleModeSelect = (mode: ColorModes) => () => {
		setTheme(mode)
	}
	const [isHovered, setIsHovered] = useState(false)
	const handleToggleMouseEvent = () => toggle(setIsHovered)

	const { Icon, mode, title } = props
	return (
		<ModeButton
			onClick={handleModeSelect(mode)}
			onMouseEnter={handleToggleMouseEvent}
			onMouseLeave={handleToggleMouseEvent}
			variant='ghost'>
			{title}
			<Icon isHovered={isHovered} />
		</ModeButton>
	)
}

const Row = (props: ModeItemProps) => {
	const { data, index, style } = props
	const item = data[index]
	return (
		<ModeItem
			key={`${index}`}
			style={style}>
			<Mode {...item} />
		</ModeItem>
	)
}

const listProps: FixedSizeListProps = {
	itemData: colorModes,
	itemSize: 40,
	height: 130,
	itemCount: colorModes.length,
	width: '100%',
	children: Row,
}

const Settings = () => {
	return (
		<SettingsContainer>
			<TitlePanel>
				<SettingsIcon />
				<Title>Settings</Title>
			</TitlePanel>
			<Description>Change color mode</Description>
			<SettingsContent>
				<ModeList {...listProps} />
			</SettingsContent>
		</SettingsContainer>
	)
}

export { Settings }
