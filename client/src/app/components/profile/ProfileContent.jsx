import Button from "../Button";

export default function ProfileContent() {
  return (
    <section className="flex flex-col">
        <h3>
          Sobre mí
        </h3>
        <p>

        </p>
        <hr />
        <h3>
          Mis intereses
        </h3>
        <p>
          
        </p>
        <Button
          color="primary"
          children="Editar perfil"
          className="sm:text-[1.1rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem] w-[18rem] lg:w-[28rem] m-auto"
          style={{
            transition:
              "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
          }}
        />
    </section>
  );
}