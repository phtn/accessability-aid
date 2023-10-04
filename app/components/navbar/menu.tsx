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
import { CompassIcon } from '@/app/icons'
import { useFectch } from '@/api/getServices'

const Services = () => {
	const { services, loading } = useFectch('services')

	if (loading)
		<ListEmpty>
			<CompassIcon />
			Getting Services ...
		</ListEmpty>
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>Services</NavigationMenuTrigger>
			<NavigationMenuContent>
				<ListContainer>
					{services &&
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
						))}
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
