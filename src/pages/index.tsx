import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '../components/HomepageHeader/HomepageHeader';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Palisadoes Developers`}
      description="Palisadoes Foundation Developer Docs <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
