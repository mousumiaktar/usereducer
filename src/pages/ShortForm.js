import React from 'react';

const ShortForm = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center space-y-6'>
          <form className='space-y-6 shadow-md p-10' >
            <div className='flex flex-col max-w-xs'>
              <label htmlFor='name'>First Name:</label>
              <input className='border border-slate-800 rounded outline-none'
                type='text'
                name='name'
                id='name'
                
              />
            </div>
            <div className='flex flex-col max-w-xs'>
              <label htmlFor='name'>Last Name</label>
              <input className='border border-slate-800 rounded outline-none'
                type='text'
                name='name'
                id='name'
                
              />
            </div>
            <div className='flex flex-col max-w-xs'>
              <label htmlFor='name'>Email</label>
              <input className='border border-slate-800 rounded outline-none'
                type='text'
                name='name'
                id='name'
                
              />
            </div>
            <div className='flex flex-col max-w-xs'>
              <label htmlFor='name'>Password</label>
              <input className='border border-slate-800 rounded outline-none'
                type='password'
                name='name'
                id='name'
                
              />
            </div>
            <button
              className='px-4 py-3 bg-indigo-500 text-white rounded-md'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      );
};

export default ShortForm;