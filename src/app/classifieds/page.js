'use client';

import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AddItemModal from '../components/AddItemModal';
import Classifieds from '../components/Classifieds';
import NavBar from '../components/NavArea';
import Signin from '../components/Signin'; // Make sure you have this SignIn component
import { Container, Button } from 'react-bootstrap';
import Sponsors from '../components/Sponsors';
import Link from 'next/link';

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  if (!currentUser) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Signin />
        <p className="mt-4">
          Don't have an account?
          <Link href="/signup">Sign up</Link>
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <div className="d-flex flex-column">
        <Container className="flex flex-column align-items-center">
          <Classifieds />
          <Button
            style={{ backgroundColor: 'blue' }}
            onClick={() => setModalShow(true)}
          >
            Add New Item
          </Button>

          <AddItemModal
            show={modalShow}
            handleClose={() => setModalShow(false)}
          />
        </Container>
        <Sponsors />
      </div>
    </main>
  );
}
