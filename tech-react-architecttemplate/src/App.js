import { Routes, Route } from "react-router-dom";
import ProductList from "./reduxSample/components/ProductList";
import CartPage from "./reduxSample/components/CardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/urunler/:id" element={<CartPage />}></Route>
      </Routes>
      {/*<SuppliersTable />
       <Navbar />
      <Header />
      <Content />
      <Footer /> */}
    </>
  );
}

export default App;
