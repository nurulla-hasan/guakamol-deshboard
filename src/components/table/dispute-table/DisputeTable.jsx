import { LuEye } from "react-icons/lu";

const DisputeTable = ({ data, handleView }) => {
    return (
        <>
            <table className="min-w-full text-sm">
                <thead className="bg-[#5CA97E] text-white sticky top-0 ">
                    <tr>
                        <th className="px-4 py-3 text-center">Dispute ID</th>
                        <th className="px-4 py-3 text-left">Match ID</th>
                        <th className="px-4 py-3 text-left">Player(s)</th>
                        <th className="px-4 py-3 text-left">Issue Summary</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((match) => (
                        <tr
                            key={match.matchID}
                            className={`odd:bg-gray-100 even:bg-white font-semibold`}>
                            <td className="px-4 py-[22.5px] text-center">{match.disputeID}</td>
                            <td className="px-4 py-3 ">{match.matchID}</td>
                            <td className="px-4 py-3 ">{match.players}</td>
                            <td className="px-4 py-3 ">{match.issueSummary}</td>
                            <td className="px-4 py-3 ">{match.date}</td>
                            <td
                                className={`px-4 py-3 ${match.status === "Pending"
                                        ? "text-yellow-500"
                                        : match.status === "In Review"
                                            ? "text-blue-500"
                                            : match.status === "Abort Match"
                                                ? "text-red-500"
                                                : match.status === "Player -1 (win)"
                                                    ? "text-emerald-500"
                                                    : match.status === "Player -2 (win)"
                                                        ? "text-emerald-500"
                                                        : ""
                                    }`}
                            >
                                {match.status}
                            </td>
                            <td className="px-4 py-3 flex justify-center gap-2">
                                <button
                                    onClick={() => handleView(match)}
                                    className="w-8 h-8 flex items-center justify-center rounded cursor-pointer bg-[#5CA97E]"
                                >
                                    <LuEye size={22} color="#fff" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DisputeTable;