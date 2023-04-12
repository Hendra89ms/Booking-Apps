import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Coba() {

    return (
        <div>
            <div className="bg-gray-200 flex h-screen items-center justify-center">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin h-7 w-7 mr-3 text-[#003580]" />
                <span className='text-[#003580]'>Loading...</span>
            </div>
        </div>
    );
}
