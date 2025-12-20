import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load page components for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const TextilePage = lazy(() => import("./pages/TextilePage"));
const SpasticityPage = lazy(() => import("./pages/SpasticityPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary-dark">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [, setShowAdminPanel] = useState(false);

  return (
    <>
      {/* <Navbar
        isAdminLoggedIn={isAdminLoggedIn}
        setIsAdminLoggedIn={setIsAdminLoggedIn}
        setShowAdminPanel={setShowAdminPanel}
      /> */}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/textile" element={<TextilePage />} />
          <Route path="/spasticity" element={<SpasticityPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
