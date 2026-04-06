import { Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './guards/ProtectedRoute';
import { MainLayout } from './layouts/MainLayout';
import { ProductsPage } from './modules/products/pages/ProductsPage';
import { HomePage } from './pages/HomePage';
import { LearningPage } from './pages/LearningPage';
import { LoginPage } from './pages/LoginPage';
import { PlaygroundPage } from './pages/PlaygroundPage';
import { ProjectStepsPage } from './pages/ProjectStepsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="learning" element={<LearningPage />} />
        <Route path="build-steps" element={<ProjectStepsPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
