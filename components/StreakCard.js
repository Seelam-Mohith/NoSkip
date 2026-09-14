import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import colors from '../constants/colors';
import { motivationLines } from '../data/dummy';

// Highlights the user's current gym streak with a flame icon, a panda and a quote bubble.
export default function StreakCard({ days }) {
  const [quote] = useState(() => motivationLines[Math.floor(Math.random() * motivationLines.length)]);

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
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{quote}</Text>
          <View style={styles.bubbleTail} />
        </View>
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
    minHeight: 220,
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
    justifyContent: 'center',
  },
  bubble: {
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  bubbleText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
  },
  bubbleTail: {
    position: 'absolute',
    bottom: -5,
    right: 16,
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.background,
  },
  panda: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
});