import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

// *  CONTENT * //

const BodyContainer = tw.div`
  flex-1
  rounded-sm
  items-center
  justify-center
  lg:px-40
  md:p-24
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

// *  HERO  * //

const HeroContainer = tw.div`
  flex-1
  h-full
  xl:grid
  xl:grid-cols-2
  transition-all
  duration-1000
  hover:p-1
`
const HeroPrimary = tw.div`
  xl:flex
  h-full
  w-full
  px-6
  xl:px-20
  lg:px-10
  flex-col
  justify-between
  items-center
  xl:items-start
`

const HeroSecondary = tw.div`
  h-fit
  items-center
  justify-center
  md:rounded-xl
  overflow-hidden
  transition-all
  xl:scale-95
  hover:scale-100
  transform-gpu
  duration-500
`

const HeroTitle = tw.h1`
  text-[2rem]
  md:text-[3.0rem]
  font-light
  text-foreground
  dark:text-secondary-foreground
  leading-tight
  min-w-[90%]
  self-center
`

const HeroSubtext = tw.h1`
  text-[1.15rem]
  md:text-[1.25rem]
  font-light
  text-slate-400
  my-10
  w-[90%]
  flex
`

const Discover = tw(Button)`
  rounded-full
  transition-all
  hover:px-10
  py-4
  ease-out
  duration-500
  mb-12
  xl:mb-0
`

//  *  PANEL  *  //

const PanelContainer = tw.div`
  h-96
  flex-1
  w-full
  lg:px-16
  md:p-12
  p-10
  grid
  xl:grid-cols-3
  md:grid-cols-2
  gap-16
`

export {
	BodyContainer,
	Discover,
	HeroContainer,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
	PanelContainer,
}
