"use client";
import '../globals.css';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { TbLayoutDashboard, TbReportSearch } from "react-icons/tb";
import Topbar from '@/components/layout/Topbar';
import PrivateRoute from '@/components/privet-route/PrivetRoute';
import Sidebar from '@/components/layout/Sidebar';
import { FaNutritionix } from 'react-icons/fa';
import { PiUsersThree } from 'react-icons/pi';
import { MdOutlineManageAccounts, MdOutlineRestaurantMenu } from 'react-icons/md';

const menuItems = [
  { label: "Dashboard", href: "/", icon: <TbLayoutDashboard size={20} /> },
  { label: "Clients & Plants", href: "/clients-&-plants", icon: <PiUsersThree size={20} /> },
  { label: "User Management", href: "/user-management", icon: <MdOutlineManageAccounts size={20} /> },
  { label: "Weekly Menu", href: "/weekly-menu", icon: <MdOutlineRestaurantMenu size={20} /> },
  { label: "Nutrition Info", href: "/nutrition-info", icon: <FaNutritionix size={20} /> },
  { label: "Reports", href: "/reports", icon: <TbReportSearch size={20} /> },
];
const settingMenu = [
  { label: "Profile", href: "/settings/profile" },
  { label: "FAQ", href: "/settings/FAQ" },
  { label: "Terms & Condition", href: "/settings/terms" },
  { label: "Privacy Policy", href: "/settings/privacy-policy" },
];

export default function MainRouteLayout({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();

  return (
      <>
          <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className='w-56 flex flex-col justify-between pb-10 bg-layout-bg'>
              <Sidebar {...{menuItems, setSettingsOpen, settingsOpen, pathname, settingMenu}}/>
            </div>

            <main className="flex-1 overflow-auto scrl-hide">
              {/* Top bar */}
              <Topbar />

              {/* Page content */}
                <div className="bg-content-bg h-[calc(100vh-80px)] overflow-auto scrl-hide rounded-tl-sm p-3">
                  {children}
                </div>
            </main>
          </div>
      </>
  );
}
