import React, {memo, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  TextInput,
  View,
} from 'react-native';
import {Container, CustomText, CustomTouchableOpacity} from '@components';
import {colors} from '@theme';

import {styles} from './home-screen.styles';
import {Images} from '@assets';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoginSlice, setLoginData} from '@services';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '@constants';

interface HomeScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const HomeScreen: any = memo((props: HomeScreenProps) => {
  const {loginData} = useSelector(selectLoginSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onPressLogOut = () => {
    dispatch(setLoginData({}));
    navigation?.replace(ScreenNames.ONBOARDING);
  };

  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <View
        style={{
          height: '8%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.search_cnt}>
          <CustomText style={styles.title}>
            Hi {loginData?.name ? loginData?.name : 'User'}!
          </CustomText>
        </View>
        <CustomTouchableOpacity
          onPress={onPressLogOut}
          style={styles.search_cnt}>
          <CustomText
            style={{fontSize: 20, color: colors.white, fontWeight: '700'}}>
            Logout
          </CustomText>
        </CustomTouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <Image
          resizeMode="stretch"
          style={{width: '100%', height: '100%'}}
          source={Images.homeTemplate}
        />
      </View>
    </Container>
  );
});
