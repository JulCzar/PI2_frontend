import React from 'react';

function Header({ data }) {
  const headerID = React.useMemo(() => Math.round(Math.random() * 100_000), []);

  return (
    <thead>
      <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600'>
        {data.map(({ label }, i) => (
          <th
            className='px-4 py-3'
            key={`header-${headerID}-item-${i}-label-${label}`}>
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default Header;
