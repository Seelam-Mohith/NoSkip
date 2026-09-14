import { Animated, Image, StyleSheet, View } from 'react-native';
import { useEffect, useRef } from 'react';

import colors from '../constants/colors';

// Two soft red spotlights that slowly breathe, drift and swell.
export default function AnimatedBackground() {
  const drift1 = useRef(new Animated.Value(0)).current;
  const drift2 = useRef(new Animated.Value(0)).current;
  const pulse1 = useRef(new Animated.Value(0)).current;
  const pulse2 = useRef(new Animated.Value(0)).current;
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const ease = (val, to, dur) =>
      Animated.timing(val, { toValue: to, duration: dur, useNativeDriver: true });

    // Spotlight 1 — upper right area
    Animated.loop(
      Animated.parallel([
        Animated.sequence([ease(drift1, 1, 20000), ease(drift1, -1, 20000)]),
        Animated.sequence([ease(pulse1, 1, 16000), ease(pulse1, 0, 16000)]),
        Animated.sequence([ease(scale1, 1.2, 22000), ease(scale1, 0.9, 22000)]),
      ]),
    ).start();

    // Spotlight 2 — lower left area
    Animated.loop(
      Animated.parallel([
        Animated.sequence([ease(drift2, -1, 26000), ease(drift2, 1, 26000)]),
        Animated.sequence([ease(pulse2, 1, 19000), ease(pulse2, 0, 19000)]),
        Animated.sequence([ease(scale2, 0.85, 24000), ease(scale2, 1.15, 24000)]),
      ]),
    ).start();
  }, []);

  const tx1 = drift1.interpolate({ inputRange: [-1, 1], outputRange: [-70, 70] });
  const ty1 = drift1.interpolate({ inputRange: [-1, 1], outputRange: [30, -50] });
  const op1 = pulse1.interpolate({ inputRange: [0, 1], outputRange: [0.10, 0.20] });

  const tx2 = drift2.interpolate({ inputRange: [-1, 1], outputRange: [60, -60] });
  const ty2 = drift2.interpolate({ inputRange: [-1, 1], outputRange: [-40, 40] });
  const op2 = pulse2.interpolate({ inputRange: [0, 1], outputRange: [0.09, 0.18] });

  const spot = require('../assets/spot.png');

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Animated.Image
        pointerEvents="none"
        source={spot}
        style={{
          position: 'absolute',
          top: -160,
          right: -180,
          width: 520,
          height: 520,
          tintColor: colors.primary,
          opacity: op1,
          transform: [{ translateX: tx1 }, { translateY: ty1 }, { scale: scale1 }],
        }}
      />
      <Animated.Image
        pointerEvents="none"
        source={spot}
        style={{
          position: 'absolute',
          bottom: -160,
          left: -180,
          width: 500,
          height: 500,
          tintColor: colors.primary,
          opacity: op2,
          transform: [{ translateX: tx2 }, { translateY: ty2 }, { scale: scale2 }],
        }}
      />
    </View>
  );
}