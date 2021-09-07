import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://graphql.fauna.com/graphql',
	headers: {
		Authorization: 'Bearer fnADxQLJrQACB3aKE5tSOSpEexXAOxki03GqDvyr',
	},
	cache: new InMemoryCache(),
})

const mutation = gql`
	mutation Logout {
		logout
	}
`

export default async (req, res) => {
	try {
		await client.mutate({ mutation })

		res.statusCode = 200
		res.setHeader('Set-Cookie', [
			`token=e; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
			`userInfo=e; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
		])
		res.end()
	} catch (error) {
		console.error(error) // TODO: Install error handling tool like Sentry
		res.statusCode = 500
		res.end()
	}
}
