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
			<LgContentV2>
				<HeroPrimary>
					<HeroTitle>Community based activities. </HeroTitle>
					<HeroSubtext>Increased Social & Community participation.</HeroSubtext>
					<Action
						variant={'v2'}
						size={'lg'}>
						<span className='xl:text-[.90rem] text-[.75rem]'>Call us</span>
						<MoveRight className='ml-5 w-4' />
					</Action>
				</HeroPrimary>
				<HeroSecondary>
					<Image
						src={'/group-activity.jpg'}
						alt='group activity'
						width={200}
						height={200}
						className='w-full h-auto'
					/>
				</HeroSecondary>
			</LgContentV2>
		</OverlayV5>
	</LgContainerV2>
)

const Community = () => {
	return (
		<>
			<Hero />
			{/* <Panel>
				<span>yo</span>
			</Panel> */}
		</>
	)
}

export default Community
