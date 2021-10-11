import styles from "./ProductCard.module.scss";

const ProductCard = ({ children, className, ...rest }) => {
  let productCardClassName = styles.productCard;

  if (className) {
    productCardClassName = `${productCardClassName} ${className}`;
  }
  return (
    <li className={productCardClassName} {...rest}>
      {children}
    </li>
  );
};

export default ProductCard;
