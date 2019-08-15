import *as React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import IndexView from './modules/user/IndexView';
import RegisterView from './modules/user/RegisterView';
import LoginView from './modules/user/LoginView';
import MeView from './modules/user/MeView';
import SubcribeUser from './modules/account/SubcribeUser';
import IndexView from './modules/user/IndexView';

export default class Routes extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <>
                    <div className="container"> */}
                        <Route exact={true}  path="/" component={IndexView} />
                        <Route path="/login" component={LoginView} />
                        <Route path="/register" component={RegisterView} />
                        <Route path="/me" component={MeView} />
                        <Route path="/subscription" component={SubcribeUser} />
                    {/* </div> */}
                    {/* </> */}
                </Switch>
            </BrowserRouter>
        )
    }
}
