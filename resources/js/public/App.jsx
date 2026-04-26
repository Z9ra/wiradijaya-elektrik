import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function PublicApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route lain ditambah di sini nanti */}
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('app');
if (container) createRoot(container).render(<PublicApp />);