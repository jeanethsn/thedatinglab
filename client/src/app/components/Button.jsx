"use client";
import PropTypes from "prop-types";
import Link from "next/link";
const COLOR = {
  primary: "bg-red-orange ",
  secondary: "bg-pink-strong",
  terciary: "bg-primary-color",
  cuaternary: "bg-pink-peach",
};

export default function Button({
  as,
  color = "",
  className = "",
  children,
  ...rest
}) {
  const Component = as === "Link" ? Link : "button";

  const styles = `w-full py-[0.2rem] mt-[1rem]  rounded-bl-2xl rounded-tr-2xl hover:rounded-full ${COLOR[color]} ${className}`;
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
