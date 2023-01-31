import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import theme from '../../core/theme';
import ButtonSmall from '../../components/ButtonSmall';
import {createCollection} from '../../apis/Collection.api';

type Collection = {
  name: string;
  description: string;
  internalName: string;
  position: number;
};

const CollectionCreate = () => {
  const [collection, setCollection] = useState<Collection>({
    name: '',
    description: '',
    internalName: '',
    position: 0,
  });

  const handleSubmit = () => {
    createCollection(collection).then(res => {
      if (res.status === 200) {
        Alert.alert('Thông báo', 'Tạo danh mục thành công');
        setCollection({
          name: '',
          description: '',
          internalName: '',
          position: 0,
        });
      } else {
        Alert.alert('Thông báo', 'Tạo danh mục thất bại');
      }
    });
  };
  const priceInputHandler = (val: any) => {
    let keyInt = parseInt(val);
    setCollection({...collection, position: Number.isNaN(keyInt) ? 0 : keyInt});
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Tên danh mục
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={collection.name}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Tên danh mục"
            onChangeText={text => setCollection({...collection, name: text})}
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Thứ tự
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={collection.position.toString()}
            keyboardType="numeric"
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Thứ tự"
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
            value={collection.internalName}
            underlineColorAndroid="transparent"
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={styles.textInput}
            placeholder="Định danh danh mục"
            onChangeText={text =>
              setCollection({...collection, internalName: text})
            }
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>
        <View style={styles.textField}>
          <Text style={styles.label}>
            Mô tả
            <Text style={{color: theme.colors.ERROR}}> *</Text>
          </Text>
          <TextInput
            value={collection.description}
            underlineColorAndroid="transparent"
            multiline={true}
            numberOfLines={4}
            selectionColor={theme.colors.THEME}
            secureTextEntry={false}
            style={[styles.textInput, {height: 100}]}
            placeholder="Mô tả danh mục"
            onChangeText={text =>
              setCollection({...collection, description: text})
            }
            placeholderTextColor={theme.colors.PLACEHOLDER}
          />
        </View>

        <View style={styles.button}>
          <ButtonSmall title="Tạo danh mục" onPress={handleSubmit} />
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
export default CollectionCreate;
