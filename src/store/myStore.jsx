import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      myUser: null,
      users: [],
      register: (newUser) => {
        set((state) => {
          const usernameExists = state.users.some(
            (user) => user.username === newUser.username
          );
          if (usernameExists) {
            alert('Username already exists');
            return state;
          }
          return { users: [...state.users, newUser] };
        });
      },

      setMyUser: (user) => set({ myUser: user }),
      logoutUser: () => set({ myUser: null }),
      changeUsername: (newUsername) => {
        const { users, myUser } = get();
        if (users.some((user) => user.username === newUsername)) {
          alert('This username is already taken. Please choose another one.');
          return;
        }
        if (myUser) {
          const updatedUsers = users.map((user) =>
            user.username === myUser.username
              ? { ...user, username: newUsername }
              : user
          );
          set({
            users: updatedUsers,
            myUser: { ...myUser, username: newUsername },
          });
        }
      },
    }),
    {
      name: 'user-storage',
    }
  )
);

export const usePostStore = create(
  persist(
    (set, get) => ({
      posts: [],
      nextId: 1,
      createNewPost: (image, title, username) => {
        const newPost = {
          id: get().nextId,
          image,
          title,
          username,
          timestamp: Date.now(),
        };
        set((state) => ({
          posts: [newPost, ...state.posts],
          nextId: state.nextId + 1,
        }));
      },
      setPosts: (updatedPosts) => set({ posts: updatedPosts }),
      deletePostWithoutId: () => {
        const filteredPosts = get().posts.filter(
          (post) => post.id !== undefined
        );
        set({ posts: filteredPosts });
      },
    }),
    {
      name: 'post-storage',
    }
  )
);

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false, myUser: null }),
}));
