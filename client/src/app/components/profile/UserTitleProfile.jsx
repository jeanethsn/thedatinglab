import Image from "next/image";

export default function UserTitleProfile(){
    return(
        <div className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-between pb-10">
            <section className="flex flex-col gap-2 text-red-orange">
                <h6 className="text-base">
                    Datos de la cuenta
                </h6>
                <h2 className="text-3xl font-black lg:text-6xl">
                    <span className="text-grey-dark">Hola, </span>
                    Usuario
                </h2>
            </section>
            <div className="m-auto w-[12.5rem] h-[12.5rem] rounded-full overflow-hidden lg:m-0 lg:w-[14rem] lg:h-[14rem]">
                <Image
                    src="/assets/image/imagen-hero.png"
                    width={200}
                    height={200}
                    alt="User photo"
                    className="object-fill"
                />
            </div>
        </div>
    );
}