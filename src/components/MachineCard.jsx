import React, { useState } from 'react';

const MachineCard = ({ machine }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-gym-surface rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-gym-accent transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={machine.imageUrl}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                />
                {/* Type tag removed as requested */}
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{machine.name}</h3>
                    {/* Visual Icon for Type */}
                    <div title={machine.type} className="bg-gray-800 p-1.5 rounded-full border border-gray-600">
                        {machine.type === 'Compound' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gym-accent" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                    {machine.targetMuscles.map((muscle) => (
                        <span key={muscle} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                            {muscle}
                        </span>
                    ))}
                </div>

                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-gym-accent text-sm font-semibold mb-2 hover:underline focus:outline-none"
                >
                    {expanded ? 'Hide Details' : 'Show Instructions & Safety'}
                </button>

                {expanded && (
                    <div className="mt-2 text-sm text-gray-400 animate-fadeIn">
                        <h4 className="font-bold text-white mb-1">How to Use:</h4>
                        <ol className="list-decimal pl-5 mb-2 space-y-1">
                            {machine.howToUse.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>

                        <h4 className="font-bold text-red-400 mb-1">Safety Tips:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {machine.safetyTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MachineCard;
