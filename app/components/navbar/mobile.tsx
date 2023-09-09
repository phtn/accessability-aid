'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MobileContainer } from './styled'
import { Button } from '@/components/ui/button'
import { BadgeIcon } from '@/app/icons'
import { LayoutGrid, User2Icon } from 'lucide-react'

const MobileMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'>
					<LayoutGrid className='' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => null}>
					<BadgeIcon />
					Our Services
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => null}>
					<BadgeIcon />
					Our Place
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => null}>
					<BadgeIcon />
					Call Us
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

const Mobile = () => (
	<MobileContainer>
		<MobileMenu />
	</MobileContainer>
)

export { Mobile }
