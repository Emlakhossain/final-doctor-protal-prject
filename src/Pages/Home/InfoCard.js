import React from 'react';

const InfoCard = ({ img, cardTitle, text, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-primary shadow-xl ${bgClass}`}>
            <figure className='p-3'>
                <img src={img} alt="Album" />

            </figure>
            <div class="card-body pl-6">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{text}</p>

            </div>
        </div>
    );
};

export default InfoCard;