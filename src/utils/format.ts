const formatPrice = (price: string | number) => {
  if (price) return `￥${price}`;
  else return price;
};

const formatDate = (date: string) => {
  const month = new Date(date).getMonth() + 1;
  const day = new Date(date).getDate();
  return `${month}月${day}日`;
};
export { formatPrice, formatDate };
