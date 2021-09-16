// 获取鼠标点击屏幕的位置
import { ref, onMounted, onUnmounted ,Ref} from 'vue';
interface Backinter {
  x: Ref<number | null>,
  y: Ref<number | null>
}
export default function useMousePosition ():Backinter{
  const x = ref<number | null>(null);
  const y = ref<number | null>(null);
  const headMonseFun = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    window.addEventListener('click', headMonseFun);
  });
  onUnmounted(() => {
    window.removeEventListener('click', headMonseFun);
  });
  return { x, y };
}