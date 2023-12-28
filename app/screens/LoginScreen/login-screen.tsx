import React, {memo, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import {
  AppHeader,
  Container,
  CustomText,
  CustomTouchableOpacity,
} from '@components';
import {colors} from '@theme';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './login-screen.styles';
import {Images} from '@assets';
import {ScreenNames} from '@constants';
import {IsEmpty, deviceHeight} from '@utils';
import {selectLoginSlice, setLoginData} from '@services';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
interface LoginScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const LoginScreen: any = memo((props: LoginScreenProps) => {
  const dispatch = useDispatch<any>();
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = email?.length < 5 || password?.length < 5;
  const [loading, setLoading] = useState(false);
  const {signUpData} = useSelector(selectLoginSlice);

  const validateEmail = (email: string) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // Password should be at least 8 characters long
    return password.length >= 8;
  };

  const onPressLoginButton = async () => {
    try {
      setLoading(true);

      // Validate email and password format
      if (!validateEmail(email)) {
        throw new Error('Invalid email format');
      }

      if (!validatePassword(password)) {
        throw new Error('Password must be at least 8 characters long');
      }

      if (IsEmpty(signUpData?.hasOwnProperty(email))) {
        throw new Error('User not found! Please sign up or check your email');
      } else {
        console.log(signUpData);

        if (
          signUpData[email]?.email === email &&
          signUpData[email]?.password === password
        ) {
          dispatch(setLoginData(signUpData[email]));
          navigation.replace(ScreenNames.HOME);
        } else {
          throw new Error(
            'Invalid login credentials. Please check your email and password',
          );
        }
      }
    } catch (error: any) {
      //console.error('Login Error:', error.message);

      // Display an error message to the user using ToastAndroid
      ToastAndroid.show(`Error: ${error.message}`, ToastAndroid.SHORT);

      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <AppHeader title="Log in" />
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View
          style={{
            height: deviceHeight - 50,
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                marginTop: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{width: 250, height: 250}} source={Images.login} />
            </View>

            <View style={{rowGap: 18}}>
              <View style={{marginHorizontal: 16}}>
                <CustomText
                  style={{marginVertical: 8, fontSize: 16, color: '#A7AEBF'}}>
                  Email Address
                </CustomText>
                <View style={styles.txt_input_cnt}>
                  <TextInput
                    selectionColor={colors.white}
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                    placeholderTextColor={'#494D58'}
                    style={styles.txt_inp}
                    placeholder="Enter your email address"
                  />
                </View>
              </View>

              <View style={{marginHorizontal: 16}}>
                <CustomText
                  style={{marginVertical: 8, fontSize: 16, color: '#A7AEBF'}}>
                  Password
                </CustomText>
                <View style={styles.txt_input_cnt}>
                  <TextInput
                    selectionColor={colors.white}
                    value={password}
                    onChangeText={txt => setPassword(txt)}
                    placeholderTextColor={'#494D58'}
                    style={styles.txt_inp}
                    placeholder="Enter your password"
                  />
                </View>
              </View>
            </View>

            <CustomTouchableOpacity
              disabled={isDisabled}
              onPress={onPressLoginButton}
              style={styles.search_btn_cnt}>
              <View
                style={[
                  styles.search_btn_grd,
                  {opacity: isDisabled ? 0.7 : 1},
                ]}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={colors.white} />
                ) : (
                  <CustomText style={styles.buttonText}>Log in</CustomText>
                )}
              </View>
            </CustomTouchableOpacity>
          </View>

          <View
            style={{
              alignSelf: 'center',
              paddingBottom: 24,
            }}>
            <CustomText style={{fontSize: 16, color: '#494D58'}}>
              New to Threely?{' '}
              <CustomText
                onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
                style={{color: '#F5C249', fontSize: 16}}>
                Create an account
              </CustomText>
            </CustomText>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
});
