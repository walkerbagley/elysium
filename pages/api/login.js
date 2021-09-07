import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://graphql.fauna.com/graphql',
	headers: {
		Authorization: 'Bearer fnADxQLJrQACB3aKE5tSOSpEexXAOxki03GqDvyr', // TODO: Move to .env
	},
	cache: new InMemoryCache(),
})

const mutation = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			secret
		}
	}
`

export default async (req, res) => {
	const { email, password } = req.body
	try {
		const { data } = await client.mutate({ mutation, variables: { email, password } })

		// const host = `${req.headers['x-forwarded-host'] ? req.headers['x-forwarded-host'] : req.headers.host}`
		// const [domain] = host.split(':')

		res.statusCode = 204
		res.setHeader('Set-Cookie', [
			`token=${data.login.secret}; Max-Age=31536000; Path=/; HttpOnly`, // TODO: Add secure
			`userInfo=${email}; Max-Age=31536000; Path=/`,
		]) // TODO: Domain
		res.end()
	} catch (error) {
		// TODO: Check if 'The instance was not found or provided password was incorrect.'
		console.error(error) // TODO: Install error handling tool like Sentry
		res.statusCode = 500
		res.end()
	}
}
