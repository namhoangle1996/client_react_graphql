import * as React from 'react';
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';
import {RouteComponentProps} from "react-router-dom";
import {RegisterMutaion,RegisterMutaionVariables} from  "../../schemaTypes";

const registerMutation = gql`
    mutation RegisterMutaion($email:String!,$password:String!){
        register(email:$email,password:$password)
    }
`;

// import React, { PureComponent } from 'react'

export default class RegisterView extends React.PureComponent<RouteComponentProps<{}>> {
    state= {
        email: "",
        password: ""
    };
    handleChange = (e: any) => {
      const {name, value}= e.target;
      console.log("name",name);
      console.log("value",value);
      this.setState({[name]:value})
    };
    render() {
        const {password,email} = this.state;
        return (
            <Mutation<RegisterMutaion,RegisterMutaionVariables>mutation ={registerMutation}>
                {mutate =>(
                <div style={{display: "flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div>Email:<input type="text" name="email" value={email} onChange={this.handleChange} /></div>
                    <div>Password:<input type="text" name="password" value={password} onChange={this.handleChange} /></div>
                    <div>
                        <button onClick={ async()=>{
                            const response = await mutate({
                                variables: this.state
                            });
                            console.log(response);
                            this.props.history.push("/login");
                        }}>
                        Register
                        </button>
                    </div>
                </div>
                )}
            </Mutation>
        )
    }
}
