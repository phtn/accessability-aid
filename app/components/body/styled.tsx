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
  from-secondary/5
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
  z-0
  transition-all
  duration-1000
  hover:p-1
`
const HeroPrimary = tw.div`
  flex
  h-full
  w-full
  px-4
  xl:px-20
  lg:px-10
  flex-col
  justify-between
  items-start
`

const HeroSecondary = tw.div`
  h-fit
  items-center
  justify-center
  md:rounded-xl
  overflow-hidden
  transition-all
  lg:scale-95
  hover:scale-100
  transform-gpu
  duration-500
  z-0
`

const HeroTitle = tw.h1`
  text-[2rem]
  md:text-[3.0rem]
  font-light
  text-foreground
  dark:text-secondary-foreground
  leading-tight
`

const HeroSubtext = tw.h1`
  text-[1.15rem]
  md:text-[1.25rem]
  font-light
  text-slate-400
`

const Discover = tw(Button)`
  rounded-full
  transition-all
  hover:px-10
  ease-out
  duration-500
`

export {
	BodyContainer,
	Discover,
	HeroContainer,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
}
