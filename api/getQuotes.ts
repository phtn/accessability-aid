import axios from 'axios'

export type QuoteProps = {
	author: string
	authorSlug: string
	content: string
	dateAdded: string
	dateModified: string
	length: string
	tags: string[]
	_id: string
}

export async function getQuotes(): Promise<QuoteProps> {
	const url = 'https://api.quotable.io/quotes/random'

	return axios.get(url).then((response) => {
		const quote: QuoteProps[] = response.data as QuoteProps[]
		return quote[0]
	})
}
