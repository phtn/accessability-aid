import { type ClassValue, clsx } from 'clsx'
import { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

function getInitials(name: string | undefined): string {
	if (!name) return ''
	const words = name.trim().split(' ')
	if (words.length === 1) {
		return words[0].slice(0, 2)
	}
	const [first, last] = words // This destructuring assignment is more efficient than accessing words[0] and words[numWords - 1]
	if (words.length === 2) {
		return first.charAt(0) + last.charAt(0)
	}
	return first.charAt(0) + last.slice(-1) // Using slice(-1) instead of charAt(0) is more efficient for the last character
}

function map(e1: ReactElement, e2: ReactElement): Map<boolean, ReactElement> {
	const pairs = new Map([
		[true, e1],
		[false, e2],
	])
	return pairs
}

export { cn, getInitials, map }
