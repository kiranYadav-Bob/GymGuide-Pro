export const machines = [
    {
        id: 'leg-press',
        name: 'Leg Press',
        targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings'],
        type: 'Compound',
        howToUse: [
            'Sit on the machine with your back and head resting comfortably against the padded support.',
            'Place your feet on the footplate about hip-width apart, ensuring your heels are flat.',
            'Push the platform away using your heels and forefeet, extending your legs fully but without locking your knees.',
            'Slowly lower the platform until your knees are bent at a 90-degree angle.',
            'Push back up to the starting position.'
        ],
        safetyTips: [
            'Do not lock your knees at the top of the movement.',
            'Keep your back flat against the pad at all times.',
            'Start with a lighter weight to perfect your form.'
        ],
        imageUrl: 'https://placehold.co/600x400/1e1e1e/e50914?text=Leg+Press'
    },
    {
        id: 'lat-pulldown',
        name: 'Lat Pulldown',
        targetMuscles: ['Latissimus Dorsi', 'Biceps', 'Rear Deltoids'],
        type: 'Compound',
        howToUse: [
            'Adjust the thigh pad so your legs are secured comfortably.',
            'Grasp the bar with a wide overhand grip.',
            'Pull the bar down towards your upper chest while leaning back slightly.',
            'Squeeze your shoulder blades together at the bottom of the movement.',
            'Slowly return the bar to the starting position.'
        ],
        safetyTips: [
            'Avoid using momentum/swinging to pull the weight down.',
            'Keep your elbows pointing down, not back.',
            'Do not pull the bar behind your neck.'
        ],
        imageUrl: 'https://placehold.co/600x400/1e1e1e/e50914?text=Lat+Pulldown'
    },
    {
        id: 'smith-machine-squat',
        name: 'Smith Machine Squat',
        targetMuscles: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
        type: 'Compound',
        howToUse: [
            'Set the bar at chest height.',
            'Duck under the bar and place it across your upper back (traps).',
            'Stand with feet shoulder-width apart and unrack the bar by lifting and rotating it.',
            'Lower your body by bending your knees and hips, keeping your back straight.',
            'Go down until your thighs are parallel to the floor, then push back up.'
        ],
        safetyTips: [
            'Ensure the safety catches are set to an appropriate height.',
            'Keep your feet slightly forward compared to a free weight squat.',
            'Maintain a neutral spine throughout.'
        ],
        imageUrl: 'https://placehold.co/600x400/1e1e1e/e50914?text=Smith+Machine'
    },
    {
        id: 'cable-row',
        name: 'Seated Cable Row',
        targetMuscles: ['Rhomboids', 'Latissimus Dorsi', 'Biceps', 'Traps'],
        type: 'Compound',
        howToUse: [
            'Sit on the bench and place your feet on the pads, knees slightly bent.',
            'Lean forward to grasp the handle, then sit back with arms fully extended and back straight.',
            'Pull the handle towards your lower abdomen, squeezing your shoulder blades together.',
            'Pause briefly, then slowly extend your arms back to the starting position.'
        ],
        safetyTips: [
            'Do not round your back; keep your chest up.',
            'Avoid leaning too far back as you pull.',
            'Control the weight on the return phase.'
        ],
        imageUrl: 'https://placehold.co/600x400/1e1e1e/e50914?text=Cable+Row'
    },
    {
        id: 'chest-press-machine',
        name: 'Chest Press Machine',
        targetMuscles: ['Pectoralis Major', 'Triceps', 'Front Deltoids'],
        type: 'Compound',
        howToUse: [
            'Adjust the seat height so the handles are aligned with your mid-chest.',
            'Sit back with your head and back against the pads.',
            'Grasp the handles and push them forward until your arms are fully extended.',
            'Slowly bring the handles back towards your chest without letting the weights touch the stack.',
            'Repeat.'
        ],
        safetyTips: [
            'Keep your elbows slightly below your shoulders.',
            'Do not arch your back excessively.',
            'Controlled movement is key; avoid punching the weight out.'
        ],
        imageUrl: 'https://placehold.co/600x400/1e1e1e/e50914?text=Chest+Press'
    }
];
