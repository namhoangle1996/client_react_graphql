import *as React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterView from './modules/user/RegisterView';
import LoginView from './modules/user/LoginView';
import MeView from './modules/user/MeView';
import SubcribeUser from './modules/account/SubcribeUser';

export default class Routes extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={LoginView} />
                    <Route path="/register" component={RegisterView} />
                    <Route path="/me" component={MeView} />
                    <Route path="/subscription" component={SubcribeUser} />

                </Switch>
            </BrowserRouter>
        )
    }
}
