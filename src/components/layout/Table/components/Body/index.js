import React from 'react';

const Body = ({ data, renderItem }) => {
  const bodyID = React.useMemo(() => Math.round(Math.random() * 100_000), []);

  return (
    <tbody className='bg-white'>
      {data.map((row, i) => (
        <tr key={`tablebody-${bodyID}-row-${i}-item`} className='text-gray-700'>
          {row.map(({ item }, pos) => {
            const defaultItem = (
              <div className='flex items-center text-sm'>{item}</div>
            );

            return (
              <td
                key={`t-${bodyID}-row-item-${pos}`}
                className='px-4 py-3 border'>
                {!renderItem
                  ? defaultItem
                  : renderItem(item, pos, defaultItem, i)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
