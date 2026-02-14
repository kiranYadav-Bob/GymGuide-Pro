export const generateWorkout = (userProfile, machines) => {
    const { goal, age, experience } = userProfile;
    let workoutPlan = [];

    // Basic filtering or selection logic could be expanded here. 
    // For now, we use all machines but adjust sets/reps/rest based on goal.

    // 1. Determine Parameters based on Goal
    let params = {
        sets: 3,
        reps: '10-12',
        rest: '60s',
        intensity: 'Moderate',
        notes: 'Focus on form and controlled movements.'
    };

    switch (goal) {
        case 'Weight Loss (Fat Burn)':
            params = {
                sets: 4,
                reps: '12-15',
                rest: '30-45s',
                intensity: 'High (Circuit style)',
                notes: 'Keep heart rate up. Move quickly between exercises.'
            };
            break;
        case 'Strength Building (Power)':
            params = {
                sets: 5,
                reps: '1-5',
                rest: '2-3 mins',
                intensity: 'Very High',
                notes: 'Lift heavy. Ensure you have a spotter if needed.'
            };
            break;
        case 'Muscle Gain (Hypertrophy)':
        default:
            params = {
                sets: 3,
                reps: '8-12',
                rest: '60-90s',
                intensity: 'Moderate to High',
                notes: 'Focus on time under tension and muscle contraction.'
            };
            break;
    }

    // 2. Adjust for Experience
    if (experience === 'Beginner') {
        params.sets = Math.max(2, params.sets - 1); // Reduce volume for beginners
        params.notes += ' As a beginner, prioritize learning the movement over heavy weight.';
    }

    // 3. Adjust for Age / Safety
    // If user is 50+, ensure safety tips are prominent and intensity is managed
    const isOlder = age >= 50;
    if (isOlder) {
        params.notes += ' Ensure a thorough warm-up (10-15 mins) before starting. Listen to your joints.';
        if (params.intensity === 'Very High') {
            params.intensity = 'Moderate (Joint Friendly)';
            params.reps = '8-10'; // Avoid 1-5 rep maxes for safety unless experienced
            params.notes += ' Strength focus shifted to higher reps for joint safety.';
        }
    }

    // 4. Build the Plan
    // Map through machines and apply the calculated parameters
    workoutPlan = machines.map(machine => ({
        machineId: machine.id,
        machineName: machine.name,
        sets: params.sets,
        reps: params.reps,
        rest: params.rest,
        notes: params.notes,
        safetyWarning: isOlder ? `Extra Caution: ${machine.safetyTips[0]}` : null
    }));

    return {
        summary: {
            goal: goal,
            intensity: params.intensity,
            estimatedDuration: `${workoutPlan.length * params.sets * (parseInt(params.rest) || 2) / 60 + 10} mins` // Rough estimate
        },
        exercises: workoutPlan
    };
};
