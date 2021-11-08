import React from 'react';

const Body = ({ data, renderItem }) => {
  const bodyID = React.useMemo(() => Math.round(Math.random() * 100_000), []);

  return (
    <tbody className='bg-white'>
      {data.map((row, i) => (
        <tr
          key={`tablebody-${bodyID}-row-${i}-item-`}
          className='text-gray-700'>
          {row.map(item => (
            <>
              {!renderItem ? (
                <td className='px-4 py-3 border'>
                  <div className='flex items-center text-sm'>{item}</div>
                </td>
              ) : (
                renderItem(item)
              )}
            </>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
