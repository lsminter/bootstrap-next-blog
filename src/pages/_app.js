import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import { Analytics } from '@vercel/analytics/react';

import { useEffect } from 'react';

import Footer from '../../components/layout/footer';
import NavBar from '../../components/layout/navbar';

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return <div>
    <NavBar />
    <Component {...pageProps} />
    <Analytics />
    <Footer />
  </div>
}
