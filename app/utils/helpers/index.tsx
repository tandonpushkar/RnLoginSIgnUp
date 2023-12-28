import {Dimensions, PixelRatio, Platform} from 'react-native';
import {filter, forOwn, orderBy} from 'lodash';

export const validateEmail = (email: string) => {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => {
  // Password should be at least 8 characters long, with uppercase letters and numbers
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

export const removeClippedSubviews = Platform.OS === 'ios' ? false : true;
export const KeyExtractor: any = (item: any, index: number) =>
  'key' + index?.toString();
export const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const {width, height} = Dimensions.get('window');

export {width, height};

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const pixelRatio = PixelRatio.getFontScale();
export const deviceWidth = Dimensions.get('screen').width;
export const deviceHeight = Dimensions.get('window').height;

export const ifNotValid = (value: any) => value == undefined || value == null;

export const ifValid = (value: any) => value != undefined && value != null;

export const ifValidNLenZ = (value: any) =>
  value != undefined && value != null && value.length === 0;

export const ifGreaterArray = (value: any) =>
  value != undefined && value != null && value.length > 0;

export const ifEmpty = (value: any) =>
  value != undefined && value != null && value == '';

export const ifNotEmpty = (value: any) =>
  value != undefined && value != null && value != '';

export const ifNValidObj = (value: any) =>
  value == undefined || value == null ? {} : value;

export const IsEmpty = (value: any) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
