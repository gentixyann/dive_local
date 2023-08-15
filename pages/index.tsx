import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </section>
    </>
  );
}
