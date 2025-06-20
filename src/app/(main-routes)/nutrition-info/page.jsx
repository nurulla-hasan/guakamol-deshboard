"use client";
import PageContainer from "@/components/container/PageContainer";
import DisputeViewModal from "@/components/modal/dispute-view-modal/DisputeViewModal";
import Pagination from "@/components/pagination/Pagination";
import DisputeTable from "@/components/table/dispute-table/DisputeTable";
import { dispute } from "@/data/data";
import { useState } from "react";



export default function DisputeStatus() {
    const pageSize = 10;
    const [page, setPage] = useState(1);
    const [viewModal, setViewModal] = useState(false)

    const [selectedMatch, setSelectedMatch] = useState(null);

    const handleView = (match) => {
        setSelectedMatch(match);
        setViewModal(true)
    }

    const handleDisputeAction = (actionType) => {
        switch (actionType) {
          case "player1Win":
            console.log("Player 1 declared as winner");
            break;
          case "player2Win":
            console.log("Player 2 declared as winner");
            break;
          case "abort":
            console.log("Match Aborted");
            break;
          case "cancel":
            setViewModal(false);
            break;
          default:
            break;
        }
      };
      

    const pageCount = Math.ceil(dispute.length / pageSize);
    const paged = dispute.slice((page - 1) * pageSize, page * pageSize);

    return (

        <PageContainer>
            {/* header + search */}
            <div className="flex justify-between mb-7.5">
                <h1 className="text-xl font-medium">Dispute Statuses</h1>
            </div>

            {/* table */}
            <div className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200">
                <DisputeTable data={paged} handleView={handleView} />
            </div>

            {/* pagination (unchanged) */}
            <div className="flex justify-evenly items-center text-sm">
                <span className="text-[#5CA97E]">
                    Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, dispute.length)} of {dispute.length}
                </span>

                <div className="flex items-center gap-2">
                    <Pagination page={page} setPage={setPage} pageCount={pageCount} />
                </div>

            </div>

            {
                viewModal && (
                    <DisputeViewModal setViewModal={setViewModal} data={selectedMatch} handleDisputeAction={handleDisputeAction}/>
                )
            }

        </PageContainer>
    );
}
