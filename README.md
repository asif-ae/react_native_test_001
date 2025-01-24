# React Native App

This is a static **React Native** project developed based on the provided Figma design. It includes the following main sections:

- **Header Component**: Shared between Game and News pages.
- **Footer Navigation**: Allows navigation across pages.
- **Game Page**: Displays static game cards and player information.
- **Chat Page**: A static chat interface linked to a game card.
- **News Page**: Displays static news items and system messages.

The project was bootstrapped using [@react-native-community/cli](https://github.com/react-native-community/cli).

---

## 📥 Getting Started

> **Note**: Ensure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

### Step 1: Start the Metro Server

To start the Metro Bundler, run the following command from the project root:

```bash
# using npm
npm start
```

### Step 2: Start Your Application

With Metro running in a separate terminal, open a new terminal and run the following command:

#### For Android:
```bash
npm run android
```

If everything is set up correctly, the app should start on your Android Emulator.

---

## 🚀 Building the APK

To build the release APK for Android, follow these steps:

1. **Run the Build Script**: A custom script is provided in `package.json` for building the APK. Run the following command:

   ```bash
   npm run build
   ```

   This script navigates to the `android` directory, runs the Gradle `assembleRelease` task, and then navigates back to the root directory.

2. **Locate the APK**: After the build is complete, the APK file will be generated at:
   ```
   android/app/build/outputs/apk/release/app-universal-release.apk
   ```

3. **Install the APK**:
   - Transfer the APK to your Android device.
   - Install the APK file by opening it on your device.

4. **Test the App**:
   - Launch the installed app and verify all the features.

---

## 🛠 Features

### 1. Header Component
- Shared across Game and News pages.
- Excluded from the Chat page.

### 2. Footer Navigation
- Provides navigation between Game, News, Chat, and Rank pages.
- Active state styling is applied to the selected page.
- Excluded from the Chat page.

### 3. Game Page
- Displays static game cards with:
  - Date, time, and weather.
  - Player details and roles.
  - "Chat" button to navigate to the Chat page.

### 4. Chat Page
- Static chat interface.
- Users can type and add messages to the chat history.
- Displays timestamps for messages.

### 5. News Page
- Static news items with:
  - Images, titles, and comment counts.
- Static system messages.

---

## Troubleshooting

If you encounter issues running the app, refer to the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

---

### 🎉 Congratulations!

You have now set up and run a fully static React Native application!
