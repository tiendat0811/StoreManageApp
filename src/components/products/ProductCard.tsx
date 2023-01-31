import {Text} from '@rneui/base';
import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import theme from '../../core/theme';

const ProductCard = ({navigation}: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProductDetail');
      }}>
      <Image
        source={{
          uri: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.media/sach-giup-ban-lam-giau.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.name} numberOfLines={2}>
        Sách giáo dục
      </Text>
      <Text style={styles.finalPrice}>3.200.000 đ</Text>
      <Text style={styles.originPrice}>3.500.000 đ</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 177,
    height: 270,
    borderRadius: 7,
    shadowOffset: {width: 20, height: 20},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: 'white',
  },
  image: {
    height: 177,
    width: 177,
    resizeMode: 'contain',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.41,
    color: theme.colors.GREY,
    marginTop: 10,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  finalPrice: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: theme.colors.ERROR,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 16,
  },
  originPrice: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    color: theme.colors.GREY,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    textDecorationLine: 'line-through',
  },
});
export default ProductCard;
