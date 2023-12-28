import React, {memo, useState} from 'react';
import {ActivityIndicator, Image, TextInput, View} from 'react-native';
import {Container, CustomText, CustomTouchableOpacity} from '@components';
import {colors, fonts} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {styles} from './onboarding-screen.styles';
import {Images} from '@assets';
import {ScreenNames} from '@constants';
interface OnBoardingScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const OnBoardingScreen: any = memo((props: OnBoardingScreenProps) => {
  const dispatch = useDispatch<any>();
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = email?.length < 5 || password?.length < 5;
  const [loading, setLoading] = useState(false);

  const onPressLoginButton = async () => {
    setLoading(true);
  };

  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <View style={{height: '100%', justifyContent: 'space-evenly'}}>
        <View>
          <View>
            <Image source={Images.onBoard} />
          </View>

          <View style={{padding: 16}}>
            <CustomText
              style={{fontSize: 36, color: colors.white, fontWeight: '700'}}>
              Fast and Flexible
            </CustomText>
            <CustomText
              style={{fontSize: 36, color: colors.white, fontWeight: '700'}}>
              Threely | Web3
            </CustomText>
          </View>
        </View>

        <View
          style={{
            columnGap: 16,
            flexDirection: 'row',

            paddingHorizontal: 16,
          }}>
          <CustomTouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
            style={{
              flex: 1,
              height: 53,
              borderWidth: 1,
              borderColor: '#F5C249',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText style={{fontSize: 20, color: '#F5C249'}}>
              Sign up
            </CustomText>
          </CustomTouchableOpacity>
          <CustomTouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            style={{
              flex: 1,
              height: 53,
              borderWidth: 1,
              backgroundColor: '#F5C249',
              borderRadius: 12,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText style={{fontSize: 20, fontWeight: '600'}}>
              Log in
            </CustomText>
          </CustomTouchableOpacity>
        </View>
      </View>
    </Container>
  );
});
