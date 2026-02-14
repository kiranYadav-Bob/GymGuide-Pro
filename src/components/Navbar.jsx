import React from 'react';
import { useUser } from '../context/UserContext';

const Navbar = ({ onAdminClick }) => {
    const { userProfile } = useUser();

    const changeTheme = (color) => {
        document.documentElement.style.setProperty('--gym-accent', color);
    };

    return (
        <nav className="bg-gym-surface border-b border-gray-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-black text-white tracking-widest uppercase">
                        GymGuide<span className="text-gym-accent">Pro</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    {/* Theme Picker */}
                    <div className="flex gap-2">
                        <button onClick={() => changeTheme('#e50914')} className="w-4 h-4 rounded-full bg-[#e50914] border border-white hover:scale-110 transition"></button>
                        <button onClick={() => changeTheme('#3b82f6')} className="w-4 h-4 rounded-full bg-[#3b82f6] border border-white hover:scale-110 transition"></button>
                        <button onClick={() => changeTheme('#22c55e')} className="w-4 h-4 rounded-full bg-[#22c55e] border border-white hover:scale-110 transition"></button>
                        <button onClick={() => changeTheme('#a855f7')} className="w-4 h-4 rounded-full bg-[#a855f7] border border-white hover:scale-110 transition"></button>
                    </div>

                    <button
                        onClick={onAdminClick}
                        className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-wider"
                    >
                        Admin Panel
                    </button>

                    {userProfile && (
                        <div className="flex items-center gap-2">
                            <span className="text-gray-300 text-sm hidden sm:block">Hi, <span className="font-bold text-white">{userProfile.name}</span></span>
                            <div className="h-8 w-8 rounded-full bg-gym-accent flex items-center justify-center text-white font-bold border border-gray-600">
                                {userProfile.name.charAt(0).toUpperCase()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
