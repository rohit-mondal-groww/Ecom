/**
 App can have various configurations for the default landing screen; whether through an API call or some in memory cache.
 The utility of this hook should be to carry out these functions
*/
export const useInitialRoute = () => {
  return {
    screenName: 'HomeScreen',
  };
};
