import React from 'react';

export const useDisclosure = (initialValue = false) => {
  const [isOpen, setOpen] = React.useState(initialValue);

  const onOpen = React.useCallback(() => {
    setOpen(true);
  }, [isOpen]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  const toggle = React.useCallback(() => {
    setOpen(oldState => !oldState);
  }, [isOpen]);

  return {
    isOpen,
    onOpen,
    toggle,
    onClose,
  };
};
