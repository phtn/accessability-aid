import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

// *  HERO  * //

const HeroPrimary = tw.div`
  xl:flex
  h-full
  w-full
  py-10
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
  duration-1000
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
  text-slate-500
  dark:text-slate-400
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
  bg-primary-foreground
`

export {
	Discover,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
	PanelContainer,
}
