import React from 'react';
import Layout from '@/Shared/Layout';

const Testing = () => {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Testing</h1>
    </div>
  );
};

Testing.layout = page => <Layout title="Reports" children={page} />;

export default Testing;
