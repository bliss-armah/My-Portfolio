interface localStorageProps {
  user: {}
}

export const addUserToLocalStorage = (user : localStorageProps) => {
  localStorage.setItem("user", JSON.stringify(user));
};


export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user");
    
    const user = result ? JSON.parse(result) : null;
    return user;
  };
  