import React from 'react';
import Footer from '@/app/components/Footer';
import NavigationBar from '@/app/components/NavBar';


const TermsService = () => {
    return (
        <div>
            <NavigationBar />
            <div className="terms-content">
                <h1>Términos del Servicio</h1>
                <hr className="border-t-2 border-red-500 my-4" /> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dapibus mauris, eu sagittis velit. Donec feugiat lacinia lorem, et ultricies nulla. Ut sollicitudin ultrices libero, vel luctus sapien vestibulum at.</p>
                <p>Fusce aliquet magna felis, eget cursus lacus dignissim a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam id pulvinar eros. Nulla vitae ligula eget urna congue venenatis.</p>
                <hr className="border-t-2 border-red-500 my-4" /> 
                <p>Mauris in risus sagittis, hendrerit lorem sed, ultrices nisi. Maecenas volutpat dolor ut libero consequat, vel ullamcorper risus vestibulum. In hac habitasse platea dictumst. Proin pharetra ex justo, non lacinia leo vehicula nec.</p>
                <p>Integer sit amet ligula nec nunc placerat lacinia. Nulla id congue purus. Vestibulum fringilla vestibulum lacus, ut efficitur ex mattis ac. Sed eu sagittis ipsum. Aliquam erat volutpat.</p>
                <hr className="border-t-2 border-red-500 my-4" /> 
            </div>
            <Footer />
        </div>
    );
}

export default TermsService;

