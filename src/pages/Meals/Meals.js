import {View, FlatList} from 'react-native';

import useFetch from '../../hooks/useFetch';
import FoodCard from '../../components/FoodCard';
import styles from './Meals.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {error, loading, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`,
  );

  const handleMealSelect = strMeal => {
    navigation.navigate('Detail', {strMeal});
    console.log(strMeal);
  };

  const renderMeals = ({item}) => (
    <FoodCard meal={item} onSelect={() => handleMealSelect(item.strMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data.meals}
      renderItem={renderMeals}
      style={styles.container}
    />
  );
};

export default Meals;
