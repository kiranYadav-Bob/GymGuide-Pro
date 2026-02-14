import React from 'react';
import { UserProvider, useUser } from './context/UserContext';
import OnboardingForm from './components/OnboardingForm';
import WorkoutPlan from './components/WorkoutPlan';
import Navbar from './components/Navbar';
import MachineCard from './components/MachineCard';
import AdminDashboard from './components/AdminDashboard';

const MainContent = () => {
  const { userProfile, machines } = useUser(); // Using machines from Context now
  const [view, setView] = React.useState('workout'); // 'workout', 'encyclopedia', 'admin'

  // Admin access handler
  const handleAdminClick = () => setView('admin');

  if (view === 'admin') {
    return (
      <div className="min-h-screen bg-gray-900">
        <AdminDashboard onExit={() => setView('workout')} />
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl text-center mb-8">
          <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight">
            GymGuide <span className="text-gym-accent">Pro</span>
          </h1>
          <p className="text-gray-400 text-lg">Your intelligent personal trainer. Driven by logic, powered by you.</p>
        </div>
        <OnboardingForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar onAdminClick={handleAdminClick} />

      {/* Tab Switcher */}
      <div className="container mx-auto px-4 mt-6 mb-4">
        <div className="flex space-x-4 border-b border-gray-700 pb-2">
          <button
            className={`pb-2 px-4 font-semibold transition ${view === 'workout' ? 'text-gym-accent border-b-2 border-gym-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setView('workout')}
          >
            My Workout Plan
          </button>
          <button
            className={`pb-2 px-4 font-semibold transition ${view === 'encyclopedia' ? 'text-gym-accent border-b-2 border-gym-accent' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setView('encyclopedia')}
          >
            Machine Encyclopedia
          </button>
        </div>
      </div>

      {view === 'workout' ? (
        <WorkoutPlan />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-white mb-6">Equipment Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map(machine => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <MainContent />
    </UserProvider>
  );
}

export default App;
