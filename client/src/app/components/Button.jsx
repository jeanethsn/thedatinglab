import Proptypes from "prop-types";
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
  href = "",
  className = "",
  children,
  type = "button",
  ...rest
}) {
  const Component = as === "Link" ? Link : "button";

  const colorButton = color ? COLOR[color] : COLOR["primary"];

  const styles = `rounded-md bg-${colorButton} ${className}`;
  return (
    <Component type={type} href={href} className={styles} {...rest}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  as: Proptypes.string,
  type: Proptypes.string,
  design: Proptypes.string,
  className: Proptypes.string,
  href: Proptypes.string,
  children: Proptypes.element,
};
