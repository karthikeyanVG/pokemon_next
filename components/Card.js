import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Card = ({ image, name, onClick, href }) => {
    return (
        <div className="flex justify-center py-5">
            <div className="rounded-lg bg-gradient-to-r from-yellow-800 to-yellow-200 shadow-lg  max-w-sm">
                <a >
                    <Image className="rounded-t-lg"
                        src={image}
                        alt=""
                        height={200}
                        width={200}
                    />
                </a>
                <div className='p-6'>
                    <h5 className="text-white uppercase text-xl font-medium mb-2">{name}</h5>
                    <Link href={href}>
                        <button type="button"
                            onClick={() => onClick()}
                            className=" inline-block px-6 py-2.5 bg-yellow-400 text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;