import dayjs from 'dayjs';
const formatPrice = (price: string | number) => {
  if (price) return `￥${price}`;
  else return price;
};

const formatDate = (date: string) => {
  console.log();
  return dayjs(date).format('MM月DD日');
};

const getDateWeek = (date: string) => {
  // const day = dayjs(date).dayOfYear();
  const dateObj = dayjs(date);
  const week = (dateObj as any).$W;
  switch (week) {
    case 1:
      return '周一';
    case 2:
      return '周二';
    case 3:
      return '周三';
    case 4:
      return '周四';
    case 5:
      return '周五';
    case 6:
      return '周六';
    case 0:
      return '周日';
  }
};
export { formatPrice, formatDate, getDateWeek };
