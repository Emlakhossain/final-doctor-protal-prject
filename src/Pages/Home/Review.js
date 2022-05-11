import React from 'react';

const Review = ({ review }) => {
    const { name, img, address } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur pariatur nihil labore aut, illo laudantium!</p>
                <div class="flex items-center py-3">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='px-4'>
                        <h4>{name}</h4>
                        <h5>{address}</h5>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;