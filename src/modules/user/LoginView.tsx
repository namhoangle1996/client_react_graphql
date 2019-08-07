import * as React from 'react';
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';
import {RouteComponentProps} from "react-router-dom";
import {LoginMutaionVariables,LoginMutaion} from  "../../schemaTypes";
import {RedButton} from "../../ui/RedButton";
// import { any } from 'prop-types';

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
                    {/* <div> */}
                        <RedButton onClick={ async()=>{
                            console.log(this.state);
                            // console.log(password);
                            // console.log(email);
                            const response: any = await mutate({
                                variables: this.state
                            });
                            // console.log("response::::",typeof(response));
                            console.log(response.data.login);
                            if (!password || !password) {
                                alert("Vui lòng nhập đủ thông tin các trường và đăng nhập lại");
                            }
                            else if (response.data.login == null) {
                                alert("Sai tài khoản hoặc mật khẩu ! Vui lòng thử  lại");
                            }
                            else {
                                // alert("Đăng nhập thành công");
                                this.props.history.push("/me");
                            }
                        }}>
                        Login
                        </RedButton>
                    {/* </div> */}
                </div>
                )}
            </Mutation>
        )
    }
}
