"use client";
import { Toaster } from "react-hot-toast";
import PreferencesForm from "../../components/Preferences/PreferencesForm.jsx";
import withAuthentication from "@/app/components/hoc/withAuthentication.jsx";

function PreferencesTest() {
  return (
    <main className="md:min-h-screen mx-auto bg-pink-grey-bg md:py-20 py-10">
      <Toaster position="top-center" />
      <PreferencesForm />
    </main>
  );
}

export default withAuthentication(PreferencesTest);
