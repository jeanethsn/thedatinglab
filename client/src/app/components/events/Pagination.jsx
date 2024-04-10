"use client";
import Image from "next/image";
export default function Pagination({
  handlePagination,
  currentPage,
  totalPages,
}) {
  const isDisabledIfLowerThan = currentPage === 1;
  const isDisabledIfUpperThan = currentPage === totalPages;
  return (
    <div className="lg:flex lg:justify-center lg:items-center gap-[1rem]">
      <button
        className={` bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl flex gap-[0.5rem] justify-center items-center text-[1rem] ${
          isDisabledIfLowerThan ? "opacity-40" : "opacity-100"
        }`}
        onClick={() => handlePagination(currentPage - 1)}
        disabled={isDisabledIfLowerThan}
      >
        <Image
          src="/assets/image/icon-previus.svg"
          alt="icono previus"
          width={20}
          height={20}
          className=""
        />{" "}
        Anterior
      </button>
      <p className="text-[1rem] font-bold text-quaternary-blue">
        {currentPage}
      </p>
      <button
        className={`bg-quaternary-blue px-[0.6rem] py-[0.2rem] rounded-2xl flex gap-[0.5rem] justify-center items-center text-[1rem] flex-row-reverse ${
          isDisabledIfUpperThan ? "opacity-40" : "opacity-100"
        }`}
        onClick={() => handlePagination(currentPage + 1)}
        disabled={isDisabledIfUpperThan}
      >
        <Image
          src="/assets/image/icon-next.svg"
          alt="icono next"
          width={20}
          height={20}
          className=""
        />
        Siguiente
      </button>
    </div>
  );
}
