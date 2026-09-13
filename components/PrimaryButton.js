import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';

// Prominent action button used for primary calls to action (e.g. Check In).
export default function PrimaryButton({ title, icon, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    >
      {icon ? <Ionicons name={icon} size={20} color={colors.text} style={styles.icon} /> : null}
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  pressed: {
    backgroundColor: colors.primaryPressed,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});