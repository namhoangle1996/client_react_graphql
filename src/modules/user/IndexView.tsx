import * as React from 'react';
// import {Query} from 'react-apollo';
// import {gql} from 'apollo-boost';
// import {MeQuery} from '../../schemaTypes';
import { Link } from 'react-router-dom';
import logoDICOM from './../../ui/images/logoDICOM.png' ;


export default class IndexView extends React.PureComponent {
    render() {
        return (
            <>
                    <section className="navbar ">
                        <div  className="grid-3">
                            <Link to="/login" className="a-nav">
                                <div>Login</div>
                            </Link>                         

                           <Link to="/register" className="a-nav">
                                <div>Sign up</div>
                           </Link>

                           <Link to="/me" className="a-nav">
                                <div>Me</div>
                           </Link>
                        </div>
                        <div>
                            <img src={logoDICOM} />
                        </div>
                    </section>
            
            </>
        )   

    }
}
