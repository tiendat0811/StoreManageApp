import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Icon} from '@rneui/themed';
import theme from '../core/theme';
import {createProduct, deleteProduct, getProducts} from '../apis/Product.api';
import ButtonSmall from '../components/ButtonSmall';
import {useIsFocused} from '@react-navigation/native';
const ProductManagement = ({navigation}: any) => {
  const [productList, setProductList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(res => {
        if (res.data.count > 0) {
          setTotal(res.data.count);
          setProductList(res.data.data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFocused, isUpdate]);

  const doubleProduct = (data: any) => {
    let newData = {
      name: data.name,
      defaultPrice: Number(data.defaultPrice),
      description: data.description,
      internalName: data.internalName,
    };
    createProduct(newData)
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Thông báo', 'Tạo sản phẩm thành công');
          setIsUpdate(!isUpdate);
        } else {
          Alert.alert('Thông báo', 'Tạo sản phẩm thất bại');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteProductHandle = (id: any) => {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xoá sản phẩm này?', [
      {
        text: 'Không',
        onPress: () => {},
      },
      {
        text: 'Có',
        onPress: () => {
          deleteProduct(id).then(res => {
            if (res.status === 204) {
              Alert.alert('Thông báo', 'Xoá sản phẩm thành công');
              setIsUpdate(!isUpdate);
            } else {
              Alert.alert('Thông báo', 'Xoá sản phẩm thất bại');
            }
          });
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách sản phẩm</Text>
        <Text style={styles.total}>Tổng số bản ghi: {total} </Text>
        <ButtonSmall
          title="Thêm mới"
          onPress={() => {
            navigation.navigate('ProductCreate');
          }}
        />
      </View>
      <View style={styles.body}>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <ScrollView>
            {productList.map((item: any) => {
              var url = item.preview;
              if (url === '') {
                url = 'https://petitemaika.com/brand.png';
              }
              var category = 'Không xác định';
              if (item.category) {
                category = item.category.name;
              }
              return (
                <View key={item.id} style={styles.item}>
                  <View style={styles.info}>
                    <Image source={{uri: url}} style={styles.image} />
                    <View style={styles.detail}>
                      <Text
                        style={styles.itemName}
                        numberOfLines={2}
                        ellipsizeMode="middle">
                        {item.name}
                      </Text>
                      <Text
                        style={styles.itemName}
                        numberOfLines={1}
                        ellipsizeMode="middle">
                        Giá: {item.defaultPrice} đ
                      </Text>
                      <Text
                        style={styles.itemName}
                        numberOfLines={2}
                        ellipsizeMode="middle">
                        Danh mục: {category}
                      </Text>

                      <View style={styles.active}>
                        <Text style={styles.itemName}>Hoạt động: </Text>
                        {item.active ? (
                          <Icon name="checkmark-circle" type="ionicon" />
                        ) : (
                          <Icon name="close-circle" type="ionicon" />
                        )}
                      </View>
                    </View>
                  </View>
                  <View style={styles.action}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ProductEdit', item);
                      }}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Sửa</Text>
                        <Icon
                          name="pencil"
                          type="ionicon"
                          color={'white'}
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        doubleProduct(item);
                      }}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Nhân bản</Text>
                        <Icon
                          name="copy"
                          type="ionicon"
                          color={'white'}
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        deleteProductHandle(item.id);
                      }}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Xoá</Text>
                        <Icon
                          name="trash"
                          type="ionicon"
                          color={'white'}
                          size={20}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: theme.colors.BACKGROUND,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  body: {
    flex: 8,
    backgroundColor: theme.colors.BACKGROUND,
  },
  //text styles
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.BLACK,
  },
  total: {
    fontSize: 16,
    color: theme.colors.BLACK,
  },
  itemName: {
    fontSize: 14,
    color: theme.colors.BLACK,
  },

  //collection styles
  item: {
    flex: 1,
    margin: 10,
    borderColor: theme.colors.GREY,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginEnd: 10,
  },
  detail: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.WHITE,
    marginEnd: 5,
  },
  active: {
    flexDirection: 'row',
  },
});

export default ProductManagement;
