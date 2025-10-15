import React from 'react';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title={`Palisadoes Developers`}
      description="Palisadoes Foundation Developer Docs <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
