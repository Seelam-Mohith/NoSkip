import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import PrimaryButton from '../../components/PrimaryButton';
import Screen from '../../components/Screen';
import colors from '../../constants/colors';
import { currentUser, friendActivity } from '../../data/dummy';

// Leaderboard screen. Shows the current user's squad status and friend streaks.
export default function LeaderboardScreen() {
  const notInSquad = currentUser.squad === null;

  const ranked = [...friendActivity].sort((a, b) => b.streakDays - a.streakDays);

  return (
    <Screen contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Leaderboard</Text>

      {notInSquad ? (
        <View style={styles.squadCard}>
          <View style={styles.squadTextWrap}>
            <Text style={styles.squadTitle}>Compete with your squad</Text>
            <Text style={styles.squadSubtitle}>
              Squads climb the board together. Join one to challenge your friends.
            </Text>
          </View>
          <PrimaryButton
            title="Join Squad"
            icon="people-outline"
            onPress={() => {}}
            style={styles.squadButton}
          />
        </View>
      ) : null}

      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Friend Streaks</Text>
      </View>

      {ranked.map((friend, index) => (
        <View key={friend.id} style={styles.row}>
          <View style={styles.rankWrap}>
            <Text style={[styles.rank, index === 0 ? styles.rankFirst : null]}>
              {index + 1}
            </Text>
            {index === 0 && <Ionicons name="trophy" size={14} color={colors.streak} />}
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{friend.name.charAt(0)}</Text>
          </View>
          <View style={styles.nameWrap}>
            <Text style={styles.name}>{friend.name}</Text>
            <Text style={styles.checkIn}>Last check-in {friend.lastCheckIn}</Text>
          </View>
          <View style={styles.streak}>
            <Ionicons name="flame" size={14} color={colors.streak} />
            <Text style={styles.streakText}>{friend.streakDays}</Text>
          </View>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 68,
    paddingBottom: 32,
  },
  heading: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.3,
    marginBottom: 20,
  },
  squadCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
  },
  squadTextWrap: {
    marginBottom: 16,
  },
  squadTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },
  squadSubtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 19,
  },
  squadButton: {
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  listHeaderText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  rankWrap: {
    width: 28,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rank: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  rankFirst: {
    color: colors.streak,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  nameWrap: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  checkIn: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    color: colors.streak,
    fontSize: 15,
    fontWeight: '800',
    marginLeft: 4,
  },
});