// *** BOX COLLORING

// import { create } from 'zustand';

// export const useStore = create((set) => ({
//   sharedColor: 'white',
//   setSharedColor: (color) => set({ sharedColor: color }),
// }));

// *** YOUTUBE ZUSTAND TUTORIAL

// import { create } from 'zustand';
// import { devtools, persist } from 'zustand/middleware';

// let store = (set) => ({
//   people: ['John Doe', 'Jane Doe'],
//   addPerson: (person) =>
//     set((state) => ({ people: [...state.people, person] })),
// });

// store = devtools(store);
// store = persist(store, { name: 'user_settings' });

// const useStore = create(store);
// export default useStore;

// CASINO APP

// import create from 'zustand';

// export const useStore = create((set) => ({
//   name: 'Sigis',
//   age: 51,
//   setName: (state) => set({ name: state }),
//   setAge: (state) => set({ age: state }),
// }));

//

import { create } from 'zustand';

const useStore = create((set) => ({
  toDos: [],
  addItems: (item) => set((state) => ({ toDos: [...state.toDos, item] })),
}));

export default useStore;
