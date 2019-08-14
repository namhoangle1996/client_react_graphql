import * as React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';
import {MeQuery} from '../../schemaTypes';
import {MeQuery1} from '../../schemaTypes';
import { Link } from 'react-router-dom';
import {RedButton} from "../../ui/RedButton";


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
        }
    }
`;


export default class MeView extends React.PureComponent {
    componentDidUpdate() {
        console.log("changed");
        window.location.reload();
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
                    return <div>data is undefined</div>
                }
                if (!data.me) {
                    return (
                        <>
                            <p>Phiên đăng nhập đã hết hạn. Xin vui lòng đăng nhập lại ! </p>
                            <Link to="/login"><RedButton>Login now</RedButton></Link> 
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
                    return <div>data is undefined</div>
                }
                if (!data.get_all_user) {
                    return null ;
                }
                return (<><h4>Danh sách tài khoản</h4>
                    {data.get_all_user.map((val: any,index: any) => <p key={val.id}>{val.email}</p> )} </>)
            }}
            </Query>
 
            </>    
        )
    }
}
