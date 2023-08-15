import Link from 'next/link';

export default function Home() {
	return (
		<>
			<section>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
				</h1>
				<p>Get started by editing <code>pages/index.js</code></p>
			</section>
		</>
	);
}

