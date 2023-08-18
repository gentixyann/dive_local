import Head from 'next/head';
import Layout from '@/components/layout';
import Map from '@/components/Map';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <>
      <Layout>
        <Map />
      </Layout>
    </>
  );
}
