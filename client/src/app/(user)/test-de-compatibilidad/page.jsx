"use client";
import { Toaster } from "react-hot-toast";
import PreferencesForm from "../../components/PreferencesForm.jsx";

export default function PreferencesTest() {
  return (
    <main className="md:min-h-screen mx-auto bg-pink-cream md:py-20 py-10">
      <Toaster position="top-center" />
      <PreferencesForm />
    </main>
  );
}
