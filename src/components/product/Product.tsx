import { FC } from "react";
import { useParams } from "react-router-dom";
// import cn from 'classnames'
// import styles from './Product.module.css'

const Product: FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Product;
