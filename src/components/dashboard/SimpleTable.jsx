import React from 'react';
import { MdBlockFlipped } from 'react-icons/md';
import { LuEye } from 'react-icons/lu';

const SimpleTable = ({ companies, handleView, handleBlock }) => {
    return (
        <>
            <div className="rounded-md border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="text-gray-100 bg-primary sticky top-0 w-full">
                        <tr className="*:font-normal *:px-4 *:py-2">
                            <th>SI</th>
                            <th>Company Name</th>
                            <th>Plants</th>
                            <th>Active Employees</th>
                            <th>Status</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {companies.slice(0, 9).map((company, index) => (
                            <tr key={index} className="hover:bg-gray-100 text-xs *:px-4 *:py-2 *:font-normal *:text-center *:border-b *:border-gray-200 transition-all duration-200">
                                <td>{index + 1}</td>
                                <td>{company?.companyName}</td>
                                <td>{company?.plants}</td>
                                <td>{company?.activeEmployees}</td>
                                <td>{company?.status}</td>
                                {/* <td className="flex justify-center items-center gap-3">
                                    <button
                                        // onClick={() => handleView(company)}
                                        className="flex items-center justify-center cursor-pointer"
                                    >
                                        <LuEye size={16} className="text-gray-500" />
                                    </button>
                                    <button
                                        // onClick={() => handleBlock(company?._id)}
                                        className={`flex items-center justify-center cursor-pointer text-red-400`}
                                    >
                                        <MdBlockFlipped size={16} />
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SimpleTable;