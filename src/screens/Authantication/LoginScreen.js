import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Pressable, ImageBackground, } from 'react-native';
import { Button, Input } from '../../components';
import { Strings, Colors } from '../../utils';
import RouteName from '../../routes/RouteName';
import { Style, Login } from '../../styles';
import { useTogglePasswordVisibility } from '../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import images from '../../index';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [textInputpassword, setTextInputPassword] = useState('');
    const [Error1, setError1] = useState(0);
    const [Error2, setError2] = useState(0);

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const checkTextInput = () => {
        if (!mobileNumber.trim()) {
            setError1(1)
            return;
        }
        if (!textInputpassword.trim()) {
            setError2(1)
            return;
        }
        return (
            navigation.navigate(RouteName.OTP_VERYFY_SCREEN)
        )
    };
    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
            colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
            {/* <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['#414141', '#000000']} ></LinearGradient> */}
            <View style={[Style.minstyleviewphotograpgy]}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Style.container}>
                        <View style={Style.minviewallcontent}>
                            <View style={Style.setimagviewlogin}>
                                <Image style={Style.imagesetus} resizeMode='cover' source={images.logo} />
                            </View>
                            <Text style={Login.setpatintlogin}>Login</Text>
                            <View style={Login.setbottomspasce}>
                                <Input
                                    placeholder={Strings.login.mobile_number_hint}
                                    onChangeText={(value) => { setError1(0); setMobileNumber(value); }}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={'gray'}
                                    inputStyle={Style.LoginTextinput}
                                />
                            </View>
                            {Error1 === 1 ?
                                <Text style={Login.pleseentername}>* Please Enter Mobile Number</Text>
                                : null
                            }
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    onPress={handlePasswordVisibility}
                                    placeholder={Strings.login.password}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(value) => { setError2(0); setTextInputPassword(value); }}
                                />
                                <Pressable onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
                                </Pressable>
                            </View>
                            {Error2 === 1 ?
                                <Text style={Login.pleseentername}>* Please Enter the password</Text>
                                : null
                            }
                            <View style={Login.viewtextStyle}>
                                <Text style={Login.textStyle}>{Strings.login.dont_have_any_account} <Text style={[Login.registerTextStyle]} onPress={() => OnRegisterPress()}>{Strings.login.register}</Text></Text>
                            </View>
                            <View style={Login.buttonviewsettopspace}>
                                <Button
                                    title={Strings.login.login}
                                    onPress={checkTextInput}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}
export default LoginScreen;
