import { db } from '@/lib/db'
import { collection, doc, getDocs } from 'firebase/firestore'

export const getServices = async () => {
	const ref = collection(db, 'services')
	const query = await getDocs(ref)
	const services = query.docs.map((doc) => {
		const data = doc.data()
		return data
	})

	return services.sort((a, b) => a.rank - b.rank)
}
