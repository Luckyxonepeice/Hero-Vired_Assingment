import API from './API_URL'
const API_URL = `${API}`

export async function createDraftProgram(program,faculty){

    const data = {...program, faculty:faculty};

    const result = await fetch(`${API_URL}/draftprogram/create-draftprogram`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    return await result.json();
}

export async function getDraftPrograms(){
    
    const result = await fetch(`${API_URL}/draftprogram/get-draftprogram`);
    return result.json();
}


export async function deleteDraftProgram(program_id){
    const response = await fetch(`${API_URL}/program/delete-program/${program_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },

    });

    return response.json();
}