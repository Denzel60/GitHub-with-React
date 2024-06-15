import { create } from 'zustand';

const usernameStore = (set) => ({
  username: "1vonn",
  
  captureUsername: (newName) => {
    set(() => {
        return { username: newName }
    });
  }
});

const useUsernameStore = create(usernameStore)
export default useUsernameStore;


 
 