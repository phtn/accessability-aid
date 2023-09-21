export const Toasted = ({ text }: { text: string }) => {
	return (
		<div className='bg-background flex w-full h-full text-foreground'>
			{text}
		</div>
	)
}
