import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

type typeCounter = {
  count1: number;
  count2: number;
  incrementByCount1: (num: number) => void;
  decrementByCount1: (num: number) => void;
  resetCount1: () => void;
  incrementByCount2: (num: number) => void;
  decrementByCount2: (num: number) => void;
  resetCount2: () => void;
};

const useCounterStore = create<typeCounter>()(
  subscribeWithSelector(
    devtools((set) => ({
      count1: 0,
      count2: 0,
      incrementByCount1: (num) =>
        set((state) => ({ ...state, count1: state.count1 + num }), false, `incrementByCount1: ${num}`),
      decrementByCount1: (num) =>
        set((state) => ({ ...state, count1: state.count1 - num }), false, `decrementByCount1: ${num}`),
      resetCount1: () => set((state) => ({ ...state, count1: 0 }), false, 'resetCount1'),
      incrementByCount2: (num) =>
        set((state) => ({ ...state, count2: state.count2 + num }), false, `incrementByCount2: ${num}`),
      decrementByCount2: (num) =>
        set((state) => ({ ...state, count2: state.count2 - num }), false, `decrementByCount2: ${num}`),
      resetCount2: () => set((state) => ({ ...state, count2: 0 }), false, 'resetCount2'),
    })),
  ),
);

useCounterStore.subscribe((stateAfter, stateBefore) => {
  console.log('=== ステート全体の変更検知 ===');
  console.log({ stateAfter, stateBefore });
});

useCounterStore.subscribe(
  (state) => state.count1,
  (after, before) => {
    console.log('=== Count1の変更検知 ===');
    console.log({ after, before });
  },
);

export default useCounterStore;
