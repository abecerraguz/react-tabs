import React, {useState} from 'react';

const Formgenerator = ({newSendBg}) => {

    const [ bgcolor, setBgcolor ] = useState();
    const [ dimension, setDimension ] = useState();
    const [ error, setError ] = useState(false);
  
    const handleGetData = (event) => {

        event.preventDefault();
        let getBgValue = event.target.value
        getBgValue.trim();

        const val = event.target.value;
        if (val.length < 2){
            setError(true)
        }else{
            setError(false)
            setBgcolor(getBgValue)
        }
       
    }

    const handleGetDatadimension = (event) => {

        event.preventDefault();
        let getBgValue = event.target.value
        getBgValue.trim();

        const val = event.target.value;
        if (val.length < 2){
            setError(true)
        }else{
            setError(false)
            setDimension(getBgValue)
        }
       
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(bgcolor !== undefined){
            newSendBg({bgcolor,dimension});
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div>
             <form className="contentForm" onSubmit={handleSubmit}>
                <div className="contentForm__group">
                    <label>Color</label>
                    <input 
                     type="text"
                     placeholder="Ingrese Color" 
                     className="form-control" 
                     name="IngreseColor" 
                     onChange={handleGetData}
                     id="IngreseColor"
                     />
                      <input 
                      className="number" 
                      id="tamaño" 
                      name="tamaño" 
                      type="number" 
                      placeholder="42"
                      onChange={handleGetDatadimension}
                      />
                </div>
                {error?
                <span className="validation-errors" dangerouslySetInnerHTML={{ __html:'Debe ingresar un color'}}></span>
                :
                null
                }
                <button type="submit" 
                    className="contentForm__btn">
                    Add
                </button>
            </form>

        </div>
    );
}

export default Formgenerator;
