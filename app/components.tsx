import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn, getInitials, map } from '@/lib/utils'
import { forwardRef, useCallback, useState } from 'react'
import {
	ActiveText,
	BrandContainer,
	BrandName,
	Flex,
	LinkContainer,
	LinkContent,
	Item,
	List,
	ListContainer,
	ListItemContent,
	ListItemDescription,
	ListItemTitle,
	LogoContainer,
	MobileContainer,
	SubList,
	SubListContent,
	SubListItem,
	Subtext,
	LinkTitle,
	ListItemPanel,
	ListItemLabel,
	ListItemTitleStatic,
	ListItemDescriptionStatic,
	ListItemTitleText,
	BrandNameSub,
	BrandNameMain,
} from './styled'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Laptop2, MenuIcon } from 'lucide-react'
import type { AvatarProps, ColorModes, ListItemProps, ModeProps } from './types'
import { HomeIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { ArrowUpRightIcon, SettingsIcon } from './icons'
import {
	careerLinks,
	colorModes,
	icons,
	listItemLinkClass,
	serviceLinks,
} from './static'

const logoOne = '/logo-green.png'
const logoTwo = '/logo-yellow.png'

const Menu = () => (
	<Flex>
		<NavigationMenu>
			<NavigationMenuList>
				<Services />
				<Careers />
			</NavigationMenuList>
		</NavigationMenu>
	</Flex>
)

const Logo = () => (
	<LogoContainer>
		<Image
			alt='logo'
			src={logoOne}
			priority
			width={24}
			height={24}
			className='w-10 h-auto relative transition-all from'
		/>
	</LogoContainer>
)

const Brand = () => (
	<BrandContainer>
		<NavigationMenu>
			<NavigationMenuList>
				<Logo />
				<HomeMenuItem />
			</NavigationMenuList>
		</NavigationMenu>
	</BrandContainer>
)

const HomeCover = () => (
	<Item>
		<NavigationMenuLink asChild>
			<LinkContainer href='/'>
				<LinkContent>
					<HomeIcon
						height={24}
						width={24}
						className='dark:text-secondary-foreground'
					/>
					<LinkTitle>Home</LinkTitle>
				</LinkContent>
				<Subtext>{`Welcome to Accessability Aid Australia! A place where care blossoms and heart finds solace.`}</Subtext>
			</LinkContainer>
		</NavigationMenuLink>
	</Item>
)

const SettingsListItem = () => {
	const { setTheme } = useTheme()

	const handleModeSelect = (mode: ColorModes) => () => {
		setTheme(mode)
	}

	const Modes = useCallback((props: ModeProps) => {
		const [isHovered, setIsHovered] = useState(false)
		const handleOnMouseEnter = () => setIsHovered(true)
		const handleOnMouseLeave = () => setIsHovered(false)
		const { Icon, mode, title } = props
		return (
			<Button
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
				variant={'ghost'}
				onClick={handleModeSelect(mode)}>
				{title}
				<Icon isHovered={isHovered} />
			</Button>
		)
	}, [])

	return (
		<SubList>
			<ListItemTitleStatic>
				<SettingsIcon />
				<ListItemLabel>Settings</ListItemLabel>
			</ListItemTitleStatic>
			<ListItemDescriptionStatic>Change color mode</ListItemDescriptionStatic>
			<SubListContent>
				{colorModes.map((colorMode, index) => {
					const { mode } = colorMode
					const modeProps = {
						...colorMode,
					}

					return (
						<SubListItem key={mode}>
							<Modes {...modeProps} />
						</SubListItem>
					)
				})}
			</SubListContent>
		</SubList>
	)
}

const HomeMenuItem = () => {
	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger>
				<BrandName>
					<BrandNameMain>Accessability Aid</BrandNameMain>
					<BrandNameSub>Australia</BrandNameSub>
				</BrandName>
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
					<SettingsListItem />
				</List>
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
}

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

const MobileMenu = () => {
	const { setTheme } = useTheme()
	const handleModeSelect = (mode: ColorModes) => () => setTheme(mode)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'>
					<MenuIcon
						className='h-[1.5rem] w-[1.5rem] lg:scale-0 transition-all duration-300 md:scale-100'
						strokeWidth={2}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={handleModeSelect('light')}>
					<Sun
						width={16}
						className='mr-3'
					/>
					Our Services
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleModeSelect('dark')}>
					<Moon
						width={16}
						className='mr-3'
					/>
					Our Place
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleModeSelect('system')}>
					<Laptop2
						width={16}
						className='mr-3'
					/>
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

const ListItemAvatar = (props: AvatarProps) => {
	const { alt, src, icon } = props
	const fallback = getInitials(alt.toUpperCase())

	const Icon = () => <>{icons.get(alt)}</>

	const options = map(
		<Icon />,
		<Avatar className='items-center justify-center'>
			<AvatarImage
				alt={alt}
				src={src}
				height={44}
				width={44}
			/>
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
	)

	return <>{options.get(icon as boolean)}</>
}

const ListItem = forwardRef<React.ElementRef<'a'>, ListItemProps>(
	({ alt, avatarSrc, children, className, icon, title, ...props }, ref) => {
		const [isHovered, setIsHovered] = useState(false)
		const handleOnMouseEnter = () => setIsHovered(true)
		const handleOnMouseLeave = () => setIsHovered(false)
		return (
			<ListItemContent>
				<NavigationMenuLink asChild>
					<a
						onMouseEnter={handleOnMouseEnter}
						onMouseLeave={handleOnMouseLeave}
						ref={ref}
						className={cn(listItemLinkClass, className)}
						{...props}>
						<ListItemPanel>
							<ListItemAvatar
								alt={alt}
								src={avatarSrc as string}
								icon={icon}
							/>
							<ListItemTitle>
								<ListItemTitleText>{title}</ListItemTitleText>
								<ArrowUpRightIcon isHovered={isHovered} />
							</ListItemTitle>
						</ListItemPanel>

						<ListItemDescription>{children}</ListItemDescription>
					</a>
				</NavigationMenuLink>
			</ListItemContent>
		)
	}
)
ListItem.displayName = 'ListItem'

export { Brand, HomeMenuItem, Menu, Mobile, Careers, Services }
