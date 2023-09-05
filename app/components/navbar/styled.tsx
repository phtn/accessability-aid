import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

// *  SETTINGS  * //

const SettingsContainer = tw.div`
  items-center
  justify-center
  rounded-lg
  bg-slate-100
  dark:bg-background/50
  m-4
  p-2
`

const SettingsContent = tw.div`
  mt-4
`

const TitlePanel = tw.div`
  flex
  flex-row
  text-[1.0rem]
  md:text-[1.2rem]
  font-bold
  my-3
  ml-3
  items-center
  text-popover-foreground
`

const Title = tw.h1`
  ml-3
  text-[1.2rem]

`

const Description = tw.p`
  line-clamp-2
  text-sm
  leading-snug 
  text-muted-foreground
  ml-3
`

const ModeItem = tw.div`
  flex
  flex-row
  text-sm
  transition-opacity
  duration-100
  opacity-100
`

const ModeButton = tw(Button)`
  w-44
  justify-between
`

// *  MENU  * //

const Menubar = tw.div`
  items-center
  justify-center
  transition-transform
  duration-200
  ease-out
  scale-x-0
  lg:scale-x-100
  lg:flex
  hidden
  lg:visible
  z-50
`

const ListContainer = tw.ul`
  gap-3
  md:grid
  md:grid-cols-2
  xs:w-[300px]
  md:w-[500px]
  lg:w-[600px]
  p-4
`

// *  HOME  *

const LogoContainer = tw.div`
  flex
  flex-row
  w-0
  md:w-full
`

const BrandContainer = tw.div`
flex-row
`

const Cover = tw.li`
  row-span-3
`

const LinkContainer = tw.a`
  flex
  h-full
  w-full
  select-none
  flex-col
  justify-end
  bg-gradient-to-b
  from-secondary
  dark:from-background
  to-white
  dark:to-popover
  no-underline
  outline-none
  focus:shadow-md
  p-6
  `

const LinkContent = tw.div`
  flex
  md:mb-2
  md:mt-4
  text-xl
  font-medium
  text-primary-foreground
  dark:text-accent-foreground
  flex-row
  items-center
`

const LinkTitle = tw.h1`
  mx-4
  font-bold
  text-md
`

const Greeting = tw.p`
  text-sm
  leading-relaxed
  text-muted-foreground
  my-4
`

const BrandSection = tw.div`
  flex
  flex-col
  items-start
`

const BrandName = tw.h2`
  font-medium
  text-[1.0 rem]
  md:text-[1.6rem]
  leading-tight
`

const BrandSubtext = tw.h2`
  font-light
  text-[0.9rem]
  md:text-md
  leading-tight
  text-secondary-foreground
  dark:text-secondary-foreground/50
`

const List = tw.ul`
  grid
  gap-3
  xs:w-[300px]
  md:w-[400px]
  lg:w-[600px]
  lg:grid-cols-[.75fr_1fr]
`

const ActiveText = tw.span`
  text-secondary-foreground
`

// *  MOBILE  *  //

const MobileContainer = tw.div`
  lg:scale-0
  transition-all 
  duration-300
  scale-100
`

export {
	ActiveText,
	BrandContainer,
	BrandName,
	BrandSection,
	BrandSubtext,
	Cover,
	Description,
	Greeting,
	LinkContainer,
	LinkContent,
	LinkTitle,
	List,
	ListContainer,
	LogoContainer,
	Menubar,
	MobileContainer,
	ModeButton,
	ModeItem,
	SettingsContainer,
	SettingsContent,
	TitlePanel,
	Title,
}
