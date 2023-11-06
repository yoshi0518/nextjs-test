'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Reset Error</button>
    </>
  );
};

export default Error;
