import { fetchProducts, fetchCategories } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
    dispatch(fetchCategories);
  }, []);

  return <>
    <Header />
    <Home />
  </>
}

export default App;
