import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type typeCounter = {
  count: number;
  incrementBy: (num: number) => void;
  decrementBy: (num: number) => void;
  reset: () => void;
};

const useCounterStore = create<typeCounter>()(
  devtools((set) => ({
    count: 0,
    incrementBy: (num) => set((state) => ({ count: state.count + num }), false, `incrementBy: ${num}`),
    decrementBy: (num) => set((state) => ({ count: state.count - num }), false, `decrementBy: ${num}`),
    reset: () => set(() => ({ count: 0 }), false, 'reset'),
  })),
);

export default useCounterStore;
