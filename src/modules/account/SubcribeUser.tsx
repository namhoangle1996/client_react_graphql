import * as React from 'react'
import StripedCheckout from 'react-stripe-checkout' 
import { Mutation } from 'react-apollo';
import {gql} from "apollo-boost";
import {CreateSubscriptionMutation,CreateSubscriptionMutationVariables} from "../../schemaTypes";

const createSubscriptionMutation = gql`
    mutation CreateSubscriptionMutation($source: String!) {
        createSubcription(source: $source){
            id
            email
        }
    }
`;

export default class SubcribeUser extends React.PureComponent {
    render() {
        return (
            <Mutation<CreateSubscriptionMutation,CreateSubscriptionMutationVariables>
                mutation={createSubscriptionMutation}
            >
                {mutate =>(
            <StripedCheckout 
            token={async token =>{
                console.log(token.id);
                const response = await mutate({variables: {source: token.id}});
                console.log("res::",response);
            }} 
            stripeKey={"pk_test_fjpsJGOhaXCbn7XduJVurS6L00V5BP2XDj"}
            />
                                
            )}
            </Mutation>
        )
    }
}
