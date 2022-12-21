import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

const Layout2 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userInfo')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="overflow-x-auto mt-5 mx-2 md:mx-10">
            <table className="table w-full border">
                <caption className='text-2xl mb-3'>Table</caption>
                <thead>
                    <tr>
                        <th className='border text-center'>ID</th>
                        <th className='border text-center'>Full Name</th>
                        <th className='border text-center'>DOB</th>
                        <th className='border text-center'>Email</th>
                        <th className='border text-center'>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.length < 1 ? <Loader />
                        :
                        users?.map((user, idx) => <tr key={idx}>
                            <th className='border text-center'>{idx + 1}</th>
                            <td className='border text-center'>{user?.name}</td>
                            <td className='border text-center'>{user?.dateOfBirth}</td>
                            <td className='border text-center'>{user?.email}</td>
                            <td className='border text-center'>{user?.phone}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Layout2;