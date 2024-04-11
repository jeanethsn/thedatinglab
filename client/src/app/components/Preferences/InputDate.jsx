"use client";
import { Input } from "@material-tailwind/react";

export default function InputDate({ data, register, error }) {
  return (
    <>
      <Input type="date" name={data.type} {...register(data.type)} />
    </>
  );
}
