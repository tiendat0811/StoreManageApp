import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import theme from '../../core/theme';
import ButtonSmall from '../../components/ButtonSmall';
import {createProduct} from '../../apis/Product.api';

type Product = {
  name: string;
  description: string;
  defaultPrice: number;
  internalName: string;
};

const ProductCreate = () => {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    defaultPrice: 0,
    internalName: '',
  });

  const handleSubmit = () => {
    createProduct(product)
      .then(res => {
        if (res.status === 200) {
          Alert.alert('Thông báo', 'Tạo sản phẩm thành công');
          setProduct({
            name: '',
            description: '',
            defaultPrice: 0,
            internalName: '',
          });
        } else {
          Alert.alert('Thông báo', 'Tạo sản phẩm thất bại');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const priceInputHandler = (val: any) => {
    let keyInt = parseInt(val);
    setProduct({...product, defaultPrice: Number.isNaN(keyInt) ? 0 : keyInt});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Tên sản phẩm
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={product.name}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Tên sản phẩm"
            onChangeText={text => setProduct({...product, name: text})}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Giá
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={product.defaultPrice.toString()}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Giá"
            onChangeText={priceInputHandler}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Định danh gọn
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={product.internalName}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Định danh sản phẩm"
            onChangeText={text => setProduct({...product, internalName: text})}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Mô tả sản phẩm
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={product.description}
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={4}
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={[styles.textInput, {height: 100}]}
            placeholder="Mô tả sản phẩm"
            onChangeText={text => setProduct({...product, description: text})}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>

        <View style={styles.button}>
          <ButtonSmall title="Tạo sản phẩm" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default ProductCreate;
