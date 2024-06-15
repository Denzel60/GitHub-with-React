import { create } from 'zustand';

const usernameStore = (set) => ({
  username: "denzel60",
  
  captureUsername: (newName) => {
    set(() => {
        return { username: newName }
    });
  }
});

const useUsernameStore = create(usernameStore)
export default useUsernameStore;


 
 