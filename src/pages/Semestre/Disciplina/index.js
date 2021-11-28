import React from 'react';
import { Layout } from 'src/components';
import Modal from './Modal';
import CTable from './Table';

function Disciplina() {
  const [isOpen, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <Layout title='Períodos'>
      <CTable onOpen={openModal} />
      {isOpen && <Modal onClose={() => setOpen(false)} />}
    </Layout>
  );
}

export default Disciplina;
