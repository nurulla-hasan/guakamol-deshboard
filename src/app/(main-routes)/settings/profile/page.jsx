"use client";
import PageContainer from '@/components/container/PageContainer';
import { user } from '@/data/data';
import { FiCamera } from "react-icons/fi";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';
import EditProfileTab from '@/components/profile/tabs/EditProfileTab';
import ChangePassTab from '@/components/profile/tabs/ChangePassTab';

const Page = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [previewImage, setPreviewImage] = useState("/images/avatar.png");
    const fileInputRef = useRef(null);

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            contact: user?.contact || '',
            address: user?.address || '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    });

    const onSubmitProfile = (data) => {
        console.log('Profile Updated:', data);
    };

    const onSubmitPassword = (data) => {
        console.log('Password Changed:', data);
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };

    return (
        <PageContainer>
            <h1 className='text-xl font-medium'>Profile</h1>
            <div className="flex flex-col items-center justify-start min-h-[80vh]">
                {/* Avatar */}
                <div className=' flex flex-col justify-center items-center gap-3 mb-6'>
                    <div className='relative'>
                        <Image
                            src={previewImage}
                            width={100}
                            height={100}
                            alt="Profile Picture"
                            className='rounded-full object-cover w-24 h-24'
                        />

                        {/* Camera Button */}
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className='absolute flex justify-center items-center p-1.5 w-8 h-8 border-2 border-white bg-[#5CA97E] rounded-full top-16 -right-2 cursor-pointer'
                        >
                            <FiCamera size={22} color='#fff' />
                        </div>
                    </div>
                    <h1 className='text-2xl font-medium'>{user?.name}</h1>

                    {/* Hidden file input */}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />


                </div>

                {/* Tabs */}
                <div className="flex gap-6 mb-6">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`pb-2 border-b-2 cursor-pointer ${activeTab === 'profile'
                            ? 'border-[#5CA97E] text-[#5CA97E] font-semibold'
                            : 'border-transparent text-gray-600'
                            }`}
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => setActiveTab('password')}
                        className={`pb-2 border-b-2 cursor-pointer ${activeTab === 'password'
                            ? 'border-[#5CA97E] text-[#5CA97E] font-semibold'
                            : 'border-transparent text-gray-600'
                            }`}
                    >
                        Change Password
                    </button>
                </div>

                {/* Forms */}
                <div className="w-full max-w-md rounded-lg">
                    <EditProfileTab {...{ activeTab, handleSubmit, onSubmitProfile, register }} />

                    <ChangePassTab {...{activeTab, handleSubmit, onSubmitPassword, register, setShowCurrentPassword, showCurrentPassword, setShowNewPassword, setShowConfirmPassword, showNewPassword,  showConfirmPassword}} />
                </div>
            </div>
        </PageContainer>
    );
};

export default Page;
