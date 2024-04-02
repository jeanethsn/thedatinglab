import React from 'react';

const TermsService = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mx-4 mb-8">
                <h1 className="text-3xl font-bold mb-4">Términos del Servicio</h1>
                <hr className="border-t-2 border-red-500 my-4" />
                <br />
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="my-8">
                        <div className='flex items-center mb-2'>
                            <h3 className="text-xl font-bold">Lorem ipsum</h3>
                            <span className="w-full h-[0.1rem] bg-red-600" />
                        </div>
                        <p>Mauris in risus sagittis, hendrerit lorem sed, ultrices nisi. Maecenas volutpat dolor ut libero consequat, vel ullamcorper risus vestibulum. In hac habitasse platea dictumst. Proin pharetra ex justo, non lacinia leo vehicula nec.</p>
                    </div>
                ))}
                <hr className="border-t-2 border-red-500 my-4" />
            </div>
        </div>
    );
}

export default TermsService;
