import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Providers from "./providers/Providers";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/layouts/MainLayout";
import { Toaster } from "./components/ui/sonner";

// Lazy-loaded pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const Students = lazy(() => import("./pages/Students"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const ClassroomsPage = lazy(() => import("./pages/ClassroomsPage"));

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Suspense
                fallback={<div className="p-4 text-center">Loading...</div>}
              >
                <PublicRoute />
              </Suspense>
            }
          >
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route
            element={
              <MainLayout>
                <ProtectedRoute />
              </MainLayout>
            }
          >
            <Route path="/" element={<Navigate to="/students" />} />

            <Route
              element={
                <Suspense
                  fallback={<div className="p-4 text-center">Loading...</div>}
                >
                  {/* All protected lazy-loaded pages go here */}
                  <Routes>
                    <Route path="/students" element={<Students />} />
                    <Route path="/teachers" element={<TeachersPage />} />
                    <Route path="/classrooms" element={<ClassroomsPage />} />
                  </Routes>
                </Suspense>
              }
            />

            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "mx-auto max-w-[90%] sm:max-w-md",
        }}
        richColors
      />
    </Providers>
  );
}

export default App;
