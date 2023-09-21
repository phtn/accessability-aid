'use client'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ListContainer, ListEmpty, Menubar } from './styled'
import { careerLinks } from '@/app/static'
import { ListItem } from '../components'
import { useEffect, useState } from 'react'
import { LinkProps } from '@/app/types'
import { getServices } from '@/api/getServices'
import { CompassIcon } from '@/app/icons'

const Services = () => {
	const [services, setServices] = useState<LinkProps[]>([] as LinkProps[])

	useEffect(() => {
		getServices().then((snapshot) => {
			const docs = snapshot.map((doc) => {
				return doc as LinkProps
			})
			setServices(docs)
		})
	}, [])
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>Services</NavigationMenuTrigger>
			<NavigationMenuContent>
				<ListContainer>
					{services.length ? (
						services.map((service, index) => (
							<ListItem
								alt={service.alt}
								key={service.title}
								title={service.title}
								href={service.href}
								avatarSrc={service.avatar}
								icon={service.icon}>
								{service.description}
							</ListItem>
						))
					) : (
						<ListEmpty>
							<CompassIcon />
							Getting Services ...
						</ListEmpty>
					)}
				</ListContainer>
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
}

const Careers = () => (
	<NavigationMenuItem>
		<NavigationMenuTrigger>Careers</NavigationMenuTrigger>
		<NavigationMenuContent>
			<ListContainer>
				{careerLinks.map((link) => (
					<ListItem
						alt={link.alt}
						avatarSrc={link.avatar}
						key={link.title}
						title={link.title}
						href={link.href}>
						{link.description}
					</ListItem>
				))}
			</ListContainer>
		</NavigationMenuContent>
	</NavigationMenuItem>
)

const FAQ = () => (
	<NavigationMenuItem>
		<NavigationMenuTrigger>FAQs</NavigationMenuTrigger>
		<NavigationMenuContent>
			<ListContainer>
				{careerLinks.map((link) => (
					<ListItem
						alt={link.alt}
						avatarSrc={link.avatar}
						key={link.title}
						title={link.title}
						href={link.href}>
						{link.description}
					</ListItem>
				))}
			</ListContainer>
		</NavigationMenuContent>
	</NavigationMenuItem>
)

const Menu = () => (
	<Menubar>
		<NavigationMenu>
			<NavigationMenuList>
				<Services />
				<Careers />
			</NavigationMenuList>
		</NavigationMenu>
	</Menubar>
)

export { Menu }
