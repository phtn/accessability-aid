import {
	ArrowUpRight,
	BadgeCheck,
	BadgePercent,
	Bus,
	CalendarPlus,
	Compass,
	HeartHandshake,
	HeartPulse,
	Laptop2,
	MessagesSquare,
	Moon,
	Orbit,
	PhoneCall,
	Pill,
	Puzzle,
	SearchCheck,
	Send,
	Settings2,
	ShowerHead,
	Sun,
	Users,
} from 'lucide-react'
import tw from 'tailwind-styled-components'

type IconProps = {
	isHovered: boolean
}

const iconClass: string = `
  dark:fill-accent/5
  dark:text-secondary
  fill-secondary
  stroke-1
  w-[1.35rem]
`

const arrowClass = `
	text-primary-foreground
	dark:text-primary
  w-[1.35rem]
`

const settingsClass: string = `
  dark:fill-secondary/10
	dark:text-secondary-foreground
	fill-secondary
  stroke-1
  w-[1.35rem]
`

const ArrowUpRightIcon = tw(ArrowUpRight)<IconProps>`
	${({ isHovered }) =>
		isHovered
			? `scale-100 -translate-y-3 translate-x-3`
			: `scale-0 translate-y-3 -translate-x-3`}
  ${(_p) => arrowClass}
	transition-all
	duration-500
`

const BadgeIcon = tw(BadgeCheck)`
  ${(_p) => iconClass}
`

const BadgePercentIcon = tw(BadgePercent)`
  ${(_p) => iconClass}
`

const BusIcon = tw(Bus)`
  ${(_p) => iconClass}
`

const CalendarPlusIcon = tw(CalendarPlus)`
  ${(_p) => iconClass}
`

const CompassIcon = tw(Compass)`
  ${(_p) => iconClass}
	animate-spin
	w-[2rem]
	mr-3
`

const HeartHandIcon = tw(HeartHandshake)`
  ${(_p) => iconClass}
`

const HeartPulseIcon = tw(HeartPulse)`
  ${(_p) => iconClass}
`

const MessagesIcon = tw(MessagesSquare)`
  ${(_p) => iconClass}
`

const OrbitIcon = tw(Orbit)`
  ${(_p) => iconClass}
`

const OutgoingIcon = tw(PhoneCall)`
  ${(_p) => iconClass}
`

const PillIcon = tw(Pill)`
  ${(_p) => iconClass}
`

const PuzzleIcon = tw(Puzzle)`
  ${(_p) => iconClass}
`

const SearchCheckIcon = tw(SearchCheck)`
  ${(_p) => iconClass}
`

const SendIcon = tw(Send)`
  ${(_p) => iconClass}
`

const SettingsIcon = tw(Settings2)`
  ${(_p) => settingsClass}
`

const ShowerIcon = tw(ShowerHead)`
  ${(_p) => settingsClass}
`

const UsersIcon = tw(Users)`
  ${(_p) => iconClass}
`

// * Icons

const modeClass = `
	w-[1.2rem]
  text-secondary-foreground
  transition-all
`

const SunIcon = tw(Sun)<IconProps>`
  ${(_p) => modeClass}
  ${({ isHovered }) =>
		isHovered ? 'fill-secondary-foreground rotate-45' : 'fill-none rotate-0'}
  duration-500
`
const MoonIcon = tw(Moon)<IconProps>`
  ${(_p) => modeClass}
  ${({ isHovered }) =>
		isHovered
			? 'fill-secondary-foreground/50 dark:fill-accent/10 rotate-12'
			: 'fill-none -rotate-6'}
  duration-500
`
const LaptopIcon = tw(Laptop2)<IconProps>`
  ${(_p) => modeClass}
  ${({ isHovered }) =>
		isHovered
			? 'fill-secondary-foreground/50 dark:fill-accent/10'
			: 'fill-none'}
  duration-2000
`

export {
	ArrowUpRightIcon,
	BadgeIcon,
	BadgePercentIcon,
	BusIcon,
	CalendarPlusIcon,
	CompassIcon,
	HeartHandIcon,
	HeartPulseIcon,
	LaptopIcon,
	MessagesIcon,
	MoonIcon,
	OrbitIcon,
	OutgoingIcon,
	PillIcon,
	PuzzleIcon,
	SearchCheckIcon,
	SendIcon,
	SettingsIcon,
	ShowerIcon,
	SunIcon,
	UsersIcon,
}
