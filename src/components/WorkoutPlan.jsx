import React from 'react';
import { useUser } from '../context/UserContext';
import { machines } from '../data/machines';
import MachineCard from './MachineCard';

const WorkoutPlan = () => {
    const { workout, userProfile, resetProfile } = useUser();

    if (!workout) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Summary */}
            <div className="bg-gym-surface border border-gym-accent rounded-xl p-6 mb-8 shadow-2xl">
                <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Hello, Athlete!</h2>
                        <p className="text-gray-400">Here is your personalized <span className="text-gym-accent font-bold">{workout.summary.goal}</span> plan.</p>
                    </div>
                    <button
                        onClick={resetProfile}
                        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition"
                    >
                        Reset Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Intensity</p>
                        <p className="text-xl font-bold text-white">{workout.summary.intensity}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Est. Duration</p>
                        <p className="text-xl font-bold text-white">{workout.summary.estimatedDuration}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Total Exercises</p>
                        <p className="text-xl font-bold text-white">{workout.exercises.length}</p>
                    </div>
                </div>
            </div>

            {/* Exercises List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workout.exercises.map((exercise, index) => {
                    const machineData = machines.find(m => m.id === exercise.machineId);
                    if (!machineData) return null;

                    return (
                        <div key={index} className="flex flex-col h-full">
                            {/* Prescription Card */}
                            <div className="bg-gray-800 rounded-t-lg p-4 border-b border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="bg-gym-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                                        Exercise {index + 1}
                                    </span>
                                    <span className="text-gray-400 text-sm">{exercise.rest} Rest</span>
                                </div>

                                <div className="flex justify-around items-center text-center my-2">
                                    <div>
                                        <span className="block text-2xl font-bold text-white">{exercise.sets}</span>
                                        <span className="text-xs text-gray-500">SETS</span>
                                    </div>
                                    <div className="text-gray-600">X</div>
                                    <div>
                                        <span className="block text-2xl font-bold text-white">{exercise.reps}</span>
                                        <span className="text-xs text-gray-500">REPS</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-300 italic mb-2">"{exercise.notes}"</p>

                                {exercise.safetyWarning && (
                                    <div className="bg-red-900/30 border border-red-500/50 p-2 rounded text-xs text-red-200 mt-2">
                                        ⚠️ {exercise.safetyWarning}
                                    </div>
                                )}
                            </div>

                            {/* Machine Details (Reusing Component) */}
                            <div className="flex-grow">
                                <MachineCard machine={machineData} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkoutPlan;
