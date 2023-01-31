import instance from '../core/utils/request';
import config from '../config.json';
const merchant = config.MERCHANT_NAME;
const store = config.STORE;
export const getProducts = () => {
  let url = `merchants/${merchant}/stores/${store}/products?filter=%7B%0A%22limit%22%3A%20100%2C%0A%22include%22%3A%5B%7B%22relation%22%3A%22category%22%7D%5D%0A%7D`;
  return instance
    .get(url)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const createProduct = (data: any) => {
  return instance
    .post(`merchants/${merchant}/stores/${store}/products`, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const editProduct = (data: any, id: any) => {
  return instance
    .patch(`merchants/${merchant}/stores/${store}/products/${id}`, data)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const deleteProduct = (id: any) => {
  return instance
    .delete(`merchants/${merchant}/stores/${store}/products/${id}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};
