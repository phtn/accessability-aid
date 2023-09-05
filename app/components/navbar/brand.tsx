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
	CoverContent,
	Greeting,
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
			className='w-12 h-auto relative transition-all md:ml-6 mr:4'
		/>
	</LogoContainer>
)

const HomeCover = () => (
	<Cover>
		<NavigationMenuLink asChild>
			<CoverContent href='/'>
				<LogoContainer>
					<Image
						alt='logo'
						src={logoOne}
						priority
						width={24}
						height={24}
						className='w-24 h-auto relative transition-all scale-75 animate-in rotate-45 duration-1000 ease-out'
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
			</CoverContent>
		</NavigationMenuLink>
	</Cover>
)

const HomeMenu = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>
				<BrandSection>
					<BrandName>
						Access &middot;
						<span className='text-secondary-foreground dark:text-secondary-foreground'>
							{' '}
							Ability &middot;
						</span>
						<span className='text-secondary dark:text-secondary-foreground/75'>
							{' '}
							Aid
						</span>
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
