export const patientState = {
    patients: [{ id: 1, name: 'Salam' }]
}

export const patientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = { id: action.id, name: action.name }
            const updatePatient = [...state.patients, newPatient]
            return { patients: updatePatient };
        case 'Remove_PATIENT':
            console.log(action);
            const remainPatient=state.patients.filter(pt=> pt.id!==action.id) 
            const newState= {patients: remainPatient}
            return newState ;
        default: return state;
    }
}