import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AppoinmentModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, email, _id, phone, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formateDate = format(date, 'pp');
    const handleFormSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formateDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName
            // phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appoinment is set,${formateDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null)
            })

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
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" disabled name="Name" value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Price' disabled value={price} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Phone' placeholder='phone Number' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" class="btn btn-secondary w-full max-w-xs" />

                    </form>
                    <div class="modal-action">

                        <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentModal;