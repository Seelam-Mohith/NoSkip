// Central location for placeholder data.
// Replace these with real backend data in a future step.

export const currentUser = {
  name: 'Alex',
  streakDays: 12,
  totalGymDays: 87,
  weeklyGoal: {
    done: 4,
    target: 5,
  },
  // null means the user is not in a squad yet.
  squad: null,
};

export const motivationQuote = {
  text: 'The only bad workout is the one that didn’t happen.',
  author: 'NoSkip',
};

export const friendActivity = [
  { id: 1, name: 'Jordan', streakDays: 21, lastCheckIn: '2h ago' },
  { id: 2, name: 'Taylor', streakDays: 8, lastCheckIn: 'Yesterday' },
  { id: 3, name: 'Sam', streakDays: 3, lastCheckIn: '3d ago' },
];