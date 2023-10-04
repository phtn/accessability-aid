'use client'
import Image from 'next/image'
import { Container } from './styled'
import { Dices, HeartHandshake, MessagesSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getQuotes } from '@/api/getQuotes'
import { toast } from 'sonner'
import { getFirstWord } from '@/utils/helpers'
const logoOne = '/new-logo-aaa.svg'

const Footer = () => {
	const rollDice = () => {
		const quote = getQuotes().then((q) => {
			const { author, content, tags } = q
			toast(author, {
				description: content,
				duration: 10000,
				action: {
					label: getFirstWord(tags[0]),
					onClick: () => getQuotes(),
				},
			})
		})
		return quote
	}

	const onPressChat = () => {
		toast('Chat with us!', {
			description: 'Chat feature available soon!',
			duration: 10000,
			action: {
				label: 'Call',
				onClick: () => window.open('tel:0415-8722-05'),
			},
		})
	}

	const onPressCall = () => {
		toast('0415-8722-05', {
			description: 'Ready to talk to us?',
			duration: 10000,
			action: {
				label: 'Call',
				onClick: () => window.open('tel:0415-8722-05'),
			},
		})
	}

	return (
		<Container>
			<div className='h-44 w-full p-4 grid grid-cols-4'>
				<div className='text-secondary items-center justify-center flex h-full'>
					<Button
						variant='ghost'
						className='flex flex-row items-center'>
						<Image
							alt='aaa-logo'
							src={logoOne}
							width={112}
							height={112}
							className='w-10'
						/>
					</Button>
				</div>
				<div className=''>
					<span className='text-background items-center justify-center flex h-full'>
						<Button
							variant='ghost'
							size='icon'
							onClick={rollDice}>
							<Dices className='text-secondary' />
						</Button>
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						<Button
							variant='ghost'
							size='icon'
							onClick={onPressChat}>
							<MessagesSquare className='text-secondary' />
						</Button>
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						<Button
							variant='ghost'
							size='icon'
							onClick={onPressCall}>
							<Phone className='text-secondary' />
						</Button>
					</span>
				</div>
			</div>
			<div className='text-xs text-secondary-foreground bg-zinc-800 dark:bg-secondary-foreground/10 p-6 font-light'>
				<span className='font-medium text-lg text-background dark:text-accent flex-row flex items-center'>
					<HeartHandshake className='w-6 mr-3' />
					Acknowledgements
				</span>
				<br />
				<br />
				Access Ability Aid acknowledges the traditional custodians of Australia
				and recognises their continuing connection to land, waters and
				community. We pay our respects to them and their cultures to past,
				present, and emerging elders. ❤️
			</div>
		</Container>
	)
}
export default Footer
