import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';

const FirstPost: FC = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Link href="/">← Back to home</Link>
    </Layout>
  );
};
export default FirstPost;
