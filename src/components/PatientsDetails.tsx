import { toast } from "react-toastify"
import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import { PatientDetailsItem } from "./PatientDetailsItem"



type PatientsDetailsProps={
    patient:Patient
}

export const PatientsDetails = ({patient}: PatientsDetailsProps) => {

  
  const {id,name,caretaker,email,date,symptoms}= patient

  const deletePatiente = usePatientStore((state)=> state.deletePatiente)
  const getPatientById= usePatientStore((state)=>state.getPatientById);
  
  const handelClick = () => {
        deletePatiente(id)
        toast('Paciente Eliminado',{
           type:'error'
        } )
  }
  
  return (
           <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

                <PatientDetailsItem label="ID" data={id}/>
                <PatientDetailsItem label="Nombre" data={name}/>
                <PatientDetailsItem label="Propietario" data={caretaker}/>
                <PatientDetailsItem label="Email" data={email}/>
                <PatientDetailsItem label="Fecha Alta" data={date.toString()}/>
                <PatientDetailsItem label="Sitomas" data={symptoms}/>

                <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
                    <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={()=>getPatientById(id)}
                    > Editar</button>
                      <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handelClick}
                    > Eliminar</button>
                </div>
           </div>
  )
}
