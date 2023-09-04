import './globals.css'
import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Accessability Aid',
	description: '#1 Health Care Provider in Australia',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={lexend.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
