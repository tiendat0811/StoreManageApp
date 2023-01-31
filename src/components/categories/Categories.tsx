import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import theme from '../../core/theme';
import {Icon} from '@rneui/themed';
const Categories = () => {
  const categories: any = [
    'cart',
    'chatbubbles-sharp',
    'airplane',
    'albums',
    'chatbubbles-sharp',
    'airplane',
    'albums',
    'aperture',
    'american-football',
    'aperture',
    'american-football',
    'archive',
    'at-circle',
    'cart',
    'archive',
    'at-circle',
    'at-circle',
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <View style={styles.row}>
          {categories
            .slice(0, categories.length / 2)
            .map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.box}
                  onPress={() => {}}>
                  <Icon name={item} type="ionicon" />
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
        <View style={styles.row}>
          {categories
            .slice(categories.length / 2)
            .map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.box}
                  onPress={() => {}}>
                  <Icon name={item} type="ionicon" />
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  box: {
    marginEnd: 10,
    width: 86,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.colors.GREY,
    textAlign: 'center',
  },
});

export default Categories;
