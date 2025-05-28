import '../styles/globals.css';
import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Mustaqeem's Dashboard</title>
      </Head>
      <NavBar />
      <main className="p-6 max-w-5xl mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

