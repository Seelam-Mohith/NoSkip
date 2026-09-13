# NoSkip

NoSkip is a social fitness accountability app that keeps you and your friends consistent with the gym. Check in with a photo, track your attendance, build streaks, and compete on leaderboards to stay motivated.

**Note:** This repository currently contains the initial frontend project structure only. Backend, authentication, and database features are not implemented yet and use placeholder data.

## Features

- Gym check-ins with photo verification (coming soon)
- Attendance tracking and streak building
- Friend leaderboards and competitions
- Motivational messages

## Tech Stack

- React Native
- Expo
- Expo Router
- JavaScript
- React Native StyleSheet

## Getting Started

### Prerequisites

- Node.js (16 or later)
- npm
- Expo Go app on your device (or an Android/iOS emulator)

### Installation

```sh
npm install
```

### Run the app

```sh
npm start
```

Scan the QR code with Expo Go, or press `a` for Android and `i` for iOS.

## Project Structure

```
app/          Expo Router routes and screens
components/   Reusable UI components
constants/    Shared constants (colors, theme)
data/         Placeholder data
assets/       App icons and images
```

## Scripts

| Command       | Description                     |
| ------------- | ------------------------------- |
| `npm start`   | Start the Expo development server |
| `npm run android` | Start and open on Android    |
| `npm run ios` | Start and open on iOS            |
| `npm run web` | Start and open in the browser    |