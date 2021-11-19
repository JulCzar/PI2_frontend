import React from 'react';
import {Layout} from 'src/components';
import Modal from './Modal';

function Periodo() {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <Layout title='Períodos'>
      <div className="w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Períodos</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                  Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">1° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">2° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">3° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">4° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">5° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">6° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">7° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onclick="openModal()" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">8° Período</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <button className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Zerar Disciplinas</button>
                  <button onClick={()=> setOpen(true)} className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Ofertar Disciplinas</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {
      isOpen && <Modal onClose={()=>setOpen(false)}/>
    } </Layout>
  )
}

export default Periodo;
