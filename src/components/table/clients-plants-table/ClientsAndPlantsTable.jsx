import { FaRegEye } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";

const ClientsAndPlantsTable = ({ paged, handleBlock, handleView }) => {
    return (
        <>
            <table className="min-w-full text-sm">
                <thead className="bg-primary text-white sticky top-0">
                    <tr className="*:font-normal *:px-4 *:py-2 *:text-center">
                        <th>SL</th>
                        <th>Company Name</th>
                        <th>Plants</th>
                        <th>Active Employees</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paged.map((company, idx) => (
                        <tr
                            key={company._id}
                            className="hover:bg-gray-100 *:font-normal text-xs *:px-4 *:py-4 *:text-center *:border-b *:border-gray-200 transition-all duration-200">
                            <td>{idx + 1}</td>
                            <td>{company?.companyName}</td>
                            <td>{company?.plants}</td>
                            <td>{company?.activeEmployees}</td>
                            <td>{company?.status}</td>
                            <td className="flex justify-center gap-3">
                                <button
                                    onClick={()=>handleView(company)}
                                    className=" flex items-center justify-center rounded cursor-pointer text-gray-500"
                                >
                                    <FaRegEye size={18} />
                                </button>
                                <button
                                    onClick={() => handleBlock(company?._id)}
                                    className={` flex items-center justify-center rounded cursor-pointer text-red-400`}
                                >
                                    <MdBlockFlipped size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ClientsAndPlantsTable;