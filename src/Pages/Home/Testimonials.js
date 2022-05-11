import React from 'react';
import img from '../../assets/icons/quote.svg';
import profile1 from '../../assets/images/people1.png';
import profile2 from '../../assets/images/people2.png';
import profile3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            "_id": 1,
            "name": "Winson Herry",
            "reviewText": "",
            "address": "USA latinhum",
            "img": profile1
        },
        {
            "_id": 2,
            "name": "Jebnye Herry",
            "reviewText": "",
            "address": "Calefornia",
            "img": profile2
        },
        {
            "_id": 3,
            "name": "bright Herry",
            "reviewText": "",
            "address": "London",
            "img": profile3
        }
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div className=''>
                    <h4 className="text-primary font-bold mt-4 text-xl">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img src={img} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 pb-12 mb-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;