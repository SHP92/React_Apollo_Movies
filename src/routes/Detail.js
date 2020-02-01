import React from 'react';
import {useParams, Link} from 'react-router-dom';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

export default function Detail() {
    const { id } = useParams();

    // query에 args가 있으면 query Name($args: Type){} 이렇게 써야함
    const DETAIL_MOVIE = gql`
        query detailMovie($id: Int!) {
            movie(id: $id) {
                id
                title
                rating
                medium_cover_image
                description_intro
            }
            , suggestions(id: $id) {
                id
                medium_cover_image
            }
        }
    `;

    const { loading, error, data } = useQuery(
        DETAIL_MOVIE
        , { variables: {id}}
    );
    if (loading) return <p> Loading... </p>;
    if (error) return <p> No description </p>;

    // useQuery에서 id를 미리 받아오기 때문에 뒤에는 일반 query처럼 사용
    return (
        <div>
            <h1> {data.movie.title} </h1>
            <img src={data.movie.medium_cover_image} alt={data.movie.id}/>
            <div> ⭐️ {data.movie.rating} </div>
            <div> {data.movie.description_intro} </div>
            <div>
                <h1> other movies </h1>
                <div> 
                    {data.suggestions.map(({
                        id
                        , medium_cover_image
                    }) => (
                    <Link to ={`/${id}`}>
                        <img src={medium_cover_image} alt={id}/>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 