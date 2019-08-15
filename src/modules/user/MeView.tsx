import * as React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import {MeQuery} from '../../schemaTypes';
import {MeQuery1} from '../../schemaTypes';
import { Link } from 'react-router-dom';
import {RedButton} from "../../ui/RedButton";
import { FaUserEdit ,FaTrash } from 'react-icons/fa';



const meQuery = gql`
    query MeQuery {
        me {
            id
            email
        }
    }
`;
const meQuery1 = gql`
    query MeQuery1 {
        get_all_user {
            id
            email
            stripeId
            password
        }
    }
`;


export default class MeView extends React.PureComponent {
    state = {
        data : false ,
    }

    render() {
        return (
            <>
            <Query<MeQuery> query={meQuery}>{ ({data,loading})=> {
                console.log(data);
                if (loading){
                    return null
                }
                if (!data) {
                    return (
                        <>
                        <div>Vui lòng đăng nhập !</div>
                        <Link to="/login">
                            <RedButton>
                                Login
                            </RedButton>
                        </Link>
                        </>
                        )
                }
                if (!data.me) {
                    return (
                        <>
                            {/* <p>Phiên đăng nhập đã hết hạn. Xin vui lòng đăng nhập lại ! </p>
                            <Link to="/login"><RedButton>Login now</RedButton></Link>  */}
                        </>
                    )
                }
                return <h3>Xin chào {data.me.email} !!!</h3>
            }}
            </Query>
            <Query<MeQuery1> query={meQuery1}>{({data ,loading }: any)=> {
                console.log(data);
                if (loading){
                    return null
                }
                if (!data) {
                    return (
                        <>
                        </>
                    )
                }
                if (!data.get_all_user) {
                    return null ;
                }
                return (<>
                <div className="container">
                    <h4>Danh sách tài khoản</h4>
                        {data.get_all_user.map((val: any,index: any) => 
                            (<div key={val.id} className="grid-2">
                                <div>
                                    <p>User: {val.email}
                                    </p>
                                    <p>
                                        Password:  {val.password}
                                    </p>
                                </div>

                                <div>
                                    <FaUserEdit size={32} style={{color: '#1fa2ff'}} />  
                                    <FaTrash size={32} style={{color: '#ff1f1f'}} />      
                                </div>
                                {/* <FaUserEdit size={32} style={{color: '#75f07a'}} /> */}

                            </div>) 
                    )}
                </div> 
                </>)
            }}
            </Query>
 
            </>    
        )
    }
}
