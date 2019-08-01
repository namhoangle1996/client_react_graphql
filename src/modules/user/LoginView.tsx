import * as React from 'react';
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';
import {RouteComponentProps} from "react-router-dom";
import {LoginMutaionVariables,LoginMutaion} from  "../../schemaTypes";
import {RedButton} from "../../ui/RedButton";

const loginMutation = gql`
    mutation LoginMutaion($email:String!,$password:String!){
        login(email:$email,password:$password){
            id
            email
        }
    }
`;

// import React, { PureComponent } from 'react'

export default class LoginView extends React.PureComponent<RouteComponentProps<{}>> {
    state= {
        email: "",
        password: ""
    };
    handleChange = (e: any) => {
      const {name, value}= e.target;
      console.log(name);
      console.log(value);
      this.setState({[name]:value})
    };
    render() {
        const {password,email} = this.state;
        return (
            <Mutation<LoginMutaion,LoginMutaionVariables>mutation ={loginMutation}>
                {mutate =>(
                <div style={{display: "flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div>Email:<input type="text" name="email" value={email} onChange={this.handleChange} /></div>
                    <div>Password:<input type="text" name="password" value={password} onChange={this.handleChange} /></div>
                    <div>
                        <RedButton onClick={ async()=>{
                            console.log(this.state);
                            await mutate({
                                variables: this.state
                            });
                            // console.log("response::::",response);
                            // console.log(this.props)
                            this.props.history.push("/subscription");
                        }}>
                        Login
                        </RedButton>
                    </div>
                </div>
                )}
            </Mutation>
        )
    }
}
