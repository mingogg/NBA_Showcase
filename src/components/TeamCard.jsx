import { useNavigate } from "react-router-dom";

function TeamCard({ name, logo, id, onHover, onLeave }) {
  const navigate = useNavigate()



  return (
    <div
      onClick={() => navigate(`/teams/${id}`)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group w-64 h-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-[1.03] flex flex-col items-center justify-center p-6 cursor-pointer"
    >
      <div className="w-28 h-28 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-contain max-h-full max-w-full"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-800 text-center">
        {name}
      </h2>
    </div>
  );
}

export default TeamCard;
