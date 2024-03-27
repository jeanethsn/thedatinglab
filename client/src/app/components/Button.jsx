import PropTypes from "prop-types";
import Link from "next/link";
const COLOR = {
  primary: "red-orange",
  secondary: "pink-strong",
  terciary: "primary-color",
  cuaternary: "pink-peach",
};

export default function Button({
  as,
  color,
  className = "",
  children,
  ...rest
}) {
  const Component = as === "Link" ? Link : "button";
  const colorButton = color ? COLOR[color] : COLOR["primary"];

  const styles = `rounded-md bg-${colorButton} ${className}`;
  return (
    <Component className={styles} {...rest}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  design: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
