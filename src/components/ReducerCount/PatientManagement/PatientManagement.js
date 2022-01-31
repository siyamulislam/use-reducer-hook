import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer, useRef } from 'react';
import {  patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const [state,dispatch]= useReducer(patientReducer,patientState);
    const nameRef = useRef();
    const handelOnSubmit= (event)=>{
        event.preventDefault();
        dispatch({type:'ADD_PATIENT',
        id:state.patients.length+1,
        name:nameRef.current.value,
        });
        nameRef.current.value=''
    }
    return (
        <div>
            <h1>Manage Patient Chamber:{state.patients.length}</h1>  
            <form onSubmit={handelOnSubmit}>
                <input ref={nameRef} type="text" />
            </form>
            { 
                state.patients.map(pt=>{
                   return <p key={pt.id}
                   onClick={()=>dispatch({type:'Remove_PATIENT',id:pt.id})}
                   >{pt.id+": "+ pt.name}</p>
                })
            }
        </div>
    );
};

export default PatientManagement;