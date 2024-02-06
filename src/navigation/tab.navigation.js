import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import Home from "../screens/home";
import {Movie} from "../screens/movie";
import Ionicons from "react-native-vector-icons/Ionicons";

const {Navigator, Screen} = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({route}) => ({
          tabBarIcon: (props) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = props.focused ? "home" : "home-outline";
                break;
              case "Details":
                iconName = props.focused ? "settings" : "settings-outline";
                break;
              default:
                iconName = "home-outline";
                break;
            }
            return <Ionicons {...props} name={iconName}/>;
          },
          tabBarActiveTintColor: "crimson",
        })}
      >
        <Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Screen
          name="movie"
          component={Movie}
          options={{headerShown: false, tabBarBadge: 4}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
