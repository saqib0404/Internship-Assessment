import React from 'react';

const Layout3 = () => {
    return (
        <section className='my-4 mx-2'>
            {/* Card-1 */}
            <div className='bg-[#da1d5d] text-white text-2xl font-semibold text-center rounded-md py-8 mb-6'>Card 1</div>
            <div className='mb-6 grid grid-cols-12 gap-4 h-72'>
                <div className='bg-[#da1d5d] col-span-3 text-white text-2xl font-semibold text-center rounded-md  flex justify-center items-center'>Card 2</div>
                <div className='bg-[#da1d5d] col-span-6 text-white text-2xl font-semibold text-center rounded-md  flex justify-center items-center'>Card 3</div>
                <div className='bg-[#da1d5d] col-span-3 text-white text-2xl font-semibold text-center rounded-md  flex justify-center items-center'>Card 4</div>
            </div>
            <div className='bg-[#da1d5d] text-white text-2xl font-semibold text-center rounded-md py-8'>Card 5</div>
        </section>
    );
};

export default Layout3;