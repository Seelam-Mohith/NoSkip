import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// Single row in the friend activity feed placeholder.
export default function FriendActivityCard({ name, streakDays, lastCheckIn }) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>Checked in {lastCheckIn}</Text>
      </View>
      <View style={styles.streak}>
        <Ionicons name="flame" size={14} color={colors.streak} />
        <Text style={styles.streakText}>{streakDays}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 69, 58, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  meta: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 159, 10, 0.12)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  streakText: {
    color: colors.streak,
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 4,
  },
});