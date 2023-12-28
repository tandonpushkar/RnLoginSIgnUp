import {colors, fonts} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 20,
    paddingHorizontal: 10,
  },
});
