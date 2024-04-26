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
    <section className="w-full max-w-[1200px] xxl:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mb-[4rem] lg:mb-0 py-12">
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