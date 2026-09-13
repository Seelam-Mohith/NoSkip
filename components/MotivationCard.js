import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../constants/colors';

// Displays a motivational quote to keep the user going.
export default function MotivationCard({ text, author }) {
  return (
    <View style={styles.card}>
      <Ionicons name="sparkles" size={18} color={colors.streak} />
      <Text style={styles.quote}>{`“${text}”`}</Text>
      <Text style={styles.author}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  quote: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 12,
  },
  author: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 8,
  },
});