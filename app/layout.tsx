import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from './components'
import { Toaster } from 'sonner'
import Footer from './components/footer/footer'

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
					<Navbar />
					{children}
					<Toaster richColors />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
