import instance from '../core/utils/request';
import config from '../config.json';

export const getCollections = () => {
  const merchant = config.MERCHANT_NAME;
  const store = config.STORE;
  return instance
    .get(`merchants/${merchant}/stores/${store}/collections`)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const createCollection = (collection: any) => {
  const merchant = config.MERCHANT_NAME;
  const store = config.STORE;
  return instance
    .post(`merchants/${merchant}/stores/${store}/collections`, collection)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const deleteCollection = (collectionId: string) => {
  const merchant = config.MERCHANT_NAME;
  const store = config.STORE;
  return instance
    .delete(`merchants/${merchant}/stores/${store}/collections/${collectionId}`)
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const updateCollection = (collection: any, collectionId: string) => {
  const merchant = config.MERCHANT_NAME;
  const store = config.STORE;
  return instance
    .patch(
      `merchants/${merchant}/stores/${store}/collections/${collectionId}`,
      collection,
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};
