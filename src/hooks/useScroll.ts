import { onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'candy-bag';
import type { Ref } from 'vue';

const useScroll = (elRef?: Ref<any>) => {
  let el: any = Window; // 默认值
  // 是否到达底部
  const isReachBottom = ref(false);

  // 元素高度
  const clientHeight = ref(0);

  // 元素顶部至视口顶部的距离
  const scrollTop = ref(0);

  // 元素内容高度，包括溢出视口
  const scrollHeight = ref(0);

  // 节流
  const scrollListenerHandler = throttle(
    () => {
      if (el === window) {
        clientHeight.value = document.documentElement.clientHeight;
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
      } else {
        clientHeight.value = el.clientHeight;
        scrollTop.value = el.scrollTop;
        scrollHeight.value = el.scrollHeight;
      }

      if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
        console.log('滚动到底部了');
        isReachBottom.value = true;
      }
    },
    100,
    {
      leading: true,
      trailing: true
    }
  );

  onMounted(() => {
    if (elRef) el = elRef.value;
    el.addEventListener('scroll', scrollListenerHandler);
  });

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
};

export { useScroll };
