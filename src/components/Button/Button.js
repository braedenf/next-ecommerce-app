import styles from "./Button.module.scss";

const Container = ({ children, className, ...rest }) => {
  let buttonClassName = styles.button;

  if (className) {
    buttonClassName = `${buttonClassName} ${className}`;
  }
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Container;
