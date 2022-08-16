const formatPrice = (price: string | number) => {
  if (price) return `￥${price}`;
  else return price;
};

export { formatPrice };
