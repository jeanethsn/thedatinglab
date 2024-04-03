import Button from "../Button";

export default function ProfileContent() {
  return (
    <section className="flex flex-col w-[18rem] lg:w-full m-auto py-12 gap-6">
        <h3 className="lg:text-nowrap text-center lg:text-left text-xl font-bold text-red-orange">
          Sobre mí
        </h3>
        <p className="text-left font-nunito text-base">
        En mi tiempo libre, disfruto de actividades al aire libre como caminatas en la naturaleza o días en la playa, pero también aprecio las noches acogedoras en casa viendo películas o leyendo un buen libro. Soy una persona creativa y me encanta explorar diferentes formas de expresión artística, ya sea a través de la pintura, la escritura o la música.
        </p>
        <hr />
        <h3 className="lg:text-nowrap text-center text-xl lg:text-left font-bold text-red-orange">
          Mis intereses
        </h3>
        <p className="text-left font-nunito text-base">
        En mi tiempo libre, disfruto de actividades al aire libre como caminatas en la naturaleza o días en la playa, pero también aprecio las noches acogedoras en casa viendo películas o leyendo un buen libro. Soy una persona creativa y me encanta explorar diferentes formas de expresión artística, ya sea a través de la pintura, la escritura o la música.
        </p>
        <Button
          color="primary"
          children="Editar perfil"
          className="sm:text-[1.1rem] m-auto lg:w-[28rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
    </section>
  );
}