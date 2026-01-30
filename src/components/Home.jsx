import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
  <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
    <div className="text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          NBA SHOWCASE
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Explore teams, players and statistics from the NBA in one place.
      </p>
      <button
        onClick={() => navigate("/teams")}
        className="mt-8 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
        >
          View Teams
      </button>
    </div>
  </section>
  )

}

export default Home;
