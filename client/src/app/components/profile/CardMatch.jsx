export default function CardMatch({ match }) {
    const { name, imageSrc } = match;

    return (
        <section className="bg-white rounded-lg shadow-md  w-64">
            <div className= "overflow-hidden w-full h-64 rounded-t-lg">
                <img className=" object-cover w-full h-full blur-sm" src={imageSrc} alt={`Imagen de ${name}`} />
            </div>
            <p className="font-semibold text-lg p-4">{name}</p>
        </section>
    );
}