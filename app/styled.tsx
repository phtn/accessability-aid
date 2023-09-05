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

export {
	Container,
	ListItemContent,
	ListItemDescription,
	ListItemPanel,
	ListItemTitle,
	ListItemTitleText,
}

const primary = '#90D1D4'
const bright = '#A9EBEB'
const secondary = '#0B5874'
const text = '#063343'
const dark = '#031b24'
const accent = '#EFF4CC'
