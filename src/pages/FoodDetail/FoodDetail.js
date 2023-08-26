import React, {useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import style from './FoodDetail.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const FoodDetail = ({route}) => {
  const {strMeal} = route.params;
  const {error, loading, data} = useFetch(`${Config.API_DETAIL_URL}${strMeal}`);
  const mealData = data?.meals?.[0];

  const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Can't handle this URL: ${url}`);
      }
    }, [url]);

    return (
      <TouchableOpacity style={style.button} onPress={handlePress}>
        {children}
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error || !mealData) {
    return <Error />;
  }

  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <Image source={{uri: mealData.strMealThumb}} style={style.image} />
      <Text style={style.title}>{mealData.strMeal}</Text>
      <Text style={style.subtitle}>{mealData.strArea}</Text>
      <View style={style.separator} />
      <Text style={style.instructions}>{mealData.strInstructions}</Text>
      <OpenURLButton url={mealData.strYoutube}>
        <Text style={style.buttonText}>Watch on Youtube</Text>
      </OpenURLButton>
    </ScrollView>
  );
};

export default FoodDetail;
