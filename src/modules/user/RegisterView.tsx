import * as React from 'react';
import {Mutation} from 'react-apollo';
import {gql } from 'apollo-boost';
import {RouteComponentProps} from "react-router-dom";
import {RegisterMutaion,RegisterMutaionVariables} from  "../../schemaTypes";
import {RedButton} from "../../ui/RedButton";



const registerMutation = gql`
    mutation RegisterMutaion($email:String!,$password:String!){
        register(email:$email,password:$password)
    }
`;

// import React, { PureComponent } from 'react'

export default class RegisterView extends React.PureComponent<RouteComponentProps<{}>> {
    state= {
        email: "",
        password: "",
        formErrors: {email: '', password: ''},
        emailValid: false ,
        passwordValid: false ,
        formValid: false,
        
    };
    handleChange = (e: any) => {
      const {name, value}= e.target;
      console.log("name",name);
      console.log("value",value);
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
    errorClass(error : any) {
        return(error.length === 0 ? '' : 'has-error');
    }    
        
    render() {
        const {password,email} = this.state;
        return (
            <Mutation<RegisterMutaion,RegisterMutaionVariables>mutation ={registerMutation}>
                {mutate =>(
                <div className="box" style={{display: "flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>Email:
                        <input type="email" name="email" value={email} autoComplete="false" onChange={this.handleChange} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}> Password:
                        <input type="password" name="password" value={password} autoComplete="false" onChange={this.handleChange} />
                    </div>
                    <div>
                        {/* <RedButton  disabled={!this.state.email || !this.state.password } onClick={ async()=>{ */}
                        <RedButton  disabled={!this.state.formValid} onClick={ async()=>{
                            const response = await mutate({
                                variables: this.state
                            });
                            console.log(response);
                            const x = response as any ;
                            console.log(x.data.register);
                            
                            if (x.data.register === null) {
                                alert('Email đã được sử dụng để đăng kí');
                                // this.setState({ email: "" });
                                // this.setState({ password: "" });
                            }
                            else {
                                this.props.history.push("/login");
                            }
                        }}>
                        Register
                        </RedButton>
                    </div>
                </div>
                )}
            </Mutation>
        )
    }
}
