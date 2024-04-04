"use client";
import PropTypes from "prop-types";
import Link from "next/link";
import { Spinner } from "@material-tailwind/react";
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
  isLoading = false,
  ...rest
}) {
  const Component = as === "Link" ? Link : "button";
  const styleDisabled =
    isLoading &&
    "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ";
  const styles = `w-full py-[0.2rem] mt-[1rem]  rounded-bl-2xl rounded-tr-2xl hover:rounded-full ${COLOR[color]}  ${styleDisabled} ${className}`;
  return (
    <Component disabled={isLoading} className={styles} {...rest}>
      {isLoading && (
        <>
          <Spinner /> <span>Loading...</span>
        </>
      )}
      {children && !isLoading ? children : null}
    </Component>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  design: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
