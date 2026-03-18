import { Blog, Navibar, Footer } from "../components";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navibar />
      <Blog />
      <Footer />
    </div>
  );
};

export default ProductPage;
