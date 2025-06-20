import Image from 'next/image';
import Link from 'next/link';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Topbar = () => {

    const user = useSelector(state => state.auth.user) 

    return (
        <>
            <div className="bg-layout-bg z-10 sticky top-0 flex justify-end items-center gap-4 h-20 pr-12">
                <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
                    <Link href="/notification">
                        <IoMdNotificationsOutline color='#fff' size={16} />
                    </Link>
                </button>
                <Image
                    src="/images/avatar.png"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full cursor-pointer border-2 border-primary"
                />
                <span className="text-sm font-medium text-black">{user?.name || "Kristin Watson"}</span>
            </div>
        </>
    );
};

export default Topbar;