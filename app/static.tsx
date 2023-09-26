import { LinkProps } from './types'
import {
	SunIcon,
	MoonIcon,
	LaptopIcon,
	UsersIcon,
	BadgeIcon,
	SendIcon,
	MessagesIcon,
	SearchCheckIcon,
	BadgePercentIcon,
	CalendarPlusIcon,
	HeartHandIcon,
	HeartPulseIcon,
	PuzzleIcon,
	OrbitIcon,
	ShowerIcon,
	PillIcon,
	BusIcon,
} from './icons'
import { ColorModeProps } from './components/navbar/types'

const careerLinks: LinkProps[] = [
	{
		alt: '',
		avatar: '/ndis-logo-wide.svg',
		title: 'Disability Support Worker',
		href: '/',
		description: 'Get disability support based on your needs.',
		icon: false,
	},
]

const colorModes: ColorModeProps[] = [
	{
		title: 'Light',
		mode: 'light',
		Icon: ({ isHovered }) => <SunIcon isHovered={isHovered} />,
	},
	{
		title: 'Dark',
		mode: 'dark',
		Icon: ({ isHovered }) => <MoonIcon isHovered={isHovered} />,
	},
	{
		title: 'System',
		mode: 'system',
		Icon: ({ isHovered }) => <LaptopIcon isHovered={isHovered} />,
	},
]

const listItemLinkClass =
	'block select-none m-3 rounded-2xl p-6 leading-none no-underline outline-none transition-colors hover:bg-accent/50 dark:hover:bg-secondary/5 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'

const icons = new Map([
	['users', <UsersIcon key='users' />],
	['about', <BadgeIcon key='about' />],
	['contact', <SendIcon key='contact' />],
	['reviews', <MessagesIcon key='reviews' />],
	['enquire', <SearchCheckIcon key='enquire' />],
	['pricing', <BadgePercentIcon key='pricing' />],
	['book', <CalendarPlusIcon key='book' />],
	['assistance', <HeartHandIcon key='assistance' />],
	['nursing-care', <HeartPulseIcon key='nursing-care' />],
	['activities', <PuzzleIcon key='activities' />],
	['community', <OrbitIcon key='community' />],
	['household', <ShowerIcon key='household' />],
	['medication', <PillIcon key='medication' />],
	['transport', <BusIcon key='transport' />],
])

export { careerLinks, colorModes, icons, listItemLinkClass }

const primary = '#90D1D4'
const bright = '#A9EBEB'
const secondary = '#0B5874'
const text = '#063343'
const dark = '#031b24'
const accent = '#EFF4CC'
