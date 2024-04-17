import { useEffect } from "react";

export default function CardMatch({ match }) {
    const { name, lastname, image } = match;

    const disableRightClick = (event) => {
        event.preventDefault();
    };


    useEffect(() => {
        document.addEventListener('contextmenu', disableRightClick);
        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
        };
    }, []);

    return (
        <div className="bg-white max-w-[22rem] min-w-[18rem] w-[25rem] sm:w-full sm:min-w-[12rem] flex flex-col flex-wrap mx-auto rounded-lg">
                    <div className="overflow-hidden w-full h-64 rounded-t-lg relative z-2">
                    <img className="object-cover blur-[0.38rem] w-full h-full" src={`http://127.0.0.1:8000/storage/${image}`}  alt={`${name} ${lastname} photo`} />
            </div>
            <p className="font-semibold text-lg p-4 relative z-30">{`${name} ${lastname}`}</p>
        </div>
    );
}