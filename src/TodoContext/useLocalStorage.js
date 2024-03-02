import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      try {
        const itemFromStorage = window.localStorage.getItem(itemName);
        if(itemFromStorage) setItem(JSON.parse(itemFromStorage));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    },[])
  
    const updateItem = (newItem) => {
      setItem(newItem);
      window.localStorage.setItem(itemName, JSON.stringify(newItem));
    }
    return {
      item, 
      updateItem,
      loading,
      error
    };
}

export default useLocalStorage;