import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// Reusable metric tile: icon, big value and a label.
export default function StatCard({ icon, value, label, sublabel }) {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={18} color={colors.primary} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {sublabel ? <Text style={styles.sublabel}>{sublabel}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  value: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    marginTop: 10,
    letterSpacing: 0.5,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  sublabel: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
});