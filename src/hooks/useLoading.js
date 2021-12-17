import React from 'react';

export const useLoading = (initialLoadingState = true) => {
  const [isLoading, setLoading] = React.useState(initialLoadingState);

  const startLoading = React.useCallback(() => {
    setLoading(true);
  }, [isLoading]);

  const endLoading = React.useCallback(() => {
    setLoading(false);
  }, [isLoading]);

  return {
    isLoading,
    startLoading,
    endLoading,
  };
};
