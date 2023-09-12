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
import { Tent } from 'lucide-react'
import Link from 'next/link'

const logoOne = '/logo-green.png'
const logoTwo = '/logo-yellow.png'

const Logo = () => (
	<LogoContainer>
		<Tent className='h-10 md:h-14 w-auto stroke-1 dark:text-secondary-foreground/75' />
	</LogoContainer>
)

const HomeCover = () => (
	<Cover>
		<NavigationMenuLink asChild>
			<CoverContent href='/'>
				<LogoContainer>
					<Tent className='h-32 w-auto stroke-1 dark:text-secondary-foreground/75 transition-all scale-75 animate-in duration-1000 ease-out' />
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
							href='/contact-us'
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
