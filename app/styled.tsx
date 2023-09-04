import tw from 'tailwind-styled-components'

const Container = tw.div`
  w-screen
  h-screen
`

const Content = tw.div`
  flex
  rounded-sm
  items-center
  justify-center
  md:px-40
  py-24
  bg-slate-100
  dark:bg-slate-100/5
`

const Navbar = tw.div`
  flex
  flex-row
  md:p-8
  pr-2
  pl-1
  py-4
  items-center
  justify-between
`

// * Components

const ActiveText = tw.span`
  text-secondary-foreground
`

const BrandContainer = tw.div`
flex-row
`

const BrandContainerMobile = tw.div`

`

const BrandName = tw.div`
  flex
  flex-col
  items-start
  bg-foreground/
`

const BrandNameMain = tw.h2`
  font-medium
  text-[1.0 rem]
  md:text-[1.6rem]
  leading-tight
`

const BrandNameSub = tw.h2`
  font-light
  text-[0.9rem]
  md:text-md
  leading-tight
  text-secondary-foreground
  dark:text-secondary-foreground/50
`

const Flex = tw.div`
  flex-row
  items-center
  justify-center
  transition-transform
  animate-in
  scale-x-0
  md:scale-x-100
  hidden
  md:flex
  z-50
`

const Hero = tw.div`
  flex-1
  h-full
  md:grid
  md:grid-cols-2
  z-0
`
const HeroPrimary = tw.div`
  flex-1
  h-full
  w-full
  px-24
  justify-center
  items-center
`

const HeroSecondary = tw.div`
  h-full
  w-full
  bg-slate-500
  items-center
  justify-center
  rounded-3xl
  overflow-hidden
  transition-all
  scale-95
  hover:scale-100
  transform-gpu
  duration-1000
  z-0
`

const HeroTitle = tw.h1`
  text-[2.5rem]
  md:text-[4.0rem]
  font-light
  text-foreground
  leading-tight
  mb-12
`

const HeroSubtext = tw.h1`
  text-[1.25rem]
  md:text-[1.75rem]
  font-light
  text-slate-400
  my-16
`

const Item = tw.li`
  row-span-3
  flex-1
`

const LinkContainer = tw.a`
  flex
  h-full
  w-full
  min-w-full
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
  mb-2
  mt-4
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

const List = tw.ul`
  grid
  gap-3
  xs:w-[300px]
  md:w-[400px]
  lg:w-[600px]
  lg:grid-cols-[.75fr_1fr]
`

const ListContainer = tw.ul`
  grid
  gap-3
  p-4
  xs:w-[300px]
  md:w-[500px]
  md:grid-cols-2
  lg:w-[600px]
`

const ListItemContent = tw.li`
  transition-transform
  scale-100
  w-full
`

const ListItemPanel = tw.div`
  flex
  flex-row
  items-center
  mb-3
`

const ListItemDescription = tw.p`
  line-clamp-2
  text-sm
  leading-snug 
  text-muted-foreground
`

const ListItemDescriptionStatic = tw.p`
  line-clamp-2
  text-sm
  leading-snug 
  text-muted-foreground
  ml-3
`

const ListItemTitle = tw.div`
  flex
  flex-row
  ml-3
  items-center
  justify-between
  w-full
`

const ListItemTitleText = tw.h1`
  text-[1.2rem]
  font-bold
`

const ListItemTitleStatic = tw.div`
  flex
  flex-row
  text-[1.0rem]
  md:text-[1.2rem]
  font-bold
  mb-3
  ml-3
  items-center
  text-popover-foreground
`

const ListItemLabel = tw.h1`
  ml-3
  text-[1.2rem]
`

const LogoContainer = tw.div`
  flex
  flex-row
  w-0
  md:w-full
`

const MobileContainer = tw.div`
  flex
`

const SubList = tw.div`
  items-center
  justify-center
  rounded-lg
  bg-background
  dark:bg-background/50
  m-4
  p-2
`

const SubListContent = tw.div`
  mt-4
`

const SubListItem = tw.div`
  flex
  flex-row
  text-sm
`

const Subtext = tw.p`
  text-sm
  leading-relaxed
  text-muted-foreground
  my-4
`

export {
	ActiveText,
	BrandContainer,
	BrandName,
	BrandNameMain,
	BrandNameSub,
	Container,
	Content,
	Flex,
	Hero,
	HeroPrimary,
	HeroSecondary,
	HeroTitle,
	HeroSubtext,
	Item,
	LinkContent,
	LinkContainer,
	LinkTitle,
	List,
	ListContainer,
	ListItemContent,
	ListItemDescription,
	ListItemDescriptionStatic,
	ListItemLabel,
	ListItemPanel,
	ListItemTitle,
	ListItemTitleText,
	ListItemTitleStatic,
	LogoContainer,
	MobileContainer,
	Navbar,
	SubList,
	SubListContent,
	SubListItem,
	Subtext,
}

const primary = '#90D1D4'
const bright = '#A9EBEB'
const secondary = '#0B5874'
const text = '#063343'
const dark = '#031b24'
const accent = '#EFF4CC'
