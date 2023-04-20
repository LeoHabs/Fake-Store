import { fetchProducts, fetchCategories } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
    dispatch(fetchCategories);
  }, []);

  return <>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<Home />}></Route>
        <Route path="category/:category" element={<CategoryPage />}></Route>
      </Route>
    </Routes>
    <Footer />
  </>
}

export default App;
