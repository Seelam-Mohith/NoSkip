import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import colors from '../constants/colors';

// Root layout: wraps every screen with a dark background and styles.
export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
      <StatusBar style="light" backgroundColor={colors.background} />
    </>
  );
}