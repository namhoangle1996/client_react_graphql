import * as React from 'react';
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';
import {RouteComponentProps, Redirect} from "react-router-dom";
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
        password: "",
        formErrors: {email: '', password: ''},
        emailValid: false ,
        passwordValid: false ,
        formValid: false,
        redirect : false
    };
    handleChange = (e: any) => {
      const {name, value}= e.target;
    //   console.log(name);
      this.setState({[name]:value},
        () => { this.validateField(name, value) })
    };
    validateField(fieldName: any, value: any) {
        const formErrors = this.state.formErrors;
        let getEmailInput = this.state.emailValid;
        let getPassInput = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            getEmailInput = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            // console.log(getEmailInput);
            formErrors.email = getEmailInput ? '' : ' is invalid';
            break;
          case 'password':
            getPassInput = value.length >= 6;
            formErrors.password = getPassInput ? '': ' is too short';
            break;
          default:
            break;
        }
        console.log(formErrors);
        this.setState({
                        emailValid: getEmailInput,
                        passwordValid: getPassInput
                      }, this.validateForm);
    }     
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    componentDidUpdate(_ : any,prevState: any) {
        console.log(prevState.redirect);

        if (this.state.redirect !== prevState.redirect) {
        //   this.props.history.push('/me');
            // this.context.router.history.push(`/me`) ;
            console.log("success login");
            
        }
    }

    render() {
        const {password,email} = this.state;
        if (this.state.redirect) {
            return <Redirect to='/me' />;
        }
        return (
            <>
            <Mutation<LoginMutaion,LoginMutaionVariables>mutation ={loginMutation}>
                {mutate =>(
                <div className="box" style={{display: "flex", flexDirection:"column",justifyContent:"center"}}>
                    <img src="../src/ui/images/login.jpg" alt=""/>
                    <div className="color-gray">
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.handleChange} />
                    </div>
                    <div className="color-gray">
                        <label>
                        Password
                        </label> 
                        <input type="text" name="password" value={password} onChange={this.handleChange} />
                    </div>
                        <RedButton onClick={ async()=>{
                            console.log(this.state);
                            await this.handleChange;
                            const response: any = await mutate({
                                variables: this.state
                            });
                            // console.log("response::::",typeof(response));
                            console.log("response data from login ::::",response.data.login);
                            if (!password || !email) {
                                alert("Vui lòng nhập đủ thông tin các trường và đăng nhập lại");
                            }
                            else if (response.data.login == null) {
                                alert("Sai tài khoản hoặc mật khẩu ! Vui lòng thử  lại");
                            }
                            else {
                                this.setState({redirect: true});
                                // this.props.history.push('/me');
                            }
                        }}>
                        Login
                        </RedButton>
                </div>
                )}
            </Mutation>
            </>
        )
    }
}
