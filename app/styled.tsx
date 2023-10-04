import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

type TextProps = {
	text?: string
}

const Container = tw.div`
  w-full
  h-full
  overflow-hidden
`

// * Components

const ListItemContent = tw.li`
  duration-500
  ease-out
  scale-105
  hover:scale-100
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
  dark:text-slate-400
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

// *  SHARED  * //

const Action = tw(Button)`
  rounded-full
  transition-all
  hover:px-10
  py-4
  ease-out
  duration-500
  mb-12
  xl:mb-0
`

const LgContainer = tw.div`
  flex-1
  rounded-sm
  items-center
  justify-center
  px-0
  pt-20
  bg-gradient-to-br
  bg-slate-100
  from-secondary/25
  to-background
  dark:bg-slate-100/5
  transition-all
  ease-out
  duration-1000
`

const LgContainerV2 = tw.div`
  flex-1
  rounded-sm
  items-center
  justify-center
  px-0
  pt-20
  bg-gradient-to-br
  bg-accent/75
  from-accent/5
  to-background
  dark:bg-slate-100/5
  dark:hover:bg-slate-100/10
  transition-all
  ease-in
  duration-1000
  transform-gpu
`

const LgContainerV3 = tw.div`
  flex-1
  rounded-sm
  items-center
  justify-center
  px-0
  pt-20
  bg-gradient-to-br
  bg-secondary/75
  from-accent/5
  to-background
  dark:bg-slate-100/5
  dark:hover:bg-slate-100/10
  transition-all
  ease-in
  duration-1000
  transform-gpu
`

const LgContent = tw.div`
  flex-1
  lg:px-40
  lg:pb-56
  xl:grid
  xl:grid-cols-2
  transition-all
  duration-1000
  lg:hover:px-[10.85%]
  lg:h-[600px]
  pb-[400px]
`

const LgContentV2 = tw.div`
  flex-1
  lg:px-40
  lg:pb-72
  xl:grid
  xl:grid-cols-2
  transition-all
  duration-1000
  lg:hover:px-[10.85%]
  lg:h-[600px]
  pb-[400px]
`

const LgContentV3 = tw.div`
  flex-1
  lg:px-40
  lg:pb-96
  xl:grid
  xl:grid-cols-2
  transition-all
  duration-1000
  lg:hover:px-[10.85%]
  lg:h-[600px]
  pb-[400px]
`

const LgContentRow = tw.div`
  flex
  flex-row
`

const OverlayContainer = tw.div`
  bg-[url('/bottom-waves.svg')]
  bg-no-repeat
  bg-cover
`

const OverlayV2 = tw.div`
  bg-[url('/waves-v4.svg')]
  bg-no-repeat
  bg-cover
`

const OverlayV5 = tw.div`
  bg-[url('/waves-v6.svg')]
  bg-no-repeat
  bg-cover
`

export {
	Action,
	Container,
	ListItemContent,
	ListItemDescription,
	ListItemPanel,
	ListItemTitle,
	ListItemTitleText,
	LgContainer,
	LgContainerV2,
	LgContainerV3,
	LgContent,
	LgContentV2,
	LgContentV3,
	LgContentRow,
	OverlayContainer,
	OverlayV2,
	OverlayV5,
}
