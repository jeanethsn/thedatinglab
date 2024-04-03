export default function TermsText({title, text}) {
    return (

        <section className="flex flex-col gap-4">
            <div className='flex flex-row items-center'>
                <h3 className="text-nowrap text-xl font-bold text-red-600">{title}</h3>
                <span className="hidden lg:flex ml-12 w-full border-t border-red-600"></span>
            </div>           
            <p className="text-left font-nunito text-base">
                {text}
            </p>
            <span className="ml-12 w-[100px] lg:hidden border-t border-red-600"></span>
        </section>
    );
}

