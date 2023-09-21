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

const serviceLinks: LinkProps[] = [
	{
		alt: '',
		avatar: '/ndis-logo-wide.svg',
		title: 'NDIS',
		href: '/ndis',
		description: 'Get disability support based on your needs.',
		icon: false,
	},
	{
		alt: 'assistance',
		avatar: '',
		icon: true,
		title: 'Assistance',
		href: '/',
		description: 'Assistance with Daily Personal Activities - Standard.',
	},
	{
		alt: 'community',
		avatar: '',
		icon: true,
		title: 'Community',
		href: '/',
		description: 'Increased Social and Community Participation.',
	},
	{
		alt: 'household',
		avatar: '',
		icon: true,
		title: 'Household',
		href: '/',
		description: 'Caring assistant to simplify your everyday life.',
	},
	{
		alt: 'activities',
		avatar: '',
		icon: true,
		title: 'Activities',
		href: '/',
		description: 'Group and Centre based activities.',
	},
	{
		alt: 'transport',
		avatar: '',
		icon: true,
		title: 'Transport',
		href: '/transport',
		description: 'Enhanced Mobility with your trusted travel companion.',
		// description: 'Precision and care, ensuring your wellness.',
	},
]

const careerLinks: LinkProps[] = [
	{
		alt: '',
		avatar: '/ndis-logo-wide.svg',
		title: 'Disability Support Worker',
		href: '/ndis',
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

export { careerLinks, colorModes, icons, listItemLinkClass, serviceLinks }

const primary = '#90D1D4'
const bright = '#A9EBEB'
const secondary = '#0B5874'
const text = '#063343'
const dark = '#031b24'
const accent = '#EFF4CC'
