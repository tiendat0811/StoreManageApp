import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import theme from '../../core/theme';
import navigation from '../../navigation/navigation';
import ProductCard from '../products/ProductCard';
import {Icon} from '@rneui/themed';
const CategoriesList = ({navigation}: any) => {
  const books = ['1', '2', '3', '4', '5'];
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="book" type="ionicon" />
          <Text style={styles.title}>Sách giáo dục</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMore}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={books}
        renderItem={({item}) => (
          <View style={styles.book}>
            <ProductCard navigation={navigation} />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginStart: 10,
    color: theme.colors.GREY,
  },
  image: {
    height: 30,
    width: 30,
  },
  seeMore: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: theme.colors.PRIMARY,
    paddingEnd: 20,
  },
  book: {
    marginEnd: 20,
    marginTop: 10,
    marginBottom: 40,
  },
});
export default CategoriesList;
