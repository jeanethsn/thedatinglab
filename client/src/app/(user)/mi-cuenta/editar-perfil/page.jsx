"use client";

import UpdateForm from "@/app/components/profile/UpdateForm.jsx";
import { Typography, Card } from "@material-tailwind/react";
import withAuthentication from "@/app/components/hoc/withAuthentication";

function EditProfilePage() {
  return (
    <main className="md:min-h-screen mx-auto bg-pink-grey-bg md:py-20 py-10">
      <Card className="w-2/3 p-8 lg:p-12 m-auto">
        <Typography
          variant="h4"
          className="text-primary-color text-center font-nunito font-bold text-[1.6rem] mt-[0.4rem] lg:text-[1.8rem] mb-[1.5rem]"
        >
          Actualizar perfil
        </Typography>
        <UpdateForm />
      </Card>
    </main>
  );
}

export default withAuthentication(EditProfilePage);
