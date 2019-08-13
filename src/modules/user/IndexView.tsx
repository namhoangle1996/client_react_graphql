import * as React from 'react';
// import {Query} from 'react-apollo';
// import {gql} from 'apollo-boost';
// import {MeQuery} from '../../schemaTypes';
import { Link } from 'react-router-dom';
// import {RedButton} from "../../ui/RedButton";



export default class IndexView extends React.PureComponent {
    render() {
        return (
            <>
                <div className="container">
                    <section className="navbar">
                          <Link to="/login">
                                <div>Login</div>
                           </Link>
                           <Link to="/register">
                                <div>Sign up</div>
                           </Link>
                           <Link to="/me">
                                <div>Me</div>
                           </Link>
                    </section>
                </div>
            
            </>
        )   

    }
}
