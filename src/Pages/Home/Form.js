import React, { useState } from 'react';
import { toast } from 'react-toastify';
import bgImg from '../../assets/images/appointment.png';

const Form = () => {
    const [user, setUser] = useState('');

    const formOnSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        const message = event.target.message.value;
        console.log(email, pass, message)
        setUser(email, pass, message)
        setUser('')
        event.target.email.value = '';
        event.target.password.value = '';
        event.target.message.value = '';
        toast('Successfully you have done comment, Very soon you get feedback')
    }
    return (
        <section style={{
            background: `url(${bgImg})`
        }} className='text-center mt-24 '>
            <div>
                <h4 className=' text-xl text-primary font-bold py-4'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='my-4'>
                <form onSubmit={formOnSubmit}>
                    <input type="text" placeholder="Email" name='email' class="input p-4 my-3 input-bordered input-xs w-full max-w-xs" required />
                    <br />
                    <input type="password" name='password' placeholder="Password" class="input p-4 my-3  input-bordered input-sm w-full max-w-xs" required />
                    <br />
                    <textarea class="textarea textarea-error" name='message' className='input input-bordered input-sm w-full h-20 max-w-xs' placeholder="Message" required></textarea>
                    <br />
                    <button class="btn btn-primary my-6">SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

export default Form;