import React from 'react';
import { CardDiv, CardCover, CardTitle, Cardlink, } from '../Styles/Atoms-styles/Thumb.style';


const Thumb = ({ cover, title, id }) => {
    return (

        <CardDiv className={`card--${id}`}>
            <Cardlink to={`/logement/${id}`}>
                <CardCover src={cover} />
                <CardTitle>{title}</CardTitle>
            </Cardlink>
        </CardDiv>

    )
};


export default Thumb;