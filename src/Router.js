import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FoodCategoryList from './pages/FoodCategoryList';
import Meals from './pages/Meals';
import FoodDetail from './pages/FoodDetail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodCategoryPage"
          component={FoodCategoryList}
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTintColor: '#FFA50E',
          }}
        />

        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFA50E',
          }}
        />

        <Stack.Screen
          name="Detail"
          component={FoodDetail}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFA50E',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
