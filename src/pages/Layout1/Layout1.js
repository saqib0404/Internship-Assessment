import React from 'react';
import "./Layout1.css";

const Layout1 = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const dateOfBirth = form.dateOfBirth.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const userInfo = {
            name,
            dateOfBirth,
            email,
            phone
        }
        console.log(userInfo);
    }

    return (
        <form onSubmit={handleSubmit} className='mt-10 mx-2 w-11/12 md:w-6/12 lg:w-4/12'>
            {/* Full name */}
            <div className='flex justify-between my-2'>
                <label className='font-semibold text-lg'>Full Name:</label>
                <input name='name' type="text" className='input-field w-60 px-1' placeholder='You Name' required />
            </div>
            {/* DOB */}
            <div className='flex justify-between my-2'>
                <label className='font-semibold text-lg'>Date of Birth:</label>
                <input name='dateOfBirth' type="date" className='input-field w-60 px-1' required />
            </div>
            {/* Email */}
            <div className='flex justify-between my-2'>
                <label className='font-semibold text-lg'>Email:</label>
                <input name='email' type="email" className='input-field w-60 px-1' placeholder='You Email' required />
            </div>
            {/* Phone number */}
            <div className='flex justify-between my-2'>
                <label className='font-semibold text-lg'>Phone Number:</label>
                <input name='phone' type="number" className='input-field w-60 px-1' placeholder='You Number' required />
            </div>

            <div className='flex justify-end'>
                <button className='bg-blue-500 font-semibold px-5 py-1 rounded-sm' type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default Layout1;