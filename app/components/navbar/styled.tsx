import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

// *  NAVBAR  * //

const NavbarContainer = tw.div`
  flex
  md:px-16
  md:py-8
  py-4
  items-center
  justify-between
`

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
`

const ModeButton = tw(Button)`
  w-44
  justify-between
  hover:bg-accent
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
  xl:flex
  flex-row
  hidden
  z-40
  w-full
`

const ListContainer = tw.ul`
  gap-3
  grid
  lg:w-[600px]
  md:w-[500]
  md:grid-cols-2
  p-4
  w-[400]
  overflow-hidden
`

// *  HOME  *

const LogoContainer = tw.div`
  md:w-full
`

const BrandContainer = tw.div`
flex-1
flex-row
`

const Cover = tw.li`
  row-span-3
`

const CoverContent = tw.a`
  flex
  h-full
  w-full
  select-none
  flex-col
  justify-end
  bg-gradient-to-b
  from-secondary
  to-white
  dark:from-background
  dark:to-popover
  no-underline
  outline-none
  focus:shadow-md
  p-6
 `

const LinkContent = tw.div`
  flex
  flex-row
  md:mb-2
  md:mt-4
  text-xl
  font-medium
  text-primary-foreground
  dark:text-accent-foreground
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
  text-[1.0rem]
  dark:text-card-foreground/75
  md:text-[1.6rem]
  leading-tight
`

const BrandSubtext = tw.h2`
  font-light
  text-[0.75rem]
  md:text-[0.8rem]
  leading-tight
  text-secondary-foreground
  dark:text-secondary-foreground/75
`

const List = tw.ul`
  grid
  md:gap-3
  gap-1
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
  xl:scale-0
  transition-all 
  duration-300
  scale-100
`

// *  LOGIN  *  //

const LoginContainer = tw.div`
  lg:flex
  flex-row
  justify-between
  hidden
`

export {
	ActiveText,
	BrandContainer,
	BrandName,
	BrandSection,
	BrandSubtext,
	Cover,
	CoverContent,
	Description,
	Greeting,
	LinkContent,
	LinkTitle,
	List,
	ListContainer,
	LoginContainer,
	LogoContainer,
	Menubar,
	MobileContainer,
	ModeButton,
	ModeItem,
	NavbarContainer,
	SettingsContainer,
	SettingsContent,
	TitlePanel,
	Title,
}
