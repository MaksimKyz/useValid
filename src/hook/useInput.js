import {useState, useCallback, useEffect} from 'react';

const useValidate = (value,validations) =>{
    const [isEmpty,setEmpty] = useState(true)
    const [minLengthError,setMinLengthError] = useState(false)
    useEffect(()=>{
        for (const validation in validations){
            switch (validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) :setEmpty(true)
                    break;
            }
        }
    },[value])
    return {isEmpty, minLengthError}
}


const useInput = (initValue,validations) => {
    const [value, setValue] = useState(initValue);
    const [isDirty,setDirty] = useState(false)
    const valid = useValidate(value,validations)

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onBlue = () =>{
        setDirty(true)
    }

    return {
        value,
        onChange,
        setValue,
        ...valid,
        isDirty,
        onBlue
    };
};

export default useInput;