import React from 'react';
import { Layout } from 'src/components';
import Modal from './Modal';
import CTable from './Table';

function Disciplina() {
  const [isOpen, setOpen] = React.useState(null);

  const onOpen = number => () => setOpen(number);
  const onClose = () => setOpen(null);

  return (
    <Layout title='Períodos'>
      <CTable onOpen={onOpen} />
      <Modal onClose={onClose} isOpen={isOpen} />
    </Layout>
  );
}

export default Disciplina;
