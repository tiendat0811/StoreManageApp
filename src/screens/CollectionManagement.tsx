import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {deleteCollection, getCollections} from '../apis/Collection.api';
import ButtonSmall from '../components/ButtonSmall';
import theme from '../core/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {Icon} from '@rneui/themed';
import {useIsFocused} from '@react-navigation/native';

const CollectionManagement = ({navigation}: any) => {
  const [collectionList, setCollectionList] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    getCollections()
      .then(res => {
        if (res.data.count > 0) {
          setTotal(res.data.count);
          setCollectionList(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFocused, isUpdate]);

  const deleteCollectionHandle = (id: any) => {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xoá danh mục này?', [
      {
        text: 'Không',
        onPress: () => {},
      },
      {
        text: 'Có',
        onPress: () => {
          deleteCollection(id).then(res => {
            if (res.status === 200) {
              Alert.alert('Thông báo', 'Xoá danh mục thành công');
              setIsUpdate(!isUpdate);
            } else {
              Alert.alert('Thông báo', 'Xoá danh mụcs thất bại');
            }
          });
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách danh mục</Text>
        <Text style={styles.total}>Tổng số bản ghi: {total} </Text>
        <ButtonSmall
          title="Thêm mới"
          onPress={() => {
            navigation.navigate('CollectionCreate');
          }}
        />
      </View>
      <View style={styles.body}>
        <ScrollView
          style={{
            flex: 1,
          }}>
          {collectionList.map((item: any) => {
            var url = item.preview;
            if (url === '') {
              url = 'https://petitemaika.com/brand.png';
            }
            return (
              <View key={item.id} style={styles.item}>
                <View style={styles.info}>
                  <Image source={{uri: url}} style={styles.image} />
                  <View style={styles.detail}>
                    <Text
                      style={styles.itemName}
                      ellipsizeMode="middle"
                      numberOfLines={2}>
                      {item.name}
                    </Text>
                    <Text
                      style={styles.itemName}
                      ellipsizeMode="middle"
                      numberOfLines={1}>
                      Tên rút gọn: {item.internalName}
                    </Text>
                    <Text
                      style={styles.itemName}
                      ellipsizeMode="middle"
                      numberOfLines={3}>
                      Mô tả: {item.description}
                    </Text>
                    <Text
                      style={styles.itemName}
                      ellipsizeMode="middle"
                      numberOfLines={2}>
                      Thứ tự: {item.position}
                    </Text>
                  </View>
                </View>
                <View style={styles.action}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CollectionEdit', item);
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
                  <TouchableOpacity>
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
                      deleteCollectionHandle(item.id);
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
    fontSize: 16,
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
  detail: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default CollectionManagement;
