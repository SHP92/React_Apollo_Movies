import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { gql } from "apollo-boost"; // import graphQL
import { useQuery } from '@apollo/react-hooks'

// have to use back-tick(`) to import grahpQL in .js
// query structure from graphQL server(uri)
const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;

// styles
const Container = styled.div`
    
`;
const Poster = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
`;

export default function Home() {
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) return <p> Loading... </p>;
    if (error) return <p> Oops! </p>;

    return data.movies.map(({id, medium_cover_image}) => (
        <Container>
            <Link to={`/${id}`}>
                <Poster>
                    <img src={medium_cover_image} alt={id} />
                </Poster>
            </Link>
        </Container>
    ));
    }