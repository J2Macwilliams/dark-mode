import { useEffect } from 'react';
import  useLocalStorage  from './useLocalStorage';

function useDarkMode(key, initialValues)  {
    const [value, setValue] = useLocalStorage(key, initialValues)
    const body = document.querySelector('body');

    useEffect(() => {
        if(value) {
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue];

    
}
export default useDarkMode;