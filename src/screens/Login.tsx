import React, {useContext, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import TextField from '../components/TextField';
import ButtonSmall from '../components/ButtonSmall';
import {_storeData} from '../core/async.storage';
import {AuthContext} from '../contexts/AuthContext';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext);
  const handleLogin = async () => {
    if (username === '' && password === '') {
      await _storeData('token', '123456');
      auth?.setAuth({
        token: '123456',
        getToken: true,
      });
      navigation.navigate('Home', {screen: 'HomePage'});
    } else {
      Alert.alert('Thông báo', 'Đăng nhập thất bại');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.textField}>
        <TextField
          label="Tên đăng nhập"
          placeholder="Nhập tên đăng nhập"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.textField}>
        <TextField
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          onChangeText={setPassword}
          isPassword={true}
        />
      </View>
      <View style={styles.button}>
        <ButtonSmall title="Đăng nhập" onPress={handleLogin} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  textField: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
  },
});
export default Login;
