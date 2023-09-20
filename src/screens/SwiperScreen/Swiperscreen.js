import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button } from '../../components';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { Swiperdata,Colors } from '../../utils';
import { Lottie } from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const App = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  const RenderItem = ({ item }) => {
    return (
      <LinearGradient
      start={{ x: 0.0, y: 0.0 }} end={{ x: 2.2, y: 0.0 }}
      colors={[Colors.linergradiuntcolor, Colors.linergradiuntcolortwo]}>
      <View style={SwiperStyle.Setbgcolorviewmin}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyle.scrollviewstyle}>
          <View style={SwiperStyle.Animationviewstyle}>
            <View>
              {item.animationtwo}
              {item.animation}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={SwiperStyle.iconbgcolorview} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
          <Lottie Lottiewidthstyle={SwiperStyle.iconbgcolorview} source={require('../LottiefilesAll/RightaerrowSwiper.json')} />
        </TouchableOpacity>
        <Text style={SwiperStyle.titleStyle}>
          {item.title}
        </Text>

        <Text style={SwiperStyle.textstyle}>
          {item.text}
        </Text>
      </View>
    </LinearGradient>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <View style={SwiperStyle.buttonCircle}>
          <Button
            title="Get Started"
            onPress={
              () => navigation.navigate(RouteName.LOGIN_SCREEN)
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <Text style={SwiperStyle.Nexttextstyle}>Next</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
          <Text style={SwiperStyle.Nexttextstyle}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyle.activedotstyle}
        dotStyle={SwiperStyle.dotSwiperStyleet}
      />
    </>
  );
};
export default App;

