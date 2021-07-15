import BrowseScreen from "./screens/BrowseScreen";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type TopTabParamList = {
  Favourites: undefined;
  Browse: undefined;
};

export type FavouritesParamList = {
  FavouritesScreen: undefined;
};

export type BrowseParamList = {
  BrowseScreen: undefined;
};
