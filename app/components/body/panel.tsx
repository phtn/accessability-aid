'use client'
import { ReactElement } from 'react'
import { PanelContainer } from './styled'

export const Panel = ({ children }: { children: ReactElement }) => (
	<PanelContainer>{children}</PanelContainer>
)
