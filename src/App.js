import React, {FC} from 'react';
import useInput from "./hook/useInput";


const App = (props) => {
    const description = useInput('Описание',{isEmpty:true,minLength:3})
    return (
        <div>
            {(description.isDirty && description.isEmpty) && <div style={{color:"red"}}>Empty</div>}
            {(description.isDirty && description.minLengthError) && <div style={{color:"red"}}>Min</div>}
            <input value={description.value} onBlur={description.onBlue} onChange={description.onChange}/>
        </div>
    );
};

export default App;