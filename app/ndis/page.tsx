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
	LgContentV2,
	OverlayContainer,
	OverlayV2,
} from '../styled'
import { Blob, NDISTitle } from './styled'
import { Panel } from '../components/components'

const Hero = () => (
	<LgContainerV2>
		<OverlayV2>
			<LgContentV2>
				<HeroPrimary>
					<HeroTitle>Navigating with NDIS</HeroTitle>
					<HeroSubtext>
						Your guide to getting the right support and independence.
					</HeroSubtext>
					<Action
						variant={'v2'}
						size={'lg'}>
						<span className='xl:text-[.90rem] text-[.75rem]'>
							Sign up today!
						</span>
						<MoveRight className='ml-5 w-4' />
					</Action>
				</HeroPrimary>
				<HeroSecondary>
					<Blob>
						<NDISTitle>ndis</NDISTitle>
					</Blob>
				</HeroSecondary>
			</LgContentV2>
		</OverlayV2>
	</LgContainerV2>
)

const NDIS = () => {
	return (
		<>
			<Hero />
			{/* <Panel>
				<span>yo</span>
			</Panel> */}
		</>
	)
}

export default NDIS
