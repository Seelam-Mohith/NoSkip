import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// Highlights the user's current gym streak with a flame icon.
export default function StreakCard({ days }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrap}>
        <Ionicons name="flame" size={28} color={colors.streak} />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.label}>Current Streak</Text>
        <Text style={styles.value}>{days} days</Text>
      </View>
      <Image source={require('../assets/Panda_1H.png')} style={styles.panda} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 159, 10, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textWrap: {
    flex: 1,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  value: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  panda: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});