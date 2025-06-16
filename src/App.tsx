import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Providers from "./providers/Providers";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "./components/ui/sonner";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Students from "./pages/Students";
import MainLayout from "./components/layouts/MainLayout";
function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route
            element={
              <MainLayout>
                <ProtectedRoute />
              </MainLayout>
            }
          >
            <Route path="/" element={<Navigate to={"/students"} />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<div>Teachers Page</div>} />
            <Route path="/classrooms" element={<div>Classrooms Page</div>} />
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
