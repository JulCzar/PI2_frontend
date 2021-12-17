import React from 'react';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      style={{
        background: '#0003',
        position: 'fixed',
        zIndex: 1000,
        height: '100vh',
        width: '100vw',
        left: 0,
        top: 0,
      }}>
      <div
        className='flex items-center justify-center '
        style={{ height: '100%' }}>
        <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin' />
      </div>
    </div>
  );
};

export default Loading;
