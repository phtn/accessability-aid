import { LinkProps } from '@/app/types'
import { db } from '@/lib/db'
import {
	DocumentData,
	QuerySnapshot,
	collection,
	doc,
	getDocs,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

type ServiceRanked = LinkProps & { rank: number }

const sortByRank = (arr: ServiceRanked[]) => {
	const sorted = arr.sort((a, b) => a.rank - b.rank)
	return sorted
}

export const useFectch = (collectionPath: string) => {
	const [services, setServices] = useState<LinkProps[]>([] as LinkProps[])
	const [error, setError] = useState<Error>()
	const [loading, setLoading] = useState(false)

	const onError = (error: Error) => {
		setError(error)
		setLoading(false)
	}

	const onNext = (querySnapshot: QuerySnapshot<DocumentData>) => {
		const docs = querySnapshot.docs.map((doc) => {
			const data = doc.data() as ServiceRanked
			return data
		})
		const sorted = sortByRank(docs)
		setServices(sorted)
		setLoading(false)
	}

	useEffect(() => {
		setLoading(true)
		const ref = collection(db, collectionPath)
		const unsubscribe = getDocs(ref).then(onNext, onError)
		return () => {
			unsubscribe
		}
	}, [])

	return { services, error, loading }
}
