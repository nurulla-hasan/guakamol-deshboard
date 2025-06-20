import React from 'react';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';

const ChangePassTab = ({activeTab, handleSubmit, onSubmitPassword, register, setShowCurrentPassword, showCurrentPassword, setShowNewPassword, setShowConfirmPassword, showNewPassword,  showConfirmPassword}) => {
    return (
        <>
            {activeTab === 'password' && (
                <form onSubmit={handleSubmit(onSubmitPassword)} className="space-y-4">
                    <h3 className='text-2xl font-medium text-center'>
                        Change Password
                    </h3>

                    <div className="relative">
                        <label className="block mb-1 font-medium">Current Password</label>
                        <input
                            type={showCurrentPassword ? 'text' : 'password'}
                            {...register('currentPassword')}
                            placeholder='********'
                            className="w-full border border-[#5CA97E] rounded-md p-2 outline-none"
                        />
                        <div
                            className="absolute right-3 top-9 cursor-pointer"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                            {showCurrentPassword ? <PiEyeLight color='#5CA97E' size={25} /> : <PiEyeSlash color='#5CA97E' size={25} />}
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            type={showNewPassword ? 'text' : 'password'}
                            {...register('newPassword')}
                            placeholder='********'
                            className="w-full border border-[#5CA97E] rounded-md p-2 outline-none"
                        />
                        <div
                            className="absolute right-3 top-9 cursor-pointer"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                            {showNewPassword ? <PiEyeLight color='#5CA97E' size={25} /> : <PiEyeSlash color='#5CA97E' size={25} />}
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block mb-1 font-medium">Confirm New Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            {...register('confirmPassword')}
                            placeholder='********'
                            className="w-full border border-[#5CA97E] rounded-md p-2 outline-none"
                        />
                        <div
                            className="absolute right-3 top-9 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <PiEyeLight color='#5CA97E' size={25} /> : <PiEyeSlash color='#5CA97E' size={25} />}
                        </div>
                    </div>

                    <div className='w-full text-center'>
                        <button type="submit" className="mt-4 px-8 bg-[#5CA97E] hover:bg-[#5CA97E] text-white py-2 rounded-md cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default ChangePassTab;