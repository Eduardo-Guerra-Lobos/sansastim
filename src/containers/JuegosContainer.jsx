import React from 'react'
import JuegosForm from '../components/JuegosForm'


function JuegosContainer() {

    const handleCreate = (juego)=>{
        console.log("esta cuestion la llama el padre",juego);
    };
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4">
            <JuegosForm onCreateJuego={handleCreate} />
        </div>
        <div className="col-8">
            <h1>Aqui va la tabla cabres</h1>
        </div>
      </div>
    </div>
  )
}

export default JuegosContainer