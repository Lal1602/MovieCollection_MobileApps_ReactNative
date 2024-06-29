import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import DetailMoveScreen from "../screen/DetailMoveScreen";
import MostViewedScreen from "../screen/MostViewedScreen";
import RecommendedScreen from "../screen/RecommendedScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "Movie Collection",
                        headerStyle: {
                            backgroundColor: "#65c3ba"
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontSize: 24
                        },
                        headerTitleAlign: "center",
                        headerLeft: null
                    }}
                />
                <Stack.Screen
                    name="DetailMovie"
                    component={DetailMoveScreen}

                    options={{
                        title: "Detail",
                        headerStyle: {
                            backgroundColor: "#65c3ba"
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontSize: 24
                        },
                        headerTitleAlign:'left',
                        headerLeft: null
                    }}
                />
                <Stack.Screen
                    name="MostViewedScreen"
                    component={MostViewedScreen}

                    options={{
                        title: "Most Viewed",
                        headerStyle: {
                            backgroundColor: "#65c3ba"
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontSize: 24
                        },
                        headerTitleAlign:'left',
                        headerLeft: null
                    }}
                />

                <Stack.Screen
                    name="Recommended"
                    component={RecommendedScreen}

                    options={{
                        title: "Recommended",
                        headerStyle: {
                            backgroundColor: "#65c3ba"
                        },
                        headerTitleStyle: {
                            color: "white",
                            fontSize: 24
                        },
                        headerTitleAlign:'left',
                        headerLeft: null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;