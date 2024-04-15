import { generateClient } from "aws-amplify/api";
import { createPassenger } from './graphql/mutations';

const client = generateClient()

const newPassenger = await client.graphql({
    query: createPassenger,
    variables: {
        input: {
		"firstName": "Lorem ipsum dolor sit amet",
		"lastName": "Lorem ipsum dolor sit amet",
		"phoneNumber": "(555) 123-6789",
		"emailAddress": "test12346789@testemailtestemail.com",
		"paymentMethod": /* Provide a PaymentMethod instance here */,
		"dateRegistered": "1970-01-01Z",
		"activeStatus": PassengerStatus.UNVERIFIED,
		"tripID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
	}
    }
});

export default newPassenger;