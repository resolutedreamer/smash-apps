export const RECEIVE_POOL_ITEM = 'RECEIVE_POOL_ITEM';

// export const addItemToPool = (itemName, itemURL) => ({
//   type: RECEIVE_POOL_ITEM,
//   item: {itemName, itemURL}
// })

export const addItemToPool = (itemName, itemURL) => {
  console.log('action');
  return {
  type: RECEIVE_POOL_ITEM,
  item: {itemName, itemURL}
}}