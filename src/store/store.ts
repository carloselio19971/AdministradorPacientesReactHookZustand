import {create} from 'zustand';
import { DrafPatient, Patient } from '../types';
import {v4 as uuidv4 } from 'uuid';
type PatientState = {
    patients:Patient[]
    addPatient:(data:DrafPatient) => void
}

const createPatiente = (patient:DrafPatient):Patient =>{
        return {
            ...patient,
            id:uuidv4()

        }
}


export const usePatientStore =  create<PatientState>((set)=>({
     patients:[],
     addPatient: (data) => {
        const newPatient=createPatiente(data);
            set((state)=>({
                patients:[...state.patients,newPatient]
            }))
     }
}))