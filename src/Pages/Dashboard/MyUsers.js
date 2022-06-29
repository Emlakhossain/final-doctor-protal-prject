import React, { useEffect } from 'react';
import { useState } from 'react';

const MyUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>My Users{users.length}</h2>
        </div>
    );
};

export default MyUsers;