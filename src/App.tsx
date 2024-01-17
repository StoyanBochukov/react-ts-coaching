// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/UI/Modal.tsx';
import Button from './components/UI/Button.tsx';
import Header from './components/Navigation/Header.tsx';

import HomePage from './pages/Home.tsx';
import SessionsPage from './pages/Sessions.tsx';
import SessionPage from './pages/Session.tsx';
import Root from './pages/Root.tsx';
import Input from './components/UI/Input.tsx';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       { path: 'sessions', element: <SessionsPage /> },
//       { path: 'sessions/:id', element: <SessionPage /> },
//     ],
//   },
// ]);

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState<string>('')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleInput = (value: string) => {
    setInput(value);
    console.log(value);
    
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='sessions' element={<SessionsPage />}/>
          <Route path='sessions/:id' element={<SessionPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
