import React,{useEffect,useState} from 'react'
import { getPrograms } from '../Api/programs'
const ProgramList = ({input,handleChange}) => {


  const [data, setData] = useState([]);
  async function programList(){
    const {program,faculty} = await getPrograms();
    setData(program);
  }
  useEffect( ()=>{
    programList();
  },[data]);

  const filteredData = data.filter((programs) => {
    //if no input the return the original
    if (input === '') {
        return programs;
    }
    //return the item which contains the user input
    else {
        return programs.name.toLowerCase().includes(input);
    }
})

const handleClick = (program)=>{
  handleChange(program)
}
  return (
    <div style={{marginTop:'2px'}}className="program-list">
      
      <div>
        {filteredData.map((program) => (
          <div key={program.program_id} 
          style={styles.programCard}
          onClick={ ()=>handleClick(program)}
          >
            <img src="data:image/jpeg;base64,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" alt="Value" style={styles.image} />
            <div style={styles.programDetails}>
              <h3 style={{marginBottom:'0px'}}>{program.name}</h3>
              <p style={{marginTop:'0px'}}className='created'>Price:₹{Number(program.price)}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

const styles = {
  programCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0px',
    border: '1px solid #000000',
  },
  image: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    borderRadius:'30px'
  },
  programDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default ProgramList;
