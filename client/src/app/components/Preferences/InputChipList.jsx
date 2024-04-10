"use client";
import { Controller } from "react-hook-form";

export default function InputChipList({
  data,
  register,
  error,
  setValue,
  control,
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {data.options.map((option, index) => (
        <Controller
          key={option.value}
          name={data.type}
          control={control}
          render={(data) => {
            return (
              <button
                className={`flex align-center relative select-none items-center whitespace-nowrap rounded-full border border-grey-ligth py-1.5 px-3 text-base transition-colors 
                  ${
                    data.field.value === option.value
                      ? "text-white bg-grey-dark border-grey-dark"
                      : ""
                  }`}
                onClick={() => setValue(data.field.name, option.value)}
              >
                {data.field.value === option.value && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 m-1 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                )}
                {option.label}
              </button>
            );
          }}
        />
      ))}
    </div>
  );
}
