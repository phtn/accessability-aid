'use client'
import Image from 'next/image'
import { Container } from './styled'
import { Dices, MessagesSquare, Phone, Send, Spade } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { QuoteProps, getQuotes } from '@/api/getQuotes'
import { toast } from 'sonner'
const logoOne = '/new-logo-aaa.svg'
const Footer = () => {
	const rollDice = async () => {
		const quote: Promise<QuoteProps> = getQuotes()
		const { author, content, tags } = await quote
		console.log(tags[0])
		return toast(author, {
			description: content,
			duration: 10000,
			action: {
				label: tags[0],
				onClick: () => getQuotes(),
			},
		})
	}

	return (
		<Container>
			<div className='h-44 w-full p-4 grid grid-cols-6'>
				<div className='text-secondary items-center justify-center flex h-full'>
					<div className='flex flex-row items-center'>
						<Image
							alt='aaa-logo'
							src={logoOne}
							width={112}
							height={112}
							className='w-10'
						/>
						<span className='text-accent text-[0.8rem] font-semibold tracking-wide'>
							Access Ability Aid
						</span>
					</div>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						<Button
							size='icon'
							onClick={rollDice}>
							<Dices />
						</Button>
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						<MessagesSquare />
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						<Phone />
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						Our Mission
					</span>
				</div>
				<div className=''>
					<span className='text-secondary items-center justify-center flex h-full'>
						Customer Support
					</span>
				</div>
			</div>
		</Container>
	)
}
export default Footer
