export function Formulario(props) {

    const {tarea, handleSubmit, handleChange} = props

    return(
        
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add a todo" 
                onChange={handleChange}
                value={tarea }/>

                <input  
                type="submit"
                className="btn add"
                value="Add" 
                onClick={handleSubmit} />
            </form>

    );

}