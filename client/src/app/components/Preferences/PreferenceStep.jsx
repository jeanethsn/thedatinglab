"use client";
import RadioInputList from "./RadioInputList";
import InputDate from "./InputDate";
import InputChipList from "./InputChipList";

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

      <span className="text-red-500">{props.error?.message}</span>

      {props.preferenceButtons(props.error)}
    </>
  );
}
