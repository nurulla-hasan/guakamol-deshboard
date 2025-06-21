import { X } from "lucide-react";
import {
  FaEnvelope,
  FaRegAddressCard,
} from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { LuUserCheck } from "react-icons/lu";
import { RiPlantLine } from "react-icons/ri";



const StatRow = ({ icon, label, value }) => (
  <div className="flex justify-between items-center text-sm text-gray-700">
    <span className="flex items-center gap-2 font-medium">
      <span className="text-primary">{icon}</span>
      {label}:
    </span>
    <span>{value}</span>
  </div>
);

const ClientsAndPlantsModal = ({ setViewModal, viewModal, data }) => {
  if (!viewModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 transition-all">
      <div className="bg-white rounded-lg w-full max-w-lg space-y-7 relative">
        {/* Close Button */}
        <button
            onClick={() => setViewModal(false)}
            className="absolute top-2 right-2 text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-all duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

        {/* Company Image + Name */}
        <div className="flex flex-col items-center gap-3 text-center bg-primary/90 p-8 rounded-lg">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-md">
            <img
              src={data?.companyPhoto || "/placeholder.png"}
              alt={data?.companyName}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-200">{data?.companyName}</h2>
          <p className="text-sm text-gray-100 flex items-center gap-2 bg-white/20 px-2 py-1 rounded-full">
            <FaEnvelope /> {data?.companyEmail}
          </p>
        </div>

        {/* Company Stats */}
        <div className="w-full space-y-4 mt-2 p-8">
          <StatRow icon={<FaRegAddressCard />} label="Address" value={data?.companyAddress} />
          <StatRow icon={<RiPlantLine size={16}/>} label="Plants" value={data?.plants} />
          <StatRow icon={<LuUserCheck size={16}/>} label="Active Employees" value={data?.activeEmployees} />
          <StatRow icon={<GrStatusInfo />} label="Status" value={data?.status} />
        </div>
      </div>
    </div>
  );
};

export default ClientsAndPlantsModal;
