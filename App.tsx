import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./src/Routes";

import DecayBasic from "./src/Decay";
import SpringBasic from "./src/Spring";
import TimingBasic from "./src/Timing";
import Examples from "./src/Examples";

const Stack = createStackNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: "React Native - Animation Examples",
          }}
        />
        <Stack.Screen
          name="Spring"
          component={SpringBasic}
          options={{
            title: "Spring Basic",
          }}
        />
        <Stack.Screen
          name="Decay"
          component={DecayBasic}
          options={{
            title: "Decay Basic",
          }}
        />
        <Stack.Screen
          name="Timing"
          component={TimingBasic}
          options={{
            title: "Timing Basic",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
