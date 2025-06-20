import { LuEye } from "react-icons/lu";

const MatchTable = ({ paged, handleView }) => {
    return (
        <>
            <table className="min-w-full text-sm">
                <thead className="bg-[#5CA97E] text-white sticky top-0">
                    <tr>
                        <th className="px-4 py-3 text-center">#SL no.</th>
                        <th className="px-4 py-3 text-left">Match Name</th>
                        <th className="px-4 py-3 text-left">date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Bet Amount</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((match) => (
                        <tr
                            key={match.id}
                            className={`odd:bg-gray-100 even:bg-white font-semibold`}>
                            <td className="px-4 py-5.5 text-center">{match.id}</td>
                            <td className="px-4 py-3 text-">{match.matchName}</td>
                            <td className="px-4 py-3 text-">{match.date}</td>
                            <td
                                className={`px-4 py-3 ${match.status === "Upcoming"
                                        ? "text-blue-600"
                                        : match.status === "Live"
                                            ? "text-green-600"
                                            : match.status === "Cancelled"
                                                ? "text-red-500"
                                                : match.status === "Completed"
                                                    ? "text-gray-600"
                                                    : ""
                                    }`}
                            >
                                {match.status}
                            </td>

                            <td className="px-4 py-3 text-center">{match.betAmount}</td>
                            <td className="px-4 py-3 flex justify-center gap-2">
                                <button
                                    onClick={() => handleView(match.player1, match.player2)}
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

export default MatchTable;