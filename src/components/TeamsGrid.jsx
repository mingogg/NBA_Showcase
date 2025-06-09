import TeamCard from './TeamCard.jsx';
import { logos } from '../assets/logos';

function TeamsGrid({ onHoverCard }) {
  const teams = [
    {
      name: 'Los Angeles Lakers',
      logo: logos.lakers,
      primaryColor: '#FDB927',
      secondaryColor: '#552583',
    },
    {
      name: 'Chicago Bulls',
      logo: logos.bulls,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
    },
    {
      name: 'Oklahoma City Thunder',
      logo: logos.thunder,
      primaryColor: '#007AC1',
      secondaryColor: '#EF3B24',
    },
    {
      name: 'Atlanta Hawks',
      logo: logos.hawks,
      primaryColor: '#C8102E',
      secondaryColor: '#FDB927',
    },
    {
      name: 'Boston Celtics',
      logo: logos.celtics,
      primaryColor: '#007A33',
      secondaryColor: '#BA9653',
    },
    {
      name: 'Brooklyn Nets',
      logo: logos.nets,
      primaryColor: '#000000',
      secondaryColor: '#FFFFFF',
    },
    {
      name: 'Charlotte Hornets',
      logo: logos.hornets,
      primaryColor: '#1D1160',
      secondaryColor: '#00788C',
    },
    {
      name: 'Cleveland Cavaliers',
      logo: logos.cavaliers,
      primaryColor: '#860038',
      secondaryColor: '#041E42',
    },
    {
      name: 'Dallas Mavericks',
      logo: logos.mavericks,
      primaryColor: '#00538C',
      secondaryColor: '#002B5E',
    },
    {
      name: 'Denver Nuggets',
      logo: logos.nuggets,
      primaryColor: '#0E2249',
      secondaryColor: '#FEC524',
    },
    {
      name: 'Detroit Pistons',
      logo: logos.pistons,
      primaryColor: '#C8102E',
      secondaryColor: '#1D42BA',
    },
    {
      name: 'Golden State Warriors',
      logo: logos.warriors,
      primaryColor: '#1D428A',
      secondaryColor: '#FFC72C',
    },
    {
      name: 'Houston Rockets',
      logo: logos.rockets,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
    },
    {
      name: 'Indiana Pacers',
      logo: logos.pacers,
      primaryColor: '#002D62',
      secondaryColor: '#FDBB30',
    },
    {
      name: 'Los Angeles Clippers',
      logo: logos.clippers,
      primaryColor: '#C8102E',
      secondaryColor: '#1D428A',
    },
    {
      name: 'Memphis Grizzlies',
      logo: logos.grizzlies,
      primaryColor: '#5D76A9',
      secondaryColor: '#12173F',
    },
    {
      name: 'Miami Heat',
      logo: logos.heat,
      primaryColor: '#98002E',
      secondaryColor: '#F9A01B',
    },
    {
      name: 'Milwaukee Bucks',
      logo: logos.bucks,
      primaryColor: '#00471b',
      secondaryColor: '#EEE1C6',
    },
    {
      name: 'Minnesota Timberwolves',
      logo: logos.timberwolves,
      primaryColor: '#0C2340',
      secondaryColor: '#236192',
    },
    {
      name: 'New Orleans Pelicans',
      logo: logos.pelicans,
      primaryColor: '#0C2340',
      secondaryColor: '#C8102E',
    },
    {
      name: 'New York Knicks',
      logo: logos.knicks,
      primaryColor: '#006BB6',
      secondaryColor: '#F58426',
    },
    {
      name: 'Orlando Magic',
      logo: logos.magic,
      primaryColor: '#0077C0',
      secondaryColor: '#C4CED4',
    },
    {
      name: 'Philadelphia 76ers',
      logo: logos.sixers,
      primaryColor: '#006BB6',
      secondaryColor: '#ED174C',
    },
    {
      name: 'Phoenix Suns',
      logo: logos.suns,
      primaryColor: '#1D1160',
      secondaryColor: '#E56020',
    },
    {
      name: 'Portland Trail Blazers',
      logo: logos.blazers,
      primaryColor: '#E03A3E',
      secondaryColor: '#000000',
    },
    {
      name: 'Sacramento Kings',
      logo: logos.kings,
      primaryColor: '#5A2D81',
      secondaryColor: '#63727A',
    },
    {
      name: 'San Antonio Spurs',
      logo: logos.spurs,
      primaryColor: '#C4CED4',
      secondaryColor: '#000000',
    },
    {
      name: 'Toronto Raptors',
      logo: logos.raptors,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
    },
    {
      name: 'Utah Jazz',
      logo: logos.jazz,
      primaryColor: '#002B5C',
      secondaryColor: '#00471B',
    },
    {
      name: 'Washington Wizards',
      logo: logos.wizards,
      primaryColor: '#002B5C',
      secondaryColor: '#E31837',
    },
  ];
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
