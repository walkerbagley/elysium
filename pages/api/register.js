import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import errorCodes from '../../utils/errorCodes'

const client = new ApolloClient({
	uri: 'https://graphql.fauna.com/graphql',
	headers: {
		Authorization: 'Bearer fnADxQLJrQACB3aKE5tSOSpEexXAOxki03GqDvyr',
	},
	cache: new InMemoryCache(),
})

const mutation = gql`
	mutation Register($email: String!, $password: String!) {
		register(email: $email, password: $password) {
			_id
		}
	}
`

export default async (req, res) => {
	const { email, password } = req.body

	try {
		await client.mutate({ mutation, variables: { email, password } })

		res.statusCode = 200
		res.end()
	} catch (error) {
		if (error.message === 'Instance is not unique.') {
			res.statusCode = 403
			res.json({ error: { message: 'Email already registered', code: errorCodes.USER_ALREADY_REGISTERED } })
			// TODO: Omit message in production
			return
		}

		console.error(error) // TODO: Install error handling tool like Sentry
		res.statusCode = 500
		res.end()
	}
}
