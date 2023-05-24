import { Footer, Navbar } from "./components";
import { HomePage, ProductPage,AboutPage,ContactPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <HomePage/>
      {/* <AboutPage /> */}
      <Footer />
    </>
  );
}

export default App;
