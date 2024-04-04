import CardMatch from "./CardMatch";

export default function MatchProfileContent() {
  const match = {
    name: 'Nombre del match',
    imageSrc:  '/assets/image/imagen-hero.png'

  };

    return (
      <section className="py-12 flex flex-wrap w-full justify-evenly gap-4">
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
        <CardMatch match={match}/>
      </section>
    );
  }