import { useEffect, useState } from "react";
import CardMatch from "./CardMatch";
import { getMatch } from "@/app/services/user";

export default function MatchProfileContent() {

  const [userMatch, setUserMatch] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  useEffect(() => {
    const fetchMaches = async () => {
      try {
        const userData = await getMatch();
        setUserMatch(userData.matches);
        console.log(userData.matches)
      } catch (error) {
        setError(true);
        setErrorMsg(error.response?.data?.msg);
      }
    };

    fetchMaches();
  }, []);

  return (
    <section className="py-12 flex flex-wrap w-full justify-center lg:justify-start gap-4">
      {error ? (
        <p className="text-red-600 text-[0.8rem] lg:text-[1rem]" >{errorMsg}</p>
      ) : (
        userMatch.map((match, index) => (
          <CardMatch key={index} match={match} />
        ))
      )}
    </section>
  );
}