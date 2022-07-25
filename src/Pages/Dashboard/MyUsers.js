import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Share/Loading';
import UserRow from './UserRow';

const MyUsers = () => {
    const [users, setUsers, isLoading, refetch] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-dusk-01494.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>
            <h2>My Users{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyUsers;