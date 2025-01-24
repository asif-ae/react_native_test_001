export type RootStackParamList = {
  // Main Tab Navigator (contains the 4 bottom tabs)
  Tabs: undefined;
  // Individual screens outside the tab bar
  Chat: undefined;
  // Add other stack screens here if needed
};

// Optional: If you need to type the bottom tab navigator's params
export type BottomTabParamList = {
  Register: undefined;
  'Game Board': undefined;
  Rank: undefined;
  News: undefined;
};
