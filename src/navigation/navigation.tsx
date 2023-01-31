import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import {AuthContext} from '../contexts/AuthContext';
import ProductManagement from '../screens/ProductManagement';
import {Icon} from '@rneui/themed';
import ProductDetail from '../screens/ProductDetail';
import OrderManagement from '../screens/OrderManagement';
import CollectionManagement from '../screens/CollectionManagement';
import ProductCreate from '../screens/products/ProductCreate';
import ProductEdit from '../screens/products/ProductEdit';
import OrderCreate from '../screens/orders/OrderCreate';
import OrderEdit from '../screens/orders/OrderEdit';
import CollectionCreate from '../screens/collections/CollectionCreate';
import CollectionEdit from '../screens/collections/CollectionEdit';
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  Home: any;
  Login: any;
  ProductManagement: any;
  OrderManagement: any;
  ProductDetail: any;
  CollectionManagement: any;
  Profile: any;
  ProductCreate: any;
  ProductEdit: any;
  OrderCreate: any;
  OrderEdit: any;
  CollectionCreate: any;
  CollectionEdit: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const Auth = useContext(AuthContext);
  const isLoggedIn = Auth?.auth.getToken;
  const HomeTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HomePage"
          component={Home}
          options={{
            title: 'Trang chủ',
            headerShown: false,
            tabBarIcon: ({size, color}) => {
              return (
                <Icon size={size} name="home" type="ionicon" color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ProductManagement"
          component={ProductManagement}
          options={{
            headerShown: false,
            title: 'Sản phẩm',
            tabBarIcon: ({size, color}) => {
              return (
                <Icon size={size} name="cube" type="ionicon" color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="OrderManagement"
          component={OrderManagement}
          options={{
            headerShown: false,
            title: 'Đơn hàng',
            tabBarIcon: ({size, color}) => {
              return (
                <Icon
                  size={size}
                  name="briefcase"
                  type="ionicon"
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="CollectionManagement"
          component={CollectionManagement}
          options={{
            headerShown: false,
            title: 'Danh mục',
            tabBarIcon: ({size, color}) => {
              return (
                <Icon size={size} name="grid" type="ionicon" color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: 'Tôi',
            tabBarIcon: ({size, color}) => {
              return (
                <Icon size={size} name="person" type="ionicon" color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  if (isLoggedIn) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Tạo sản phẩm mới'}}
          name="ProductCreate"
          component={ProductCreate}
        />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Chỉnh sửa sản phẩm'}}
          name="ProductEdit"
          component={ProductEdit}
        />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Tạo đơn hàng mới'}}
          name="OrderCreate"
          component={OrderCreate}
        />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Chỉnh sửa đơn hàng'}}
          name="OrderEdit"
          component={OrderEdit}
        />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Tạo danh mục mới'}}
          name="CollectionCreate"
          component={CollectionCreate}
        />
        <Stack.Screen
          options={{headerShown: true, headerTitle: 'Chỉnh sửa danh mục'}}
          name="CollectionEdit"
          component={CollectionEdit}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }
};

export default Navigator;
