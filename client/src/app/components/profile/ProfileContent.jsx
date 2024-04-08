import Button from "../Button";

export default function ProfileContent({userData}) {

  if (!userData) {
    return null; // Otra acción que desees tomar si userData es null
  }


  const { profile } = userData;
  return (
    <section className="flex flex-col lg:w-full m-auto py-12 gap-12">
      <div className="mb-12">
        <h3 className="lg:text-nowrap text-left text-xl font-bold text-red-orange mb-4">
          Sobre mí
        </h3>
        <p className="text-left font-nunito text-base">
        {profile.description}
        </p>
        <hr className="lg:hidden w-[10rem] my-8 m-auto border-red-orange"></hr>
      </div>
      <div>
        <h3 className="lg:text-nowrap text-xl text-left font-bold text-red-orange mb-4">
          Momento vital
        </h3>
        <p className="text-left font-nunito text-base">
        {profile.vitalMoment}
        </p>
        <hr className="lg:hidden w-[10rem] my-8 m-auto border-red-orange"></hr>
      </div>
      <Button
        color="primary"
        children="Editar perfil"
        className="sm:text-[1.1rem] w-[18.75rem] m-auto lg:w-[28rem] text-white text-[1rem] font-semibold lg:mt-[1.4rem] lg:py-[0.5rem] lg:rounded-bl-3xl lg:rounded-tr-3xl xl:text-[1.2rem]"
        style={{
          transition:
            "background 0.3s, border 0.3s, border-radius .3s, box-shadow .3s, transform .3s, .4s",
        }}
      />
    </section>
  );
}