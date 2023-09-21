'use client'

import { MoveRight } from 'lucide-react'
import {
	HeroPrimary,
	HeroSecondary,
	HeroSubtext,
	HeroTitle,
} from '../components/body/styled'
import {
	Action,
	LgContainer,
	LgContainerV2,
	LgContent,
	LgContentRow,
	LgContentV2,
	LgContentV3,
	OverlayContainer,
	OverlayV2,
	OverlayV5,
} from '../styled'
import { Panel } from '../components/components'
import Image from 'next/image'

const Hero = () => (
	<LgContainerV2>
		<OverlayV5>
			<LgContentV3>
				<HeroPrimary>
					<HeroTitle>Assistance with Daily Tasks & Shared Living. </HeroTitle>
					<HeroSubtext>
						Caring companion to simplify your everyday life.
					</HeroSubtext>
					<Action
						variant={'v2'}
						size={'lg'}>
						<span className='xl:text-[.90rem] text-[.75rem]'>Call us</span>
						<MoveRight className='ml-5 w-4' />
					</Action>
				</HeroPrimary>
				<HeroSecondary>
					<Image
						src={'/household-image.jpg'}
						alt='household help'
						width={200}
						height={200}
						className='w-full h-auto'
					/>
				</HeroSecondary>
			</LgContentV3>
		</OverlayV5>
	</LgContainerV2>
)

const Household = () => {
	return (
		<>
			<Hero />
			{/* <Panel>
				<span>yo</span>
			</Panel> */}
		</>
	)
}

export default Household
