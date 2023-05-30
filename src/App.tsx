import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import { HomePage, ProductPage, AboutPage, ContactPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        theme="colored"
        toastStyle={{ backgroundColor: "#f7d06e" }}
      />
    </>
  );
}

export default App;
