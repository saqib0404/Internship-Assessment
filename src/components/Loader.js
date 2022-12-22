import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-[100%]">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-r-0 border-b-0 border-black border-4 rounded-full" role="status">
            </div>
        </div>

    );
};

export default Loader;