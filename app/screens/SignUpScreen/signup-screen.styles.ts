import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

export const styles = StyleSheet.create({
  brand_name: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand_title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.white,
    fontFamily: fonts.bold,
  },
  login_text: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.white,
    fontFamily: fonts.bold,
  },
  search_btn_grd: {
    backgroundColor: '#F5C249',
    height: 54,

    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 12,
  },
  search_btn_cnt: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  txt_inp: {
    width: '80%',
    fontSize: 14,
    fontFamily: fonts.medium,
    color: '#fff',
  },
  txt_input_cnt: {
    paddingLeft: 16,
    borderRadius: 14,
    height: 54,

    backgroundColor: '#21242D',
  },
  login_cnt: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.appBackground,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#16171D',
    backgroundColor: 'transparent',
  },
});
