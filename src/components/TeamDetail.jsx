import { useParams } from "react-router-dom"
import teams from "../data/teams"

function TeamDetail() {
  const { id } = useParams()
  const team = teams.find(t => t.id === id)

  if (!team) {
    return <div className="p-6 text-center text-red-600">Team not found.</div>
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        background: `radial-gradient(circle at bottom right, ${team.secondaryColor} 0%, ${team.primaryColor} 60%)`,
      }}
    >
      {/* ─── History (texto) ─── */}
      <div
        className={`
    absolute top-4 left-1/2 transform -translate-x-1/2
    mx-auto max-w-xl px-4 max-h-[65vh] overflow-auto
    text-white text-lg leading-relaxed text-center

    md:top-1/2 md:left-auto md:right-[5%]
    md:translate-x-0 md:-translate-y-1/2
    md:max-h-none md:overflow-visible
    md:text-right md:text-xl
  `}
      >
        <p>{team.history}</p>
      </div>

      {/* ─── Player image ─── */}
      <div
        className={`
          absolute bottom-0 left-0 overflow-hidden flex items-end z-10
          w-full h-[30vh]              /* MOBILE */
          sm:h-[40vh]                  /* opcional: breve ajuste en sm */
          md:w-[60vw] md:h-full        /* DESKTOP: tu layout original */
        `}
      >
        <img
          src={team.player}
          alt={`Star player of ${team.name}`}
          className="object-contain h-full block"
        />
      </div>

      {/* ─── Logo ─── */}
      <a
        href={team.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[10vh] right-6 z-20"
      >
        <img
          src={team.logo}
          alt={`Logo of ${team.name}`}
          className="w-20 md:w-24 object-contain"
        />
      </a>

      {/* ─── Footer ─── */}
      <footer className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm z-20">
        Made by <a href="https://github.com/mingogg" className="underline">mingogg</a>
      </footer>
    </div>
  )
}

export default TeamDetail
