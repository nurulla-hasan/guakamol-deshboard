"use client";
import PageContainer from "@/components/container/PageContainer";
import MatchViewModal from "@/components/modal/match-view-modal/MatchViewModal";
import Pagination from "@/components/pagination/Pagination";
import MatchTable from "@/components/table/match-table/MatchTable";
import { matches } from "@/data/data";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";


export default function MatchOversight() {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [data, setData] = useState(matches);
  const [viewModal, setViewModal] = useState(false)

  
  const [selectedMatch, setSelectedMatch] = useState(null);
  const handleView = (player1, player2) => {
    setSelectedMatch({player1, player2});
    setViewModal(true)
  }

  /* filter + paginate */
  const filtered = data.filter((u) =>
    u.matchName.toLowerCase().includes(query.toLowerCase())
  );

  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (

    <PageContainer>
      {/* header + search */}
      <div className="flex justify-between ">
        <h1 className="text-xl font-medium">Match Statuses</h1>
        <div className="relative w-72">
          <FiSearch className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" size={18} />
          <input
            placeholder="Search here..."
            value={query}
            onChange={(e) => {
              setPage(1);
              setQuery(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-[#5CA97E] focus:outline-none"
          />
        </div>
      </div>

      {/* table */}
      <div className="overflow-auto h-[74vh] scrl-hide rounded-md border border-gray-200">
        <MatchTable paged={paged} handleView={handleView} />
      </div>

      {/* pagination (unchanged) */}
      <div className="flex items-center text-sm justify-evenly">
        <span className="text-[#5CA97E]">
          Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filtered.length)} of {filtered.length}
        </span>

        <div className="flex items-center gap-2">
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </div>

      </div>

      {
        viewModal && (
          <MatchViewModal setViewModal={setViewModal} data={selectedMatch} />
        )
      }

    </PageContainer>
  );
}
