import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import { Input } from '../components'
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Style } from '../styles';
import { Strings, SH, SW, SF, Fonts,Colors } from '../utils';

const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';
import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen, 
 SplashScreen, RegistrationSuccessful,
   Swiperscreen,  DrawerEsport, DrawerSport, DrawerBasketBall,DrawerCountryVsMatch,
} from '../screens';


const RootNavigator = props => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  const [Search, onChangeText] = React.useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />

        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />

        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />

        <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />

        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />

        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />

        <Stack.Screen name={RouteName.EsportsScreen} component={DrawerEsport} />

        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />  
         
        <Stack.Screen name={RouteName.SPORTS_SCREEN} component={DrawerSport} /> 
        <Stack.Screen name={RouteName.BASKETBALLSCREEN} component={DrawerBasketBall} /> 

        <Stack.Screen name={RouteName.COUNTRY_MATCH_SCREEN} component={DrawerCountryVsMatch} />

   


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;