'use client'

import { Button } from '@/components/ui/button'
import { Hero } from './body'
import { PanelContainer } from './styled'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Annoyed, Frown, Laugh, Meh, Smile } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { LgContainer, OverlayContainer } from '@/app/styled'
import { toast } from 'sonner'

const Body = () => (
	<>
		<LgContainer>
			<OverlayContainer>
				<Hero />
				<div className='h-32'></div>
			</OverlayContainer>
		</LgContainer>
		<PanelContainer>
			<QuickCheckUp />
		</PanelContainer>
	</>
)

const QuickCheckUp = () => {
	const handleOnPressHappy = () => {
		console.log('test fire')
		toast.success("Yay! Glad you're doing well.", {
			description: 'Would you like to talk to a person?',
			duration: 10000,
			action: {
				label: 'Call',
				onClick: () => window.open('tel:0415-8722-05'),
			},
		})
	}

	return (
		<Card className='border-0 py-3 px-6 transition-all duration-500 rounded-3xl bg-gradient-to-br from-secondary/25 to-background/50 dark:bg-slate-100/5'>
			<CardHeader>
				<CardTitle>Quick Check up</CardTitle>
			</CardHeader>
			<Separator className='bg-secondary-foreground/25 h-1' />
			<CardContent>
				<div className='flex flex-grow h-24 items-center justify-center'>
					<span className='text-[1.25rem]'>How are you feeling today?</span>
				</div>
			</CardContent>
			<CardFooter className='flex flex-row justify-around'>
				<Button
					onClick={handleOnPressHappy}
					variant='ghost'
					size='icon'
					className='hover:scale-110 rounded-full hover:bg-transparent transition-all duration-300'>
					{/* <Laugh className='h-10 w-auto stroke-1' /> */}
					<span className='text-3xl rounded-full px-1'>😀</span>
				</Button>
				<Button
					variant='ghost'
					className='hover:scale-125 transition-all duration-300'>
					<Smile className='h-10 w-auto stroke-1' />
				</Button>

				<Button
					variant='ghost'
					className='hover:scale-125 transition-all duration-300'>
					<Meh className='h-10 w-auto stroke-1' />
				</Button>
				<Button
					variant='ghost'
					className='hover:scale-125 transition-all duration-300'>
					<Annoyed className='h-10 w-auto stroke-1' />
				</Button>
				<Button
					// onClick={handleOnPressSad}
					variant='ghost'
					className='hover:scale-125 transition-all duration-300'>
					<Frown className='h-10 w-auto stroke-1' />
				</Button>
			</CardFooter>
		</Card>
	)
}

export default Body
