import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Loader from '../../components/Loader';
import "./Layout1.css";

const Layout1 = () => {
    const [loading, setLoading] = useState(false);

    function playSound() {
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=success-1-6297.mp3%27');
        audio.play();
    }

    const handleSubmit = e => {
        setLoading(true)
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

        fetch('https://internship-assessment-server-one.vercel.app/userInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        })
            .then(response => response.json())
            .then(data => {
                playSound();
                toast.success('Your information has been saved');
                form.reset();
                setLoading(false);
            })
            .catch(error => {
                toast.error('Please try again');
                setLoading(false);
            });
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
            {/* Submit btn */}
            <div className='flex justify-end'>
                {
                    loading ? <Loader />
                        :
                        <button className='bg-blue-500 font-semibold px-5 py-1 rounded-sm' type='submit'>Submit</button>
                }
            </div>
        </form>
    );
};

export default Layout1;