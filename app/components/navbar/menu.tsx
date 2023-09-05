'use client'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ListContainer, Menubar } from './styled'
import { serviceLinks, careerLinks } from '@/app/static'
import { ListItem } from '../components'

const Services = () => (
	<NavigationMenuItem>
		<NavigationMenuTrigger>Services</NavigationMenuTrigger>
		<NavigationMenuContent>
			<ListContainer>
				{serviceLinks.map((link) => (
					<ListItem
						alt={link.alt}
						key={link.title}
						title={link.title}
						href={link.href}
						avatarSrc={link.avatar}
						icon={link.icon}>
						{link.description}
					</ListItem>
				))}
			</ListContainer>
		</NavigationMenuContent>
	</NavigationMenuItem>
)

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
