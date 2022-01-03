import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from '../Components';
import InputJokeComponent from '../Components/SearchJoke/SearchingJoke';
import JokeListComponent from '../Components/NeverEndingJokeComponent/JokeListComponent';
const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home"
                    component={HomeComponent} />
                <Stack.Screen
                    name="Searching"
                    component={InputJokeComponent} />
                <Stack.Screen
                    name="NeverEndingJokes"
                    component={JokeListComponent} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppContainer;