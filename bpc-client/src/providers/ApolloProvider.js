import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

export default function Provider({ children }) {
    return (
        <ApolloProvider client={client}>
            { children }    
        </ApolloProvider>
    );
}
