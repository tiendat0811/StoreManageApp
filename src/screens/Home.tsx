import {Icon, Input} from '@rneui/themed';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from '../core/theme';
import CarouselCustom from '../components/CarouselCustom';
import Categories from '../components/categories/Categories';
import CategoriesHighlight from '../components/categories/CategoriesHighlight';
const Home = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <Input
            placeholder="Tìm kiếm"
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: theme.colors.INPUT,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            value={search}
            onChangeText={setSearch}
            leftIcon={<Icon name="search" type="ionicon" />}
            rightIcon={<Icon name="camera" type="ionicon" />}
          />
        </View>
        <View style={styles.cart}>
          <TouchableOpacity
            style={{marginEnd: 20}}
            onPress={() => {
              // navigation.navigate('Cart');
            }}>
            <Icon name="cart" type="ionicon" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Chat');
            }}>
            <Icon name="chatbubbles-sharp" type="ionicon" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  homeScreen: {
    width: '100%',
  },
  header: {
    height: 70,
    backgroundColor: theme.colors.TRANSPARENT,
    flexDirection: 'row',
  },
  search: {
    flex: 4,
    marginVertical: 10,
  },
  searchInput: {
    height: 50,
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderRadius: 7,
    fontSize: 16,
    fontWeight: '400',
  },
  cart: {
    marginVertical: 10,
    marginStart: 20,
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    flex: 1,
  },
  banner: {
    bottom: 60,
    position: 'relative',
  },
  categories: {
    marginTop: 20,
  },
  productList: {},
});
export default Home;
