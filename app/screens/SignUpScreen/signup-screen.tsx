import React, {memo, useRef, useState} from 'react';
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
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Images} from '@assets';
import {ScreenNames} from '@constants';
import {styles} from './signup-screen.styles';
import {IsEmpty, deviceHeight, validateEmail, validatePassword} from '@utils';
import {setSignUpData} from '@services';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
interface SignUpScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const SignUpScreen: any = memo((props: SignUpScreenProps) => {
  const dispatch = useDispatch<any>();
  const navigation: any = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const isDisabled = email?.length < 5 || password?.length < 5;
  const [loading, setLoading] = useState(false);

  const onPressSignUpButton = async () => {
    try {
      setLoading(true);

      // Validate name, email, and password
      if (IsEmpty(name)) {
        throw new Error('Please enter your full name');
      }

      if (!validateEmail(email)) {
        throw new Error('Invalid email address format');
      }

      if (!validatePassword(password)) {
        throw new Error(
          'Password must be at least 8 characters long and include uppercase letters and numbers',
        );
      }

      let loginObj = {
        name,
        email,
        password,
      };
      dispatch(setSignUpData(loginObj));
      // Replace the entire navigation stack with the Home screen
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: ScreenNames.HOME}],
        }),
      );
      ToastAndroid.show(
        'Congratulations! Your account has been successfully created and you are now logged in.',
        ToastAndroid.SHORT,
      );
    } catch (error: any) {
      // Display an error message to the user using ToastAndroid
      ToastAndroid.show(`Error: ${error.message}`, ToastAndroid.SHORT);

      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <AppHeader title="Sign up" />
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View
          style={{
            height: deviceHeight - 50,
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image style={{width: 250, height: 250}} source={Images.signUp} />
            </View>

            <View style={{rowGap: 8}}>
              <View style={{marginHorizontal: 16}}>
                <CustomText
                  style={{marginVertical: 8, fontSize: 16, color: '#A7AEBF'}}>
                  Name
                </CustomText>
                <View style={styles.txt_input_cnt}>
                  <TextInput
                    selectionColor={colors.white}
                    value={name}
                    onChangeText={txt => setName(txt)}
                    placeholderTextColor={'#494D58'}
                    style={styles.txt_inp}
                    placeholder="Enter your full name"
                  />
                </View>
              </View>
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
                <CustomText
                  style={{fontSize: 16, color: '#787A8D', marginTop: 8}}>
                  At least 8 characters with uppercase letters and numbers
                </CustomText>
              </View>
            </View>

            <CustomTouchableOpacity
              disabled={isDisabled}
              onPress={onPressSignUpButton}
              style={[styles.search_btn_cnt, {opacity: isDisabled ? 0.6 : 1}]}>
              <View style={styles.search_btn_grd}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={colors.white} />
                ) : (
                  <CustomText style={styles.buttonText}>Sign up</CustomText>
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
              Already have an account?{' '}
              <CustomText
                onPress={() => navigation.navigate(ScreenNames.LOGIN)}
                style={{color: '#F5C249', fontSize: 16}}>
                Log in!
              </CustomText>
            </CustomText>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
});
