import {
    FaFlag,
    FaUser,
    FaCalendarAlt,
    FaCamera,
    FaFileImage,
} from "react-icons/fa";
import { GrScorecard, GrStatusInfo } from "react-icons/gr";
import { IoDocument } from "react-icons/io5";

const InfoRow = ({ icon, label, value }) => (
    <div className="flex items-center gap-2 text-sm text-gray-700">
        <span className="text-green-600">{icon}</span>
        <span className="font-medium">{label}:</span>
        <span>{value}</span>
    </div>
);

const DisputeViewModal = ({ setViewModal, data, handleDisputeAction }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-sm w-full max-w-xl space-y-6 relative shadow-lg">

                {/* Close Button */}
                <button
                    onClick={() => setViewModal(false)}
                    className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl font-bold cursor-pointer"
                >
                    ✕
                </button>

                <div className="mb-10">
                    <h1 className="text-2xl font-medium text-center text-gray-700">
                        Dispute Detail Modal
                    </h1>
                </div>

                {/* Players Info */}
                <div className="flex justify-start items-center gap-8">
                    {/* Player 1 */}
                    <div className="flex flex-col items-center flex-1">
                        <img
                            src={data.player1Image}
                            className="w-18 h-18 rounded-full border-4 border-green-500 object-cover shadow"
                            alt="Player 1"
                        />
                        <p className="text-lg mt-2 font-medium text-gray-700">{data.players.split("vs")[0]}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {/* <h2 className="text-lg font-bold text-gray-600">Match</h2> */}
                        <h2 className="text-3xl font-bold text-gray-600">VS</h2>
                    </div>

                    {/* Player 2 */}
                    <div className="flex flex-col items-center flex-1">
                        <img
                            src={data.player2Image}
                            className="w-18 h-18 rounded-full border-4 border-green-500 object-cover shadow"
                            alt="Player 2"
                        />
                        <p className="text-lg mt-2 font-medium text-gray-700">{data.players.split("vs")[1]}</p>
                    </div>
                </div>

                {/* Dispute Info */}
                <div className="space-y-4">
                    <InfoRow icon={<FaFlag />} label="Issue" value={data.issueSummary} />
                    <InfoRow icon={<FaUser />} label="Raised By" value={data.raisedBy} />
                    <InfoRow icon={<FaFileImage />} label="Evidence Submitted" value={`${data.evidenceSubmitted}`} />
                    <InfoRow icon={<FaCalendarAlt />} label="Date" value={data.date} />
                    <InfoRow icon={<FaCamera />} label="Hole" value={`Hole ${data.hole}`} />
                    <InfoRow icon={<GrScorecard />} label="Score Card" value={`${data.scoreCard}`} />
                    <InfoRow icon={<IoDocument />} label="Other evidence" value={`${data.otherEvidence}`} />
                    <InfoRow icon={<GrStatusInfo />} label="Status" value={`${data.status}`} />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 *:cursor-pointer">
                    <button onClick={() => handleDisputeAction("player1Win")} className="bg-green-200 hover:bg-green-300 text-green-900 font-semibold py-2 px-3 rounded-sm">
                        Player-1 (win)
                    </button>
                    <button onClick={() => handleDisputeAction("player2Win")} className="bg-green-200 hover:bg-green-300 text-green-900 font-semibold py-2 px-3 rounded-sm">
                        Player-2 (win)
                    </button>
                    <button onClick={() => handleDisputeAction("cancel")} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-sm">
                        Cancel
                    </button>
                    <button onClick={() => handleDisputeAction("abort")} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-sm">
                        Abort Match
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisputeViewModal;
