import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('../components/Header/Header'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const Footer = lazy(() => import('../components/Footer/Footer'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="catalog" element={<CatalogPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};
