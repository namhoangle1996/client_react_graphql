import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
// import App from './App';
import "./App.css";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import { createGlobalStyle } from 'styled-components'



const client = new ApolloClient({
   uri: "http://localhost:4000/graphql",
   credentials: "include"
});

const GlobalStyle = createGlobalStyle`
  body {
   font-family: 'Varela', sans-serif;
  }
`

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyle/>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
