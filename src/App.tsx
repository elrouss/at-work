import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Root } from './pages';
import { UserProfile } from './pages/[id]';

export const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Root />} />
        <Route path="/:id" element={<UserProfile />} />
      </Routes>
    </AnimatePresence>
  );
};
