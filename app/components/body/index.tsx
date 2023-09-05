import { Button } from '@/components/ui/button'
import { Hero } from './body'
import { BodyContainer, PanelContainer } from './styled'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Annoyed, Frown, HeartPulse, Laugh, Meh, Smile } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

const Body = () => (
	<>
		<BodyContainer>
			<Hero />
			<div className='h-32'></div>
		</BodyContainer>
		<PanelContainer>
			<QuickCheckUp />
			<Card>
				<Button onClick={() => {}}>toast</Button>
			</Card>
		</PanelContainer>
	</>
)

const QuickCheckUp = () => {
	const { toast } = useToast()

	const handleOnPressHappy = () => {
		console.log('test fire')
		toast({
			title: "Yay! Glad you're doing well.",
			description: 'Would you like to talk to a person?',
			action: <ToastAction altText='Yes'>Yes</ToastAction>,
		})
	}

	// const handleOnPressSad = () => {
	// 	toast({
	// 		title: 'yo',
	// 		description: 'lets fuck',
	// 		action: <ToastAction altText='yeah'>fuck yeah!</ToastAction>,
	// 	})
	// }
	return (
		<Card className='py-3 px-6 transition-all duration-500 rounded-3xl bg-gradient-to-br from-accent to-secondary-foreground/50 hover:scale-110'>
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
					className='hover:scale-125 transition-all duration-300'>
					<Laugh className='h-10 w-auto stroke-1' />
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
