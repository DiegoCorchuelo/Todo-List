import { useState } from "react";


export function Tarea(props) {

    const {tarea, onActualizarTarea, onBorrarTarea} = props

    const [editando, setEditando] = useState(false)

    const [estaCompletada, setEstaCompletada] = useState(false)


    /* Componente*/
    function ModoEdicionActivado() {

        const [valor, setValor] = useState(tarea.tarea)

        function handleChange(e) {
            const text = e.target.value
            setValor(text)
        }

        function handleClick(e) {
            e.preventDefault()
            onActualizarTarea(
                {
                    id: tarea.id,
                    tarea: valor,
                    completado: false
                }
            )

            setEditando(false)
        }

        return(
            <>
            <div className="modifyButtonsInput">
            
                <input 
                    className="inputModify"
                    type="text"
                    onChange={handleChange}
                    value={valor} />
                <div className="buttonsModify">
                    <button 
                        className="btnSave"
                        onClick={handleClick}>
                        Save
                    </button>

                    <button 
                        className="btn btnBorrar"
                        onClick={() => onBorrarTarea(tarea.id)}>
                        Delete
                    </button>
                </div>
            </div>

            </>
        );
    }


    /* Componente*/
    function ModoEdicionDesactivado() {
        return(
            <>
            
                <span
                className={estaCompletada ? "todoTarea spanSubrayado" : "todoTarea"}
                onClick={() => setEstaCompletada(!estaCompletada)}>
                {tarea.tarea}</span>

                <div className="buttons">
                    <button 
                        className="btn btnEditar"
                        onClick={() => setEditando(true)}>
                        Update
                    </button>

                    <button 
                        className="btn btnBorrar"
                        onClick={() => onBorrarTarea(tarea.id)}>
                        Delete
                    </button>
                </div>

            </>
        );
    }


    return(
        <>
            <div className="contenedorTarea" id={tarea.id}>
                {
                    editando ? <ModoEdicionActivado /> : <ModoEdicionDesactivado />
                }
            </div>
        </>
    );
}