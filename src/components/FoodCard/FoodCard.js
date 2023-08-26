import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './FoodCard.style';

const FoodCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {meal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
