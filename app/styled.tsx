import tw from 'tailwind-styled-components'

type TextProps = {
	text?: string
}

const Container = tw.div`
  w-screen
  h-screen
  overflow-hidden
`

const Content = tw.div`
  flex
  rounded-sm
  items-center
  justify-center
  lg:px-40
  md:px-24
  px-16
  py-24
  bg-slate-100
  dark:bg-slate-100/5
  transition-all
  scale-105
  hover:scale-100
  ease-out
  duration-1000
`

const Navbar = tw.div`
  flex
  lg:p-8
  pr-2
  pl-1
  pt-4
  pb-8
  items-center
  justify-between
`

// * Components

const ListItemContent = tw.li`
  transition-transform
  opacity-100:animate-in
  duration-500
  ease-out
  scale-105
  hover:scale-100
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

export {
	Container,
	Content,
	ListItemContent,
	ListItemDescription,
	ListItemPanel,
	ListItemTitle,
	ListItemTitleText,
	Navbar,
}

const primary = '#90D1D4'
const bright = '#A9EBEB'
const secondary = '#0B5874'
const text = '#063343'
const dark = '#031b24'
const accent = '#EFF4CC'
