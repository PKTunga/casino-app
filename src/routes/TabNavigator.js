import React from 'react';
import { TouchableOpacity, View, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PopularTab, BestTab, HomeTab, ProfileTab, HistoryTab } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { CustomSidebarMenu, ColorPicker } from '../components';
import { useSelector } from "react-redux";
import { Style } from '../styles';
import { SF } from '../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import RouteName from '../routes/RouteName';
import images from '../index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="Home"
        options={{ headerShown: false }}
        component={HomeScsreen} />
    </Drawer.Navigator>
  );
}
function Root() {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  StatusBar.setBackgroundColor(colorrdata);
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Home" component={HomeScsreen} initialRouteName="HomeTab"
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;


function PopularTbScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="PopularTab">
      <Stack.Screen
        name="PopularTab"
        component={PopularTab}
        options={{
          title: 'Popular', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#25323f',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function BestTabScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="BestTab">
      <Stack.Screen
        name="BestTab"
        component={BestTab}
        options={{
          title: 'Bets', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: '#25323f',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function HomeTabScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: 'Home', headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: '#25323f',
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function HistoryTabScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="HistoryTab">
      <Stack.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{
          title: 'History', headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: '#25323f'
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),

        }}
      />
    </Stack.Navigator>
  );
}
function ProfileTabStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          title: 'Profile', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#25323f',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE style={Style.setbariconmarginright} name="navicon" color={'white'} size={35} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function HomeScsreen() {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0
        }
      }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#25323f',
        labeled: true,
        labelStyle: {
          position: 'absolute',
          bottom: 8,
          fontSize: SF(12),
          textAlign: 'center',
          paddingBottom: 10,
        },
        tabStyle: {
          height: 63,
          width: '100%',
          backgroundColor: '#25323f',
          paddingTop: 0,
          paddingBottom: 20,
        },
      }}
      appearence={{
        topPadding: 0,
        horizontalPadding: 0,
      }}
    >
      <Tab.Screen
        name={RouteName.POPULAR_TAB}
        component={PopularTbScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <Image source={images.PopularTabIcon} style={Style.Iconset} /> : <Icon name="fire" style={{ color: focused ? '#fff' : '#fff' }} size={27} />}

            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.BEST_TAB_SET}
        component={BestTabScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <Image source={images.BetTabIcon} style={Style.Iconset} /> : <Icon name="hand-okay" style={{ color: focused ? '#fff' : '#fff' }} size={27} />}

            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.HOMES_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <View style={Style.Homeiconcenter}>
              {focused ? <Image source={images.HomeTabIcon} style={Style.Iconset} /> : <Icon name="home" style={{ color: focused ? '#fff' : '#fff' }} size={32} />}

            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.HISTORYS_TAB}
        component={HistoryTabScreenStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <Image source={images.HistoryTabIcon} style={Style.Iconset} /> : <Icon name="history" style={{ color: focused ? '#fff' : '#fff' }} size={27} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileTabStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? <Image source={images.ProfileTabIconw} style={Style.Iconset} /> : <IconM name="user-circle" style={{ color: focused ? '#fff' : '#fff' }} size={25} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
