import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components";
import { HomePage, ProductPage, AboutPage, LoginPage, AdminPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedAdmin, ProtectedRoute } from "./utils/protected";

function FooterRenderer() {
  const location = useLocation();
  const footerExcludedPaths = ["/adminlogin", "/admin", "/projects"];
  const shouldDisplayFooter = !footerExcludedPaths.includes(location.pathname);
  return shouldDisplayFooter ? <Footer /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProductPage />} />
          <Route
            path="/adminlogin"
            element={
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminPage />
              </ProtectedAdmin>
            }
          />
        </Routes>
        <FooterRenderer />
      </div>
      <ToastContainer
        theme="dark"
        toastStyle={{
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        }}
      />
    </BrowserRouter>
  );
}

export default App;
