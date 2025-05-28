// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/profile'); // Redirect to profile page
  }, [router]);

  return null;
}


const linkStyle = {
  display: 'block',
  marginBottom: '30px',
  padding: '15px',
  backgroundColor: '#f0f4f8',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#333',
  cursor: 'pointer',
  maxWidth: '400px',
  transition: 'background-color 0.3s ease',
};
