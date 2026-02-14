import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const OnboardingForm = () => {
    const { updateUserProfile } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        weight: '',
        height: '',
        experience: 'Beginner',
        goal: 'Muscle Gain (Hypertrophy)'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.age || !formData.weight || !formData.height) return; // Simple validation
        updateUserProfile({
            ...formData,
            age: parseInt(formData.age),
            weight: parseInt(formData.weight),
            height: parseInt(formData.height)
        });
    };

    return (
        <div className="max-w-md mx-auto bg-gym-surface p-8 rounded-xl border border-gray-700 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Your Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                    <label className="block text-gray-400 mb-1 text-sm">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none focus:ring-1 focus:ring-gym-accent"
                        placeholder="e.g. John Doe"
                        required
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block text-gray-400 mb-1 text-sm">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none focus:ring-1 focus:ring-gym-accent"
                        placeholder="e.g. 25"
                        required
                        min="10"
                        max="100"
                    />
                </div>

                {/* Weight & Height */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 mb-1 text-sm">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none"
                            placeholder="e.g. 70"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1 text-sm">Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none"
                            placeholder="e.g. 175"
                            required
                        />
                    </div>
                </div>

                {/* Experience Level */}
                <div>
                    <label className="block text-gray-400 mb-1 text-sm">Experience Level</label>
                    <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none"
                    >
                        <option value="Beginner">Beginner (0-1 years)</option>
                        <option value="Intermediate">Intermediate (1-3 years)</option>
                        <option value="Advanced">Advanced (3+ years)</option>
                    </select>
                </div>

                {/* Goal */}
                <div>
                    <label className="block text-gray-400 mb-1 text-sm">Primary Goal</label>
                    <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full bg-gray-800 text-white rounded p-3 border border-gray-600 focus:border-gym-accent focus:outline-none"
                    >
                        <option value="Muscle Gain (Hypertrophy)">Muscle Gain (Hypertrophy)</option>
                        <option value="Weight Loss (Fat Burn)">Weight Loss (Fat Burn)</option>
                        <option value="Strength Building (Power)">Strength Building (Power)</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gym-accent hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-colors duration-300 mt-6"
                >
                    Generate My Plan
                </button>
            </form>
        </div>
    );
};

export default OnboardingForm;
