import React from 'react';
import bgImg from '../../assets/images/appointment.png';

const Form = () => {
    return (
        <section style={{
            background: `url(${bgImg})`
        }} className='text-center '>
            <div>
                <h4 className=' text-xl text-primary font-bold py-4'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='my-4'>
                <input type="text" placeholder="Email" class="input p-4 my-3 input-bordered input-xs w-full max-w-xs" />
                <br />
                <input type="text" placeholder="Password" class="input p-4 my-3  input-bordered input-sm w-full max-w-xs" />
                <br />
                <textarea class="textarea textarea-error" className='input input-bordered input-sm w-full h-20 max-w-xs' placeholder="Message"></textarea>
                <br />
                <button class="btn btn-primary my-6">SUBMIT</button>
            </div>
        </section>
    );
};

export default Form;