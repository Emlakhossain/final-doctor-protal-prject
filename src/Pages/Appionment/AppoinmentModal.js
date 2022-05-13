import { format } from 'date-fns';
import React from 'react';

const AppoinmentModal = ({ tretment, date, setTretment }) => {
    const { name, slots, email, _id, phone } = tretment;

    const handleFormSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name, email, _id, phone)
        setTretment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h4 class="font-bold text-xl text-secondary">Booking For: {name}!</h4>
                    <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input disabled type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name="Name" placeholder='Name' class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Email' placeholder="email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />

                    </form>
                    <div class="modal-action">

                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;