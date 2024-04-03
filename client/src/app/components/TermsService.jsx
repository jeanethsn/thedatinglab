import React from 'react';

const TermsService = () => {
    return (
        <div className="mx-auto max-w-screen-lg mt-10">
            <div className="flex flex-col justify-center items-center">
                <div className="mx-4 mb-8 text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-8">Términos del Servicio</h1>
                    {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="my-8">
                            <div className='flex items-center mb-2'>
                                <h3 className="text-xl font-bold text-red-600">Lorem ipsum</h3>
                                <div className="ml-10 w-4/5 border-t border-red-600" />
                            </div>
                            <p className="font-nunito text-base font-normal line-clamp-2 mt-2">
                                Mauris in risus sagittis, hendrerit lorem sed, ultrices nisi. Maecenas volutpat dolor ut libero consequat, vel ullamcorper risus vestibulum. In hac habitasse platea dictumst. Proin pharetra ex justo, non lacinia leo vehicula nec.
                                Vestibulum venenatis dolor ut justo suscipit, ac dignissim nulla lobortis. Nulla facilisi. Morbi et vehicula libero. Nulla facilisi. Morbi ultricies felis sed turpis rutrum placerat. Nullam sodales sem id dolor congue, a vestibulum sapien tincidunt.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TermsService;
