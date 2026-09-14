import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// Highlights the user's current gym streak with a flame icon and a panda.
export default function StreakCard({ days }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconWrap}>
          <Ionicons name="flame" size={30} color={colors.streak} />
        </View>
        <Text style={styles.value}>{days} days</Text>
        <Text style={styles.label}>Current streak</Text>
      </View>
      <View style={styles.pandaWrap}>
        <Image
          source={require('../assets/Panda_1H_transparent.png')}
          style={styles.panda}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 24,
    paddingHorizontal: 22,
    minHeight: 170,
  },
  left: {
    alignItems: 'flex-start',
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 159, 10, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  value: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  pandaWrap: {
    flex: 1,
    alignItems: 'flex-end',
  },
  panda: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});