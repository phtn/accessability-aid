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
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { getServices } from '@/api/getServices'
import { useEffect, useState } from 'react'
import { LinkProps } from '@/app/types'
import { ListItem } from '../components'
import { listItemLinkClass } from '@/app/static'
import Link from 'next/link'

const MobileMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'>
					<LayoutGrid className='text-secondary-foreground' />
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

const MobileMenuSheet = () => {
	const [services, setServices] = useState<LinkProps[]>([] as LinkProps[])

	useEffect(() => {
		getServices().then((snapshot) => {
			const docs = snapshot.map((doc) => {
				return doc as LinkProps
			})
			setServices(docs)
		})
	})
	const Services = () => (
		<div>
			{services.map((service) => (
				<Link href={service.href}>
					<div
						className={listItemLinkClass}
						// alt={service.alt}
						key={service.title}
						title={service.title}

						// avatarSrc={service.avatar}
						// icon={service.icon}
					>
						{service.title}
					</div>
				</Link>
			))}
		</div>
	)
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'>
					<LayoutGrid className='text-secondary-foreground' />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'></div>
					<div className='grid grid-cols-4 items-center gap-4'></div>
				</div>
				<SheetFooter>
					<div className='border border-slate-500 p-6 rounded-xl bg-background/50'>
						<div className='border-b pb-4'>Services</div>
						<Services />
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

const Mobile = () => (
	<MobileContainer>
		<MobileMenuSheet />
	</MobileContainer>
)

export { Mobile }
