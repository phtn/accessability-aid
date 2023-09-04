import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react'

type AvatarProps = {
	alt: string
	src: string
	icon?: boolean
}

type ColorModes = 'light' | 'dark' | 'system'

type ColorModeProps = {
	title: string
	mode: ColorModes
	Icon: ({ isHovered }: { isHovered: boolean }) => ReactElement
}

type LinkProps = {
	alt: string
	avatar: string
	description: string
	href: string
	icon?: boolean
	title: string
}

interface ListItemProps extends ComponentPropsWithoutRef<'a'> {
	className?: string
	title: string
	children: React.ReactNode
	avatarSrc?: string
	icon?: boolean
	alt: string
}

export type {
	AvatarProps,
	ColorModes,
	ColorModeProps,
	LinkProps,
	ListItemProps,
}
