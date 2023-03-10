import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import theme from '../core/theme';
import {Icon} from '@rneui/themed';
const ProductDetail = ({navigation}: any) => {
  const url =
    'https://tamnhinrong.org/wp-content/uploads/2022/06/the-millionaire-fast-lane-lan-duong-nhanh-cua-trieu-phu-mj-demarco-614876.jpg';
  const url2 =
    'https://metaisach.com/wp-content/uploads/2019/05/13-nguyen-tac-nghi-giau-lam-giau.jpg';
  const tempBook = {
    listImages: [url, url2, url, url2],
    image: url,
  };

  const [book, setBook] = useState<any>(tempBook);
  const [image, setImage] = useState(url);

  useEffect(() => {
    setImage(book.image);
  }, [book]);
  return (
    <View>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="arrow-back-circle"
              type="ionicon"
              size={35}
              iconStyle={styles.iconHeader}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon
              name="arrow-redo-circle-sharp"
              type="ionicon"
              size={35}
              iconStyle={styles.iconHeader}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart"
              type="ionicon"
              size={35}
              iconStyle={styles.iconHeader}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="ellipsis-vertical-circle-sharp"
              type="ionicon"
              size={35}
              iconStyle={styles.iconHeader}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: image}}
          style={styles.image}
          defaultSource={{
            uri: image,
          }}
        />
        <View style={styles.listImage}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator
            data={book?.listImages}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  setBook({
                    ...book,
                    image: item,
                  });
                }}
                style={styles.imageSubContainer}>
                <Image
                  style={styles.imageSub}
                  source={{uri: item}}
                  defaultSource={{uri: url}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={styles.name}>{book.name}</Text>
        <Text style={styles.finalPrice}>
          {'32354250'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ??
        </Text>
        <View style={styles.orderQuantity}>
          <Text style={styles.soLuongDat}>S??? l?????ng ?????t</Text>
          <View style={styles.upDownNumber}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="remove-circle" type="ionicon" />
            </TouchableOpacity>
            <Text style={styles.quantity}>3</Text>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="add-circle" type="ionicon" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.button}>Th??m v??o gi??? h??ng</Text>
        </TouchableOpacity>
        <View style={styles.information}>
          <View style={styles.titleInformation}>
            <Icon name="alert-circle" type="ionicon" />
            <Text style={styles.titleInformationText}>Th??ng tin chi ti???t</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Ng??y xu???t b???n</Text>
            <Text style={styles.contentInformation}>06/01/2023</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>K??ch th?????c</Text>
            <Text style={styles.contentInformation}>123</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Lo???i b??a</Text>
            <Text style={styles.contentInformation}>B??a c???ng</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>S??? trang</Text>
            <Text style={styles.contentInformation}>123</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Nh?? xu???t b???n</Text>
            <Text style={styles.contentInformation}>Ph???m Ti???n ?????t</Text>
          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.titleInformation}>
            <Icon name="alert-circle" type="ionicon" />
            <Text style={styles.titleInformationText}>M?? t??? s???n ph???m</Text>
          </View>
          <Text style={styles.description}>
            13 Nguy??n T???c Ngh?? Gi??u L??m Gi??u l?? cu???n s??ch hay v??? l??m gi??u ???ch???
            d???n??? duy nh???t ch??? ra nh???ng ngu???n l???c b???n ph???i c?? ????? th??nh c??ng. Cu???n
            s??ch s??? gi??p b???n tr??? n??n gi??u c??, l??m gi??u th??m cho cu???c s???ng c???a
            b???n tr??n t???t c??? c??c ph????ng di???n c???a cu???c s???ng ch??? kh??ng ch??? v??? t??i
            ch??nh v?? v???t ch???t. Nh???ng ?? t?????ng trong cu???n s??ch Think and Grow rich
            ??? 13 nguy??n t???c ngh?? gi??u, l??m gi??u b???t ngu???n t??? nh???ng ?????ng l???c t???t
            ?????p: ???Th??nh c??ng c?? nh??n??? v?? ???Quan ??i???m suy ngh?? t??ch c???c???. Cu???n
            s??ch ch???a ?????ng nhi???u h??n nh???ng g?? m?? cu???n s??ch gi???i th??ch v??? s???c
            m???nh c???a nh???ng nguy??n t???c. Ph???n h???p d???n nh???t c???a cu???n s??ch ch??nh l??
            nh???ng ??i???u phi th?????ng, nh???ng th??ng ??i???p trong cu???n s??ch ???????c vi???t ra
            t??? r???t l??u nh??ng v???n mang t??nh ???th???i ?????i???. ??ng ???? b??n v??? nh???ng quan
            ni???m nh?? qu???n l?? nh??m, d???ch v??? ch??m s??c kh??ch h??ng ho??n h???o, nh???ng
            c??ng c??? h???u h??nh, tr?? tu??? t???p th??? v?? m???c ti??u c???n ???????c vi???t ra tr?????c
            khi h??nh ?????ng.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  iconHeader: {
    color: 'grey',
    opacity: 0.7,
    marginLeft: 10,
  },
  header: {
    height: 70,
    backgroundColor: theme.colors.TRANSPARENT,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  addToCart: {
    height: 50,
    width: 260,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 100,
    bottom: 90,
    borderWidth: 2,
    borderColor: theme.colors.PRIMARY,
    borderRadius: 25,
  },
  textAddToCart: {
    marginStart: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: theme.colors.PRIMARY,
    fontWeight: '500',
    lineHeight: 19,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: theme.colors.GREY,
    marginBottom: 40,
  },
  information: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  titleInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInformationText: {
    marginStart: 10,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: theme.colors.PRIMARY,
  },
  boxInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  nameInformation: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: theme.colors.GREY,
  },
  contentInformation: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    color: theme.colors.GREY,
    alignContent: 'flex-start',
    width: '65%',
  },
  orderQuantity: {
    marginTop: 28,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  soLuongDat: {
    color: theme.colors.GREY,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
  upDownNumber: {
    flexDirection: 'row',
  },
  quantity: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    color: theme.colors.GREY,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
  },
  button: {
    width: '90%',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 7,

    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  image: {
    height: 350,
    width: '100%',
    resizeMode: 'contain',
  },
  listImage: {
    marginTop: 20,
    marginStart: 10,
  },
  imageSubContainer: {
    marginEnd: 10,
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.colors.GREY,
  },
  imageSub: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 30,
    color: theme.colors.GREY,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  finalPrice: {
    color: theme.colors.ERROR,
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    marginTop: 5,
    paddingHorizontal: 20,
  },
});
export default ProductDetail;
