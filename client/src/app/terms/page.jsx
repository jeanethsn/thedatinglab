import React from 'react';
import Footer from '@/app/components/Footer';
import NavigationBar from '@/app/components/NavBar';
import TermsService from '../components/TermsService';



const page = () => {
    return (
        <div className="grid grid-rows-[auto,1fr,auto] h-screen">

            <TermsService />

        </div>
    );
}

export default page;