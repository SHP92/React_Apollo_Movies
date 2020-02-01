import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ApolloProvider } from '@apollo/react-hooks'; // wrapping React App with Apollo
import client from './routes/apollo.js';

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);