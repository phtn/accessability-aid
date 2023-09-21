import tw from 'tailwind-styled-components'

const Blob = tw.div`
  flex
  bg-[url('/ndis-blob.svg')]
  bg-cover
  bg-no-repeat
  rounded-full
  h-96
  w-96
  items-center
  justify-center
`

const NDISTitle = tw.h1`
  text-[4rem]
  text-background
  dark:text-foreground
  font-bold
  ml-[-64px]
`

export { Blob, NDISTitle }
