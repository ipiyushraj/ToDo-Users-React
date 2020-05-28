export const setLocalStorage = (value, name) => {
    if (!window.localStorage.getItem(name)) {
      window.localStorage.setItem(name, JSON.stringify([]));
    }
    const localData =
      window.localStorage &&
      window.localStorage.getItem(name) &&
      JSON.parse(window.localStorage.getItem(name));
  
    const totalData = [...localData, value];
  
    return (
      window.localStorage &&
      window.localStorage.setItem(name, JSON.stringify(totalData))
    );
  };  