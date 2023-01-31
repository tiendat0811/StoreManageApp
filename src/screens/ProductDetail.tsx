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
          {'32354250'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ
        </Text>
        <View style={styles.orderQuantity}>
          <Text style={styles.soLuongDat}>Số lượng đặt</Text>
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
          <Text style={styles.button}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
        <View style={styles.information}>
          <View style={styles.titleInformation}>
            <Icon name="alert-circle" type="ionicon" />
            <Text style={styles.titleInformationText}>Thông tin chi tiết</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Ngày xuất bản</Text>
            <Text style={styles.contentInformation}>06/01/2023</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Kích thước</Text>
            <Text style={styles.contentInformation}>123</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Loại bìa</Text>
            <Text style={styles.contentInformation}>Bìa cứng</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Số trang</Text>
            <Text style={styles.contentInformation}>123</Text>
          </View>
          <View style={styles.boxInformation}>
            <Text style={styles.nameInformation}>Nhà xuất bản</Text>
            <Text style={styles.contentInformation}>Phạm Tiến Đạt</Text>
          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.titleInformation}>
            <Icon name="alert-circle" type="ionicon" />
            <Text style={styles.titleInformationText}>Mô tả sản phẩm</Text>
          </View>
          <Text style={styles.description}>
            13 Nguyên Tắc Nghĩ Giàu Làm Giàu là cuốn sách hay về làm giàu “chỉ
            dẫn” duy nhất chỉ ra những nguồn lực bạn phải có để thành công. Cuốn
            sách sẽ giúp bạn trở nên giàu có, làm giàu thêm cho cuộc sống của
            bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài
            chính và vật chất. Những ý tưởng trong cuốn sách Think and Grow rich
            – 13 nguyên tắc nghĩ giàu, làm giàu bắt nguồn từ những động lực tốt
            đẹp: “Thành công cá nhân” và “Quan điểm suy nghĩ tích cực”. Cuốn
            sách chứa đựng nhiều hơn những gì mà cuốn sách giải thích về sức
            mạnh của những nguyên tắc. Phần hấp dẫn nhất của cuốn sách chính là
            những điều phi thường, những thông điệp trong cuốn sách được viết ra
            từ rất lâu nhưng vẫn mang tính “thời đại”. Ông đã bàn về những quan
            niệm như quản lý nhóm, dịch vụ chăm sóc khách hàng hoàn hảo, những
            công cụ hữu hình, trí tuệ tập thể và mục tiêu cần được viết ra trước
            khi hành động.
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
