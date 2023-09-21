'use client'
import { Button } from '@/components/ui/button'
import { LoginContainer } from './styled'
import { MessageCircleIcon, SendHorizonalIcon } from 'lucide-react'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

export const Login = () => {
	return (
		<LoginContainer>
			<Button
				variant='ghost'
				className='rounded-xl w-32 mx-4 font-normal items-center justify-between text-secondary-foreground hover:bg-accent dark:text-secondary-foreground dark:hover:bg-accent dark:hover:text-primary-foreground'>
				<span className=''>Enquire</span>
				<MessageCircleIcon className='h-6 w-6 mx-3 text-secondary-foreground' />
			</Button>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='ghost'
						className='rounded-xl w-40 font-normal bg-secondary-foreground text-background hover:shadow-md hover:bg-foreground transition-all duration-1000 hover:text-background dark:bg-secondary-foreground dark:hover:bg-primary/95 dark:hover:text-primary-foreground'>
						<span className='text-background'>Member Login</span>
					</Button>
				</SheetTrigger>
				<SheetContent>
					<div className='flex-1 h-32 justify-center p-6'>
						<h1 className='text-2xl dark:text-accent'>Member Login</h1>
						<span className='text-secondary-foreground font-light text-sm'>
							Login to your account
						</span>
					</div>

					<div className='flex w-full dark:bg-background/80 bg-secondary-foreground/75 rounded-lg h-64 p-6'>
						<LoginForm />
					</div>
				</SheetContent>
			</Sheet>
		</LoginContainer>
	)
}

const FormSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	password: z.string().min(2, {
		message: 'Invalid logins',
	}),
})

const LoginForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='w-2/3 space-y-6'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Email'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Password'
									type='password'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	)
}
