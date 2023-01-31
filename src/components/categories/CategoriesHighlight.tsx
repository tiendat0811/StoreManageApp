import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesList from './CategoriesList';

const CategoriesHighlight = ({navigation}: any) => {
  const listCategory: any[] = ['1', '2', '3', '4', '5'];
  return (
    <View style={styles.container}>
      {listCategory.map((category, index) => {
        return <CategoriesList key={index} navigation={navigation} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    marginStart: 20,
  },
});
export default CategoriesHighlight;
