import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
	ActiveText,
	BrandContainer,
	BrandName,
	BrandSection,
	BrandSubtext,
	Cover,
	Greeting,
	LinkContainer,
	LinkContent,
	LinkTitle,
	List,
	LogoContainer,
} from './styled'
import { ListItem } from '../components'
import { Settings } from './settings'
import { HomeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

const logoOne = '/logo-green.png'
const logoTwo = '/logo-yellow.png'

const Logo = () => (
	<LogoContainer>
		<Image
			alt='logo'
			src={logoOne}
			priority
			width={24}
			height={24}
			className='w-10 h-auto relative transition-all'
		/>
	</LogoContainer>
)

const HomeCover = () => (
	<Cover>
		<NavigationMenuLink asChild>
			<LinkContainer href='/'>
				<LogoContainer>
					<Image
						alt='logo'
						src={logoOne}
						priority
						width={24}
						height={24}
						className='w-16 h-auto relative transition-all scale-75 animate-in rotate-90 duration-500 ease-out'
					/>
				</LogoContainer>
				<LinkContent>
					<HomeIcon
						height={24}
						width={24}
						className='dark:text-secondary-foreground'
					/>
					<LinkTitle>Home</LinkTitle>
				</LinkContent>
				<Greeting>{`Welcome to Accessability Aid Australia! A place where care blossoms and heart finds solace.`}</Greeting>
			</LinkContainer>
		</NavigationMenuLink>
	</Cover>
)

const HomeMenu = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>
				<BrandSection>
					<BrandName>
						Access
						<span className='text-secondary-foreground/75'>ability</span> Aid
					</BrandName>
					<BrandSubtext>Australia</BrandSubtext>
				</BrandSection>
			</NavigationMenuTrigger>
			<NavigationMenuContent>
				<List>
					<HomeCover />
					<ListItem
						alt='about'
						href='/about-us'
						title='About Us'
						icon>
						<ActiveText>{`Meet our team →`}</ActiveText>
					</ListItem>
					<ListItem
						alt='contact'
						href='/contact-us'
						title='Contact Us'
						icon>
						Get in touch with our support team.
					</ListItem>
					<Settings />
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
}

const Brand = () => (
	<BrandContainer>
		<NavigationMenu>
			<NavigationMenuList>
				<Logo />
				<HomeMenu />
			</NavigationMenuList>
		</NavigationMenu>
	</BrandContainer>
)

export { Brand }
