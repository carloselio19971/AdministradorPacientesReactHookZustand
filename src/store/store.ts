import {create} from 'zustand';
import {devtools , persist } from 'zustand/middleware';
import { DrafPatient, Patient } from '../types';
import {v4 as uuidv4 } from 'uuid';
type PatientState = {
    patients:Patient[]
    activeId:Patient['id'] | ''
    addPatient:(data:DrafPatient) => void
    deletePatiente:(id:Patient['id'])=>void
    getPatientById:(id:Patient['id'])=>void
    updatePatient:(data:DrafPatient)=>void
}
const createPatiente = (patient:DrafPatient):Patient =>{
        return {
            ...patient,
            id:uuidv4()

        }
}
export const usePatientStore =  create<PatientState>()
    (devtools(
     persist((set)=>({
        patients:[],
        addPatient: (data) => {
           const newPatient=createPatiente(data);
               set((state)=>({
                   patients:[...state.patients,newPatient]
               }))
        },
        activeId:'',
        deletePatiente:(id) =>{
           set((state)=>({
               patients:state.patients.filter(patient=> patient.id!==id)
           }))
        },
        getPatientById:(id)=>{
           set(()=>({
              activeId:id
           }))

        },
        updatePatient:(data)=>{
            set((state)=>({
                  patients: state.patients.map(patient=> patient.id === state.activeId ? {id:state.activeId, ...data}:patient),
                  activeId:''
            }))
        }
    }),{
        name:'patient-storage'
    })
))