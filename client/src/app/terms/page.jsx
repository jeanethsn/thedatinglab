import TermsService from '../components/TermsText';


export default function TermsPage() {
    return (
        <main className="gap-12 px-[10%] py-[4%] flex flex-col text-center">
            <h1 className="text-4xl font-bold text-red-600 lg:mb-8">Términos del Servicio</h1>
            <TermsService title="Holacdv vdsg" text="Hola Mundo"/>
            <TermsService title="Adiosvds" text="Hola Mundovsvas vdv fsgvawgv vdgaveger egaegaewg egewgerwg gsgsegv esgsge gegd egwerg"/>
        </main>
    );
}

