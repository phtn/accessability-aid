'use client'
import { forwardRef, useState } from 'react'
import { cn, getInitials, map } from '@/lib/utils'
import type { AvatarProps, ListItemProps } from '../types'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ArrowUpRightIcon } from '../icons'
import {
	ListItemContent,
	ListItemDescription,
	ListItemTitle,
	ListItemPanel,
	ListItemTitleText,
} from '../styled'
import { icons, listItemLinkClass } from '../static'

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

export { ListItem }
