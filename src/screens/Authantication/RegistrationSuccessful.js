import React, { useEffect, useRef } from "react";
import { View, ScrollView, KeyboardAvoidingView, Animated, Easing } from "react-native";
import { RegisterStyleset, Style } from '../../styles';
import { Button } from '../../components';
import RouteName from '../../routes/RouteName';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import Lottie from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

const RegistrationSuccessful = ({ navigation }) => {
  const animationProgress = useRef(new Animated.Value(0))
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const OnLoginPress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
      colors={[Colors.linerGradientbackTwo, Colors.linerGradientbackTwo]}>
      <View style={[Style.minstyleviewphotograpgy]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <View style={Style.container}>
            <View style={Style.minviewallcontent}>
              <View style={RegisterStyleset.minviewsigninscreen}>
                <Lottie
                  resizeMode="contain"
                  autoPlay={true}
                  source={require('../../utils/Accountcreated.json')}
                  progress={animationProgress.current}
                />
                <View style={RegisterStyleset.accountbutton}>
                  <Button
                    title="Get Started"
                    onPress={() => OnLoginPress()}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>

  );
};
export default RegistrationSuccessful;
