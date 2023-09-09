'use client'
import { Button } from '@/components/ui/button'
import { LoginContainer } from './styled'

export const Login = () => {
	return (
		<LoginContainer>
			<Button
				variant='ghost'
				className='rounded-xl w-24 mx-4 text-primary-foreground hover:bg-accent dark:text-secondary-foreground dark:hover:bg-accent dark:hover:text-primary-foreground'>
				<span className='font-light'>Sign up</span>
			</Button>
			<Button
				variant='ghost'
				className='rounded-xl w-24 bg-secondary text-background hover:bg-secondary-foreground hover:text-background dark:bg-secondary-foreground dark:hover:bg-primary/95 dark:hover:text-primary-foreground'>
				<span className='font-light text-background'>Login</span>
			</Button>
		</LoginContainer>
	)
}
