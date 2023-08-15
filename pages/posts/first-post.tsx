import Link from 'next/link';
import Image from 'next/image';
import type { FC } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout';

const FirstPost: FC = () => {
  return (
    <Layout>
      <h1>First Post</h1>
      <h2>
        <Head>
          <title>First Post</title>
        </Head>
        <Link href="/">← Back to home</Link>
        <Image
          src="/images/profile.jpg" // イメージファイルのルート
          height={400} // イメージサイズの設定
          width={400} // アスペクト比を正しく
          alt="Your Name"
        />
      </h2>
    </Layout>
  );
};
export default FirstPost;
