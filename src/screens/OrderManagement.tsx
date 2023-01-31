import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getOrders} from '../apis/Order.api';
import theme from '../core/theme';
import {Icon} from '@rneui/themed';
import ButtonSmall from '../components/ButtonSmall';
import navigation from '../navigation/navigation';

const OrderManagement = ({navigation}: any) => {
  const [orderList, setOrderList] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getOrders()
      .then(res => {
        if (res.data.count > 0) {
          setTotal(res.data.count);
          setOrderList(res.data.data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const formatDate = (input: string) => {
    let date = new Date(input);
    let formattedDate = date
      .toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
      .replace(',', '');
    return formattedDate;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Danh sách đơn hàng</Text>
        <Text style={styles.total}>Tổng số bản ghi: {total} </Text>
        <ButtonSmall
          title="Thêm mới"
          onPress={() => {
            navigation.navigate('OrderCreate');
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
            {orderList.map((item: any) => {
              return (
                <View key={item.id} style={styles.item}>
                  <View style={styles.info}>
                    <View style={styles.detail}>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Mã đơn hàng: </Text>
                        <Text style={styles.text}>{item.code}</Text>
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Email: </Text>
                        <Text style={styles.text}>{item.email}</Text>
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Kênh bán: </Text>
                        <Text style={styles.text}>{item.salesChannel}</Text>
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Chế độ kiểm tra: </Text>
                        {item.testmode ? (
                          <Text
                            style={[
                              styles.text,
                              {
                                backgroundColor: theme.colors.STATUS_STANDBY,
                                paddingHorizontal: 3,
                                borderRadius: 5,
                              },
                            ]}>
                            Đồng ý
                          </Text>
                        ) : (
                          <Text
                            style={[
                              styles.text,
                              {
                                backgroundColor: theme.colors.ERROR,
                                paddingHorizontal: 3,
                                borderRadius: 5,
                              },
                            ]}>
                            Không
                          </Text>
                        )}
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Trạng thái: </Text>
                        {item.status === 'p' ? (
                          <Text
                            style={[
                              styles.text,
                              {
                                backgroundColor: theme.colors.STATUS_NORMAL,
                                paddingHorizontal: 3,
                                borderRadius: 5,
                              },
                            ]}>
                            Đã thanh toán
                          </Text>
                        ) : (
                          <Text
                            style={[
                              styles.text,
                              {
                                backgroundColor: theme.colors.STATUS_CAUTION,
                                paddingHorizontal: 3,
                                borderRadius: 5,
                              },
                            ]}>
                            Chờ thanh toán
                          </Text>
                        )}
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Tổng: </Text>
                        <Text style={styles.text}>{item.total}</Text>
                      </View>
                      <View style={styles.twoCol}>
                        <Text style={styles.text}>Ngày tạo đơn hàng: </Text>
                        <Text style={styles.text}>
                          {formatDate(item.datetime)}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.action}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('OrderEdit', item);
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
                    <TouchableOpacity>
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
  text: {
    fontSize: 16,
    color: theme.colors.BLACK,
  },
  detail: {
    flex: 1,
    flexDirection: 'column',
  },
  twoCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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

export default OrderManagement;
