import API from './API_URL'
const API_URL = `${API}`

export async function getFaculty(){
    const result = await fetch(`${API_URL}/program/get-faculty`);
    return result.json();
}

export async function createProgram(program,faculty){

    const data = {...program, faculty:faculty};

    const result = await fetch(`${API_URL}/program/create-programs`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    return await result.json();

}

export async function getPrograms(){
    const result = await fetch(`${API_URL}/program/get-programs`);
    return result.json();
}

export async function updateProgram(program,faculty){
    const data = {...program, faculty:faculty};

    const result = await fetch(`${API_URL}/program/update-program`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    return await result.json();
}

export async function deleteProgram(program_id){
    const response = await fetch(`${API_URL}/program/delete-program/${program_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },

    });

    return response.json();
}