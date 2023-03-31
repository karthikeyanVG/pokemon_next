import React from 'react';

const Search = ({ value, onChange, placeholder, onClick, Title }) => {

    return (
        <div>
            <div className='flex w-56 mt-3 absolute right-5'>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                            </path>
                        </svg>
                    </div>
                    <input type="search"
                        value={value}
                        onChange={onChange}
                        className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border dark:placeholder-gray-400 "
                        placeholder={placeholder}
                    />
                    <button
                        className="text-white absolute right-2.5 bottom-1.5 bg-yellow-400 font-medium rounded-lg text-sm px-2 py-1"
                        onClick={onClick}
                    >
                        {Title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;