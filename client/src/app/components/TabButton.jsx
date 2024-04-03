export default function TabButton({ img, label, onClick, isActive }) {
  return (
    <button className={`flex items-center gap-2 h-10 lg:w-[20%] justify-center font-nunito text-base xl:text-xl rounded-lg ${isActive ? 'bg-pink-grey text-red-orange border-none' : 'bg-white text-grey-dark  border-red-orange border-[0.05rem]'}`} onClick={onClick}>
      {img && <span>{img}</span>} 
      {label}
    </button>
  );
}