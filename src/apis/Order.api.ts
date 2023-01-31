import instance from '../core/utils/request';
import config from '../config.json';

export const getOrders = () => {
  const merchant = config.MERCHANT_NAME;
  const store = config.STORE;
  return instance
    .get(
      `merchants/${merchant}/stores/${store}/orders?filter=%7B%0A%22order%22%3A%5B%22datetime%20DESC%22%5D%2C%0A%22limit%22%3A100%0A%7D`,
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};
