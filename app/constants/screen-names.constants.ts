export type ScreenTypes = {
  HOME: string;
  ONBOARDING: string;
  LOGIN: string;
  SIGNUP: string;
};
export const ScreenNames: ScreenTypes = {
  HOME: 'Home',
  ONBOARDING: 'OnBoarding',
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
};

export const screenOption: any = {
  //animationEnabled: false,
  //animation: 'slide_from_right',
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  contentStyle: {
    backgroundColor: '#fff',
  },
};
