import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1 className="text-slate-500 hover:text-blue-600">
        Read <Link href="/about">this page!</Link>
        </h1>
      </main>
       
    </div>
  );
}
