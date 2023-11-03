import { Route, Routes } from "react-router-dom";
import "./App.css";
import RandomActivity from "./components/randomActivity/RandomActivity";
import Counter from "./components/counter/Counter";
import CityPage from "./components/cityPage/CityPage";
import Sandwich from "./components/sandwich/Sandwich";
import BtnTest from "./components/btnTest/BtnTest";
import Layout from "./layouts/Layout";
import Error from "./components/error/Error";
import ProductPage from "./components/productPage/types/ProductPage";
import Product from "./components/product/Product";

const App = (): JSX.Element => (
  <Routes>
    
      <Route path="/dynamic_router" element={<Layout />} >
      <Route index element={<RandomActivity />} />
      <Route path="counter" element={<Counter />} />
      <Route path="cityPage" element={<CityPage />} />
      <Route path="sandwich" element={<Sandwich />} />
      <Route path="btnTest" element={<BtnTest />}/>
      <Route path="productPage" element={<ProductPage />}/>
      <Route path="example/:id" element={<Product />}/>
      <Route path="*" element={<Error />} />
    </Route>
   
  </Routes>
);

export default App;
