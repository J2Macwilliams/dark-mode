import { useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key, initialValues, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValues)

    const handleChanges = e => {
        console.log(e.target.name);
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };

    return [values, handleChanges];

    
}