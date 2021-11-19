import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'src/components';

const ListarHorario = () => (
  <Layout title='Semestres'>
  <div className="w-2/3 mx-auto">
    <div className="bg-white shadow-md rounded my-6">
      <table className="text-left w-full border-collapse">
        <thead>
          <tr>
            <th
              className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Semestres</th>
            <th
              className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
              Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">2021/1</td>
            <td className="py-4 px-6 border-b border-grey-light">
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Editar</a>
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Remover</a>
              <Link to="/semestre/disciplina/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Períodos</Link>
              <Link to="/semestre/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Horários</Link>
            </td>
          </tr>
          <tr className="hover:bg-grey-lighter">
              <td className="py-4 px-6 border-b border-grey-light">2021/2</td>
              <td className="py-4 px-6 border-b border-grey-light">
                <a href="#"
                  className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Editar</a>
                <a href="#"
                  className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Remover</a>
                <Link to="/semestre/disciplina/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Períodos</Link>
                <Link to="/semestre/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Horários</Link>
              </td>
            </tr>
          <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">2022/1</td>
            <td className="py-4 px-6 border-b border-grey-light">
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Editar</a>
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Remover</a>
              <Link to="/semestre/disciplina/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Períodos</Link>
              <Link to="/semestre/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Horários</Link>
            </td>
          </tr>
          <tr className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">2022/2</td>
            <td className="py-4 px-6 border-b border-grey-light">
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Editar</a>
              <a href="#"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Remover</a>
              <Link to="/semestre/disciplina/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Períodos</Link>
              <Link to="/semestre/id"
                className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">Horários</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </Layout>
);

export default ListarHorario;