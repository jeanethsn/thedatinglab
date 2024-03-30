"use client";
import Modal from "@/app/components/modal/Modal.jsx";
import Button from "@/app/components/Button.jsx";
import { useForm } from "react-hook-form";
import {
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { getLogin } from "@/app/services/user";

export default function LoginContent({ handleCloseLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      const response = getLogin(data);
      // localstorage para guardar la data!
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography
            className="mb-3 font-normal"
            variant="paragraph"
            color="gray"
          >
            Enter your email and password to Sign In.
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Your Email
          </Typography>
          <Input
            label="email"
            size="lg"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600">* email is required</p>
          )}
          <Typography className="-mb-2" variant="h6">
            Your Password
          </Typography>
          <Input
            label="Password"
            size="lg"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">* email is required</p>
          )}
        </CardBody>
        <CardFooter className="pt-0">
          <Button type="submit">Sign In</Button>
          <Typography variant="small" className="mt-4 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </form>
    </Modal>
  );
}
