import { Button } from '@/components/ui/button'
import tw from 'tailwind-styled-components'

const HeroContainer = tw.div`
  flex-1
  h-full
  lg:grid
  lg:grid-cols-2
  z-0
`
const HeroPrimary = tw.div`
  flex-1
  h-full
  w-full
  px:8
  lg:px-24
  md:px-16
  justify-center
  items-center
`

const HeroSecondary = tw.div`
  h-fit
  bg-slate-500
  items-center
  justify-center
  md:rounded-2xl
  overflow-hidden
  transition-all
  lg:scale-95
  hover:scale-100
  transform-gpu
  duration-500
  z-0
`

const HeroTitle = tw.h1`
  text-[2.25rem]
  md:text-[3.0rem]
  font-light
  text-foreground
  dark:text-secondary-foreground
  leading-tight
  mb-6
`

const HeroSubtext = tw.h1`
  text-[1.15rem]
  md:text-[1.25rem]
  font-light
  text-slate-400
  my-8
`

const Discover = tw(Button)`
  rounded-full
  px-8
  py-6
  mb-8
  transition-all
  hover:px-10
  ease-out
  duration-500
`

export {
	Discover,
	HeroContainer,
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
}
