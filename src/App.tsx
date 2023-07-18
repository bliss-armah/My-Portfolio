import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components";
import { HomePage, ProductPage, AboutPage, ContactPage, LoginPage, AdminPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedAdmin, ProtectedRoute } from "./utils/protected";

// Custom component to conditionally render the Footer
function FooterRenderer() {
  const location = useLocation();

  // Array of paths where the footer should not be displayed
  const footerExcludedPaths = ["/adminlogin", "/admin","/projects","/contact"];

  // Check if the current path is included in the array of excluded paths
  const shouldDisplayFooter = !footerExcludedPaths.includes(location.pathname);

  return shouldDisplayFooter ? <Footer /> : null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
      <ToastContainer theme="colored" toastStyle={{ backgroundColor: "#f7d06e" }} />
    </BrowserRouter>
  );
}

export default App;
