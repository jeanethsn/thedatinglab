import TermsService from '../components/TermsText';


export default function TermsPage() {
    return (
        <main className="gap-12 px-[10%] py-[4%] flex flex-col text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-8">Términos del Servicio</h1>
            <TermsService title="Hola" text="Hola Mundo"/>
            <TermsService title="Adios" text="Hola Mundo"/>
        </main>
    );
}

