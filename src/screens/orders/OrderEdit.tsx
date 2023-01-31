import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonSmall from '../../components/ButtonSmall';
import theme from '../../core/theme';

type Order = {
  code: string;
  email: string;
  salesChannel: string;
  testmode: boolean;
  status: string;
  total: number;
  datetime: string;
};

const OrderEdit = (orderEdit: any) => {
  const params = orderEdit.route.params;
  const [order, setOrder] = useState<Order>({
    code: params.code,
    email: params.email,
    salesChannel: params.salesChannel,
    testmode: params.testmode,
    status: params.status,
    total: params.total,
    datetime: params.datetime,
  });

  const [orderStatus, setOrderStatus] = useState(params.status);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const selectOption = (option: string) => {
    setOrderStatus(option);
    toggleModal();
  };

  const handleSubmit = () => {};

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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textField}>
          <Text style={styles.label}>Mã đơn hàng</Text>
          <TextInput
            value={order.code}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={[
              styles.textInput,
              {borderColor: theme.colors.GREY, color: theme.colors.GREY},
            ]}
            placeholderTextColor={theme.colors.PLACEHOLDER}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={order.email}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Email"
            onChangeText={text => setOrder({...order, email: text})}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Kênh bán</Text>
          <TextInput
            value={order.salesChannel}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            style={[
              styles.textInput,
              {borderColor: theme.colors.GREY, color: theme.colors.GREY},
            ]}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Chế độ kiểm tra</Text>
          <TextInput
            value={order.testmode ? 'Đồng ý' : 'Không'}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            style={[
              styles.textInput,
              {borderColor: theme.colors.GREY, color: theme.colors.GREY},
            ]}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Trạng thái</Text>

          <TouchableOpacity onPress={toggleModal}>
            <TextInput
              value={orderStatus === 'p' ? 'Đã thanh toán' : 'Chờ thanh toán'}
              underlineColorAndroid="transparent"
              selectionColor={theme.colors.THEME}
              secureTextEntry={false}
              style={styles.textInput}
              editable={false}
              selectTextOnFocus={false}
            />
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',
                flex: 1,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                key={1}
                onPress={() => selectOption('p')}
                style={{
                  width: 200,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                }}>
                <Text>Đã thanh toán</Text>
              </TouchableOpacity>
              <TouchableOpacity
                key={2}
                onPress={() => selectOption('n')}
                style={{
                  width: 200,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}>
                <Text>Chờ thanh toán</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Tổng</Text>
          <TextInput
            value={order.total.toString()}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            style={[
              styles.textInput,
              {borderColor: theme.colors.GREY, color: theme.colors.GREY},
            ]}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>Ngày tạo đơn hàng</Text>
          <TextInput
            value={formatDate(order.datetime)}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            style={[
              styles.textInput,
              {borderColor: theme.colors.GREY, color: theme.colors.GREY},
            ]}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <View style={styles.button}>
          <ButtonSmall title="Cập nhật đơn hàng" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  textField: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  textInput: {
    justifyContent: 'flex-start',
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: theme.colors.BLACK,
    padding: 10,

    color: theme.colors.TEXT_COLOR,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
  },
  label: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: theme.colors.MUTED,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default OrderEdit;
