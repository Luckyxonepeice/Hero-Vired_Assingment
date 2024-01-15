const API_URL = 'http://localhost:5000'

export async function getFaculty(){
    const result = await fetch(`${API_URL}/program/get-faculty`);
    return result.json();
}

export async function createFaculty(program,faculty){

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