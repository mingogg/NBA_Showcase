import TeamCard from './TeamCard.jsx';
import teams from '../data/teams.js';

function TeamsGrid({ onHoverCard }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 p-6 w-full justify-items-center">
      {teams.map((team) => (
        <TeamCard
          key={team.name}
          {...team}
          onHover={() => onHoverCard(team)}
          onLeave={() => onHoverCard(null)}
        />
      ))}
    </div>
  );
}
export default TeamsGrid;
