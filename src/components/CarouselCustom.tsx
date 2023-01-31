import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import theme from '../core/theme';

const CarouselCustom = () => {
  const [active, setActive] = useState(0);
  //   const [images, setImages] = useState<string[]>([]);
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    'https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg',
    'https://media.istockphoto.com/id/480125692/photo/sunset-summer-hcm-city.jpg?s=612x612&w=0&k=20&c=5vtajrIKJzZhv1B0aSJW88maZsmYFP0hFd7w4pEocLM=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBStUDyxtuz8xEbxZ6VUlCnpKdlNnRZDapr0pPPnT&s',
  ];
  const width = Dimensions.get('window').width;
  useEffect(() => {
    // getBanner()
    //   .then(res => {
    //     let data = res.data.data.data;
    //     let temp: string[] = [];
    //     for (let i = 0; i < data.length; i++) {
    //       temp.push(config.BASE_URL + data[i].thumbnail);
    //     }
    //     if (images.length != temp.length) {
    //       setImages(temp);
    //     }
    //   })
    //   .catch(err => {});
  }, [images]);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: any) => setActive(index)}
        renderItem={({index}: any) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              key={index}
              source={{uri: images[index]}}
              style={styles.bannerImage}
            />
          </View>
        )}
      />
      <View style={styles.bottom}>
        {images.map((i, k) => {
          return (
            <Text key={i} style={k != active ? styles.dot : styles.dotActive}>
              ⬤
            </Text>
          );
        })}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    color: theme.colors.GREY,
    margin: 3,
  },
  dotActive: {
    color: theme.colors.PRIMARY,
    margin: 3,
  },
  bannerImage: {
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CarouselCustom;
