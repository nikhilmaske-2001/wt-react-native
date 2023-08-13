/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { CategoryScreen } from './src/screens/CategoryScreen';
import { ChartScreen } from './src/screens/ChartScreen';
import { ToolsScreen } from './src/screens/ToolsScreen';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Tools" component={ToolsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
