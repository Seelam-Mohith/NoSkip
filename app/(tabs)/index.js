import { StyleSheet, Text, View } from 'react-native';

import FriendActivityCard from '../../components/FriendActivityCard';
import MotivationCard from '../../components/MotivationCard';
import PrimaryButton from '../../components/PrimaryButton';
import Screen from '../../components/Screen';
import StatCard from '../../components/StatCard';
import StreakCard from '../../components/StreakCard';
import colors from '../../constants/colors';
import { currentUser, friendActivity, motivationQuote } from '../../data/dummy';

// Home screen: welcome message, streak, key stats and a quick Check In action.
export default function HomeScreen() {
  return (
    <Screen>
      <Text style={styles.brand}>NoSkip</Text>

      <Text style={styles.title}>Ready to stay consistent?</Text>

      <StreakCard days={currentUser.streakDays} />

      <View style={styles.statsRow}>
        <StatCard icon="calendar" value={currentUser.totalGymDays} label="Total Gym Days" />
        <StatCard
          icon="checkmark-circle"
          value={`${currentUser.weeklyGoal.done}/${currentUser.weeklyGoal.target}`}
          label="This Week"
        />
      </View>

      <PrimaryButton title="Check In" icon="location" onPress={() => {}} />

      <MotivationCard text={motivationQuote.text} author={motivationQuote.author} />

      <Text style={styles.sectionTitle}>Friend Activity</Text>
      {friendActivity.map((friend) => (
        <FriendActivityCard
          key={friend.id}
          name={friend.name}
          streakDays={friend.streakDays}
          lastCheckIn={friend.lastCheckIn}
        />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 8,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    marginTop: 12,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 28,
    marginBottom: 12,
  },
});