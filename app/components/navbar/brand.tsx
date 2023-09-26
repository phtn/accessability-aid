'use client'

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
	Cover,
	CoverContent,
	Greeting,
	LinkContent,
	LinkTitle,
	List,
	LogoContainer,
	LogoContainerCover,
} from './styled'
import { ListItem } from '../components'
import { Settings } from './settings'
import Image from 'next/image'
import Link from 'next/link'

const logoOne = '/new-logo-aaa.svg'

const Logo = () => (
	<LogoContainer>
		<Image
			alt='aaa-logo'
			src={logoOne}
			width={100}
			height={100}
			className='w-full scale-75 transition-transform animate-in duration-1000 ease-in'
		/>
	</LogoContainer>
)

const LogoCover = () => (
	<LogoContainerCover>
		<Image
			alt='aaa-logo'
			src={logoOne}
			width={112}
			height={112}
			className='w-full scale-90 transition-transform animate-in duration-1000 ease-in'
		/>
	</LogoContainerCover>
)

const HomeCover = () => (
	<Cover>
		<NavigationMenuLink asChild>
			<CoverContent href='/'>
				<LogoCover />
				<LinkContent>
					<LinkTitle>Home</LinkTitle>
				</LinkContent>
				<Greeting>{`Welcome to Accessability Aid! A place where care blossoms and heart finds solace.`}</Greeting>
			</CoverContent>
		</NavigationMenuLink>
	</Cover>
)

const HomeMenu = () => {
	return (
		<Link href={'/'}>
			<NavigationMenuItem>
				<NavigationMenuTrigger>
					<BrandSection>
						<BrandName>
							Access
							<span className='text-secondary-foreground dark:text-secondary-foreground'>
								Ability
							</span>
							<span className='text-secondary dark:text-accent/75'> Aid</span>
						</BrandName>
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
							href='tel:0415-8722-05'
							title='Contact Us'
							icon>
							Get in touch with our support team.
						</ListItem>
						<Settings />
					</List>
				</NavigationMenuContent>
			</NavigationMenuItem>
		</Link>
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
