import Image from "next/image";

export default function MatchTitleProfile(){
    return(
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-20 items-center justify-end pb-10">
                <h2 className="text-3xl font-black lg:text-6xl text-red-orange">
                    Usuario
                </h2>
            <div className="m-auto w-[12.5rem] lg:mb-4 h-[12.5rem] rounded-full overflow-hidden lg:m-0 lg:w-[14rem] blur-sm lg:h-[14rem]">
                <Image
                    src="/assets/image/imagen-hero.png"
                    width={200}
                    height={200}
                    alt="User photo"
                    className="object-fill "
                />
            </div>
        </div>
    );
}