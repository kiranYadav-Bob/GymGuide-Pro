import { createContext, useState, useContext } from 'react';
import { generateWorkout } from '../utils/workoutGenerator';
import { machines as initialMachines } from '../data/machines';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [workout, setWorkout] = useState(null);
    // Lifted machines to state for Admin capabilities
    const [machines, setMachines] = useState(initialMachines);

    const updateUserProfile = (profile) => {
        setUserProfile(profile);
        // Automatically generate workout when profile is set/updated
        const newWorkout = generateWorkout(profile, machines);
        setWorkout(newWorkout);
    };

    const addMachine = (newMachine) => {
        setMachines(prev => [...prev, newMachine]);
    };

    const resetProfile = () => {
        setUserProfile(null);
        setWorkout(null);
    };

    return (
        <UserContext.Provider value={{
            userProfile,
            workout,
            updateUserProfile,
            resetProfile,
            machines,      // Exporting machines from state
            addMachine     // Admin action
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
