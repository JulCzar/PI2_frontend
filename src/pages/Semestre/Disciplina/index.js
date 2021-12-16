import React from 'react';
import { Layout } from 'src/components';
import { useDisclosure } from 'src/hooks';
import Modal from './Modal';
import CTable from './Table';

function Disciplina() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Layout title='Períodos'>
      <CTable onOpen={onOpen} />
      {isOpen && <Modal onClose={onClose} />}
    </Layout>
  );
}

export default Disciplina;
