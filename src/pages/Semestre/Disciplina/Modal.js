import React from 'react';

function Modal({onClose}) {
  return (
    <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
      <div className="border border-teal-500 shadow-lg modal-container bg-white rounded shadow-lg overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="modal-close cursor-pointer z-50" onClick={onClose}></div>
          <div>
            <div className="bg-white p-4 px-4 md:p-8 mb-6">
              <h2 className="font-semibold text-4xl text-gray-600">Ofertar Disciplinas</h2>
              <div className="mt-6 grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-7">

                    <div className="md:col-span-2">
                      <label htmlFor="email">Disciplina</label>
                      <select type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value=""></option>
                      </select>
                    </div>

                    <div className="md:col-span-1,5">
                      <label htmlFor="email">Professor(a)</label>
                      <select type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value="1"></option>
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="address">Sala</label>
                      <select type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value="1"></option>
                      </select>
                    </div>

                    <div className="md:col-span-1,5">
                      <label htmlFor="address">Dia</label>
                      <select type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value="1">Segunda-Feira</option>
                        <option value="1">Terça-Feira</option>
                        <option value="1">Quarta-Feira</option>
                        <option value="1">Quinta-Feira</option>
                        <option value="1">Sexta-Feira</option>
                        <option value="1">Sábado</option>
                      </select>
                    </div>

                    <div className="md:col-span-1,5">
                      <label htmlFor="address">Turno</label>
                      <select type="text" name="turno" id="turno" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value="1">Matutino</option>
                        <option value="2">Vespertino</option>
                        <option value="3">Noturno</option>
                      </select>
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="address">Aula</label>
                      <select type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="">
                        <option value="1"></option>
                      </select>
                    </div>

                    <div className="mt-5 md:col-span-6 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Adicionar
                                                                                                                                                    Disciplina</button>
                      </div>
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Adicionar
                                                                                                                                                    Semana</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
