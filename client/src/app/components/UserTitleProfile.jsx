import Image from "next/image";

export default function UserTitleProfile(){
    return(
        <div className="flex flex-col-reverse lg:flex-row gap-4 py-4">
            <section className="flex flex-col gap-2 text-red-orange">
                <h6 className="text-base">
                    Datos de la cuenta
                </h6>
                <h2 className="text-3xl font-black">
                    <span className="text-grey-dark">Hola, </span>
                    Usuario
                </h2>
            </section>
            <div className="m-auto w-[200px] h-[200px] rounded-full overflow-hidden lg:w-[365px] lg:h-[365px]">
                <Image
                    src="/assets/image/imagen-hero.png"
                    width={200}
                    height={200}
                    alt="User photo"
                    className="object-fill lg:w-[3.65rem] lg:h-[365rem]"
                />
            </div>
        </div>
    );
}