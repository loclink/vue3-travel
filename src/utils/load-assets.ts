// vite 项目中使用该方法加载图片静态资源
const getAssetURL = (image: string) => {
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};

export default getAssetURL;
