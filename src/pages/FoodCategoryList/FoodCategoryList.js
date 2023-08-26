import React from 'react';
import {View, FlatList} from 'react-native';

import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './FoodCategoryList.style';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const FoodCategoryList = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL_CATE);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
    console.log(strCategory);
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.listContainer}
        data={data.categories}
        renderItem={renderCategory}
      />
    </View>
  );
};

export default FoodCategoryList;
