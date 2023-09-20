import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BasketBallScreen } from '../../screens';
import { CustomSidebarMenu, HeaderSidemunuicon } from '../../components';
import { useSelector } from "react-redux";
import { Colors } from '../../utils';
import { Style } from '../../styles';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="BasketBallScreen">
      <Stack.Screen
        name="BasketBallScreen"
        component={BasketBallScreen}
        options={{
          title: 'Basketball', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.White_text_color,
          },
          headerStyle: {
            backgroundColor: '#25323f',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => <HeaderSidemunuicon marginrighthome={Style.iconcolorwhite} navigationProps={navigation} />,         
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{ drawerLabel: 'First page Option', headerShown: false, }}
        component={firstScreenStack} />
    </Drawer.Navigator>
  );
}
export default App;
