"use client";
import RadioInputList from "./RadioInputList.jsx";
import InputDate from "./InputDate.jsx";
import InputChipList from "./InputChipList.jsx";
import InputText from "@/app/components/InputText.jsx";

export default function PreferenceStep(props) {
  return (
    <>
      <label className="mb-6 text-[#545454] font-nunito font-bold text-[1rem] leading-snug">
        {props.data.title}
      </label>

      {props.data.type === "birthdate" && <InputDate {...props} />}

      {props.data.type !== "birthdate" && props.data.options.length > 5 ? (
        <InputChipList {...props} />
      ) : (
        <RadioInputList {...props} />
      )}

      {props.data.type === "rrss" && (
        <InputText name={props.data.type} register={props.register} />
      )}

      <span className="text-red-500 text-[1rem] font-bold">
        {props.error?.message}
      </span>

      {props.preferenceButtons(props.error)}
    </>
  );
}
