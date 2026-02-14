import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const AdminDashboard = ({ onExit }) => {
    const { addMachine, machines } = useUser();
    const [newMachine, setNewMachine] = useState({
        name: '',
        targetMuscles: '',
        type: 'Compound',
        howToUse: '',
        safetyTips: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMachine(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newMachine.name) return;

        const formattedMachine = {
            id: newMachine.name.toLowerCase().replace(/\s+/g, '-'),
            name: newMachine.name,
            targetMuscles: newMachine.targetMuscles.split(',').map(s => s.trim()),
            type: newMachine.type,
            howToUse: newMachine.howToUse.split('\n').filter(s => s.trim()),
            safetyTips: newMachine.safetyTips.split('\n').filter(s => s.trim()),
            imageUrl: newMachine.imageUrl || 'https://placehold.co/600x400/1e1e1e/e50914?text=Gym+Machine'
        };

        addMachine(formattedMachine);
        alert('Machine Added Successfully!');
        setNewMachine({
            name: '',
            targetMuscles: '',
            type: 'Compound',
            howToUse: '',
            safetyTips: '',
            imageUrl: ''
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">Admin Dashboard</h2>
                <button onClick={onExit} className="text-gray-400 hover:text-white">Exit Admin</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add Machine Form */}
                <div className="bg-gym-surface p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4">Add New Machine</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Machine Name</label>
                            <input type="text" name="name" value={newMachine.name} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600" required />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Image URL</label>
                            <input type="text" name="imageUrl" value={newMachine.imageUrl} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600" placeholder="https://..." />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Target Muscles (comma separated)</label>
                            <input type="text" name="targetMuscles" value={newMachine.targetMuscles} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600" placeholder="Chest, Triceps" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Type</label>
                            <select name="type" value={newMachine.type} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600">
                                <option value="Compound">Compound</option>
                                <option value="Isolation">Isolation</option>
                                <option value="Cardio">Cardio</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">How to Use (New line per step)</label>
                            <textarea name="howToUse" value={newMachine.howToUse} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600 h-24" placeholder="Step 1..."></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm mb-1">Safety Tips (New line per tip)</label>
                            <textarea name="safetyTips" value={newMachine.safetyTips} onChange={handleChange} className="w-full bg-gray-800 text-white rounded p-2 border border-gray-600 h-24" placeholder="Tip 1..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gym-accent hover:bg-red-700 text-white font-bold py-2 rounded transition">Add Machine</button>
                    </form>
                </div>

                {/* Existing Machines List */}
                <div className="space-y-8">
                    <div className="bg-gym-surface p-6 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-4">Existing Machines ({machines.length})</h3>
                        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                            {machines.map(m => (
                                <div key={m.id} className="bg-gray-800 p-3 rounded flex items-center justify-between">
                                    <span className="text-white font-semibold">{m.name}</span>
                                    <span className="text-xs text-gray-500">{m.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Member Management "Host People" */}
                    <div className="bg-gym-surface p-6 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-4">Member Management</h3>
                        <div className="space-y-3">
                            {/* Mock Members */}
                            {['Kiran Yadav', 'John Doe', 'Sarah Connor', 'Mike Tyson'].map((member, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-gray-800 p-3 rounded border-l-4 border-gym-accent">
                                    <div>
                                        <p className="text-white font-bold">{member}</p>
                                        <p className="text-xs text-gray-400">Active since Jan 2026</p>
                                    </div>
                                    <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full">Active</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
