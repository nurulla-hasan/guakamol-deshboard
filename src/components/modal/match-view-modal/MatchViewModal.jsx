import {
  FaGolfBall,
  FaEnvelope,
  FaUser,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const StatRow = ({ icon, label, value }) => (
  <div className="flex justify-between items-center text-sm text-gray-700">
    <span className="flex items-center gap-2 font-medium">
      <span className="text-green-500">{icon}</span>
      {label}:
    </span>
    <span>{value}</span>
  </div>
);

const PlayerCard = ({ player }) => (
  <div className="flex-1 flex flex-col items-center gap-3 bg-gray-50 p-4 rounded-lg shadow">
    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
      <img
        src={player.avatar}
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
    <h2 className="text-lg font-bold text-gray-800 text-center">{player.name}</h2>
    <p className="text-sm text-gray-500 flex items-center gap-1">
      <FaEnvelope /> {player.email}
    </p>

    <div className="w-full space-y-2 mt-1">
      <StatRow icon={<FaGolfBall />} label="Golf Handicap" value={player.golfHandicap} />
      <StatRow icon={<FaUser />} label="Matches Played" value={player.matchPlayed} />
      <StatRow icon={<FaTrophy />} label="Win" value={`${player.win}%`} />
      <StatRow icon={<FaChartLine />} label="Average Score" value={player.averageScore} />
    </div>

    <div className="w-full">
      <h3 className="text-sm font-semibold text-gray-800 mb-1">Bio</h3>
      <p className="text-gray-600 text-sm text-justify">{player.bio}</p>
    </div>
  </div>
);

const MatchViewModal = ({ setViewModal, data }) => {
  const { player1, player2 } = data;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-5xl space-y-4 relative">

        {/* Close Button */}
        <button
          onClick={() => setViewModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold cursor-pointer"
        >
          <AiOutlineClose />
        </button>

        <div className="mb-5 *:text-center space-y-3">
          <h1 className="text-3xl font-medium">Participants Details</h1>
          <p>See all details about <span className="font-semibold text-lg">({player1.name})</span>  Smith and  <span className="font-semibold text-lg">({player2.name})</span> </p>
        </div>

        {/* Player Comparison Section */}
        <div className="flex gap-6 items-center">
          <PlayerCard player={player1} />

          {/* VS Section */}
            <div className="text-2xl font-bold text-gray-600 ">VS</div>

          <PlayerCard player={player2} />
        </div>
      </div>
    </div>
  );
};

export default MatchViewModal;
