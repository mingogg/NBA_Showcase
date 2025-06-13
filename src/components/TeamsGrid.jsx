import TeamCard from './TeamCard.jsx';
import { logos } from '../assets/logos';

function TeamsGrid({ onHoverCard }) {
  const teams = [
    {
      name: 'Los Angeles Lakers',
      logo: logos.lakers,
      primaryColor: '#FDB927',
      secondaryColor: '#552583',
      link: 'https://lakersstore.com/',
    },
    {
      name: 'Chicago Bulls',
      logo: logos.bulls,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
      link: 'https://shop.bulls.com/',
    },
    {
      name: 'Oklahoma City Thunder',
      logo: logos.thunder,
      primaryColor: '#007AC1',
      secondaryColor: '#EF3B24',
      link: 'https://nbathundershop.com/#',
    },
    {
      name: 'Atlanta Hawks',
      logo: logos.hawks,
      primaryColor: '#C8102E',
      secondaryColor: '#FDB927',
      link: 'https://hawksshop.com/',
    },
    {
      name: 'Boston Celtics',
      logo: logos.celtics,
      primaryColor: '#007A33',
      secondaryColor: '#BA9653',
      link: 'https://www.celticsstore.com/',
    },
    {
      name: 'Brooklyn Nets',
      logo: logos.nets,
      primaryColor: '#000000',
      secondaryColor: '#FFFFFF',
      link: 'https://www.netsstore.com/en/',
    },
    {
      name: 'Charlotte Hornets',
      logo: logos.hornets,
      primaryColor: '#1D1160',
      secondaryColor: '#00788C',
      link: 'https://www.hornetsfanshop.com/',
    },
    {
      name: 'Cleveland Cavaliers',
      logo: logos.cavaliers,
      primaryColor: '#860038',
      secondaryColor: '#041E42',
      link: 'https://www.cavaliersteamshop.com/',
    },
    {
      name: 'Dallas Mavericks',
      logo: logos.mavericks,
      primaryColor: '#00538C',
      secondaryColor: '#002B5E',
      link: 'https://www.mavs.com/team/roster/',
    },
    {
      name: 'Denver Nuggets',
      logo: logos.nuggets,
      primaryColor: '#0E2249',
      secondaryColor: '#FEC524',
      link: 'https://www.nuggetstix.com/',
    },
    {
      name: 'Detroit Pistons',
      logo: logos.pistons,
      primaryColor: '#C8102E',
      secondaryColor: '#1D42BA',
      link: 'https://www.pistons313shop.com/#',
    },
    {
      name: 'Golden State Warriors',
      logo: logos.warriors,
      primaryColor: '#1D428A',
      secondaryColor: '#FFC72C',
      link: 'https://shop.warriors.com/',
    },
    {
      name: 'Houston Rockets',
      logo: logos.rockets,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
      link: 'https://rocketsshop.com/',
    },
    {
      name: 'Indiana Pacers',
      logo: logos.pacers,
      primaryColor: '#002D62',
      secondaryColor: '#FDBB30',
      link: 'https://www.pacersteamstore.com/',
    },
    {
      name: 'Los Angeles Clippers',
      logo: logos.clippers,
      primaryColor: '#C8102E',
      secondaryColor: '#1D428A',
      link: 'https://clipper.com/es',
    },
    {
      name: 'Memphis Grizzlies',
      logo: logos.grizzlies,
      primaryColor: '#5D76A9',
      secondaryColor: '#12173F',
      link: 'https://www.grizzliesstore.com/',
    },
    {
      name: 'Miami Heat',
      logo: logos.heat,
      primaryColor: '#98002E',
      secondaryColor: '#F9A01B',
      link: 'https://www.miamiheatstore.com/',
    },
    {
      name: 'Milwaukee Bucks',
      logo: logos.bucks,
      primaryColor: '#00471b',
      secondaryColor: '#EEE1C6',
      link: 'https://shop.bucks.com/',
    },
    {
      name: 'Minnesota Timberwolves',
      logo: logos.timberwolves,
      primaryColor: '#0C2340',
      secondaryColor: '#236192',
      link: 'https://shop.timberwolves.com/en/',
    },
    {
      name: 'New Orleans Pelicans',
      logo: logos.pelicans,
      primaryColor: '#0C2340',
      secondaryColor: '#C8102E',
      link: 'https://www.pelicansteamstore.com/',
    },
    {
      name: 'New York Knicks',
      logo: logos.knicks,
      primaryColor: '#006BB6',
      secondaryColor: '#F58426',
      link: 'https://shop.msg.com/pages/knicks',
    },
    {
      name: 'Orlando Magic',
      logo: logos.magic,
      primaryColor: '#0077C0',
      secondaryColor: '#C4CED4',
      link: 'https://www.orlandomagicshop.com/',
    },
    {
      name: 'Philadelphia 76ers',
      logo: logos.sixers,
      primaryColor: '#006BB6',
      secondaryColor: '#ED174C',
      link: 'https://www.sixersshop.com/',
    },
    {
      name: 'Phoenix Suns',
      logo: logos.suns,
      primaryColor: '#1D1160',
      secondaryColor: '#E56020',
      link: 'https://shop.suns.com/',
    },
    {
      name: 'Portland Trail Blazers',
      logo: logos.blazers,
      primaryColor: '#E03A3E',
      secondaryColor: '#000000',
      link: 'https://ripcityclothing.com/',
    },
    {
      name: 'Sacramento Kings',
      logo: logos.kings,
      primaryColor: '#5A2D81',
      secondaryColor: '#63727A',
      link: 'https://kingsteamstore.com/',
    },
    {
      name: 'San Antonio Spurs',
      logo: logos.spurs,
      primaryColor: '#C4CED4',
      secondaryColor: '#000000',
      link: 'https://spursfanshop.com/',
    },
    {
      name: 'Toronto Raptors',
      logo: logos.raptors,
      primaryColor: '#CE1141',
      secondaryColor: '#000000',
      link: 'https://members.raptors.com/',
    },
    {
      name: 'Utah Jazz',
      logo: logos.jazz,
      primaryColor: '#002B5C',
      secondaryColor: '#00471B',
      link: 'https://www.jazzteamstore.com/en/',
    },
    {
      name: 'Washington Wizards',
      logo: logos.wizards,
      primaryColor: '#002B5C',
      secondaryColor: '#E31837',
      link: 'https://www.nba.com/wizards/',
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
