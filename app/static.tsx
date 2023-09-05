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
} from './icons'
import { ColorModeProps } from './components/navbar/types'

const serviceLinks: LinkProps[] = [
	{
		alt: '',
		avatar: '/ndis-logo-wide.svg',
		title: 'NDIS',
		href: '/',
		description: 'Get disability support based on your needs.',
		icon: false,
	},
	{
		alt: 'users',
		avatar: '',
		icon: true,
		title: 'Our Staff',
		href: '/',
		description:
			'Meet the Team behind scenes, working compassionately to bring your vision to life.',
	},
	{
		alt: 'reviews',
		avatar: '',
		icon: true,
		title: 'Reviews',
		href: '/',
		description: 'See what others think about our quality of service.',
	},
	{
		alt: 'enquire',
		avatar: '',
		icon: true,
		title: 'Enquire',
		href: '/',
		description: 'Get answers today.',
	},
	{
		alt: 'pricing',
		avatar: '',
		icon: true,
		title: 'Pricing',
		href: '/',
		description: 'Check out our competitive pricing.',
	},
	{
		alt: 'book',
		avatar: '',
		icon: true,
		title: 'Appointments',
		href: '/appointments',
		description: 'Schedule an appoinment with our expert.',
	},
]

const careerLinks: LinkProps[] = [
	{
		alt: '',
		avatar: '/ndis-logo-wide.svg',
		title: 'Home Care',
		href: '/',
		description: 'Get disability support based on your needs.',
		icon: false,
	},
	{
		alt: 'users',
		avatar: '',
		icon: true,
		title: 'Admin',
		href: '/',
		description:
			'Meet the Team behind scenes, working compassionately to bring your vision to life.',
	},
	{
		alt: 'reviews',
		avatar: '',
		icon: true,
		title: 'Reviews',
		href: '/Nurses',
		description: 'See what others think about our quality of service.',
	},
	{
		alt: 'enquire',
		avatar: '',
		icon: true,
		title: 'Enquire',
		href: '/',
		description: 'Get answers today.',
	},
	{
		alt: 'pricing',
		avatar: '',
		icon: true,
		title: 'Care Givers',
		href: '/',
		description: 'Check out our competitive pricing.',
	},
	{
		alt: 'book',
		avatar: '',
		icon: true,
		title: 'IT Support',
		href: '/',
		description: 'Schedule an appoinment with our expert.',
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
	'block select-none m-3 rounded-2xl p-6 leading-none no-underline outline-none transition-colors hover:bg-accent/50 dark:hover:bg-secondary/5 hover:text-accent-foreground hover:text-bold focus:bg-accent focus:text-accent-foreground'

const icons = new Map([
	['users', <UsersIcon key='users' />],
	['about', <BadgeIcon key='about' />],
	['contact', <SendIcon key='contact' />],
	['reviews', <MessagesIcon key='reviews' />],
	['enquire', <SearchCheckIcon key='enquire' />],
	['pricing', <BadgePercentIcon key='pricing' />],
	['book', <CalendarPlusIcon key='book' />],
])

export { careerLinks, colorModes, icons, listItemLinkClass, serviceLinks }
