import { usePatientStore } from "../store/store"
import { PatientsDetails } from "./PatientsDetails";


export const PatientList = () => {

  const patients= usePatientStore(state=>state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
          <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administras tus {''}
          <span className="text-indigo-600 font-bold">Paciente y Citas</span>
          </p>
          {patients.map(patient =>(
              <PatientsDetails
              key={patient.id}
              patient={patient}
              
              />
          ))}
    
          </>
         
        ): (<>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center"> Comienza Agregando Pacientes {' '}
            <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
          </p>
        </>)} 
    </div>
  )
}
