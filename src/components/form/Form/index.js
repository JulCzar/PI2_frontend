import React from 'react';

/** @type {React.FC<import('react').FormHTMLAttributes>} */
function Form({ children, ...rest }) {
  return (
    <div>
      <div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
        <div className='mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2'>
          <div className='lg:col-span-2'>
            <form
              {...rest}
              className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6'>
              {children}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
