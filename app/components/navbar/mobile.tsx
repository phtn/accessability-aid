import { MobileContainer } from './styled'
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { listItemLinkClass } from '@/app/static'
import Link from 'next/link'
import { useFectch } from '@/api/getServices'

const MobileMenuSheet = () => {
	const { services, loading } = useFectch('services')

	const Services = () => (
		<div>
			{services.map((service) => (
				<Link
					href={service.href}
					key={service.title}>
					<div
						className={listItemLinkClass}
						title={service.title}>
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
