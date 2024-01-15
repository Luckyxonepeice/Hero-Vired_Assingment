import React,{useEffect,useState} from 'react'
import ProgramList from './Programlist'
import SearchBar from './SearchBar'
import { getPrograms } from '../Api/programs'
import { getDraftPrograms } from '../Api/draftprogram'
export default function Cardpro({handleProgramClick,showDraft}) {

//  console.log(handleProgramClick)
  const [data, setData] = useState([]);
  const [draftData, setDraftData] = useState([]);
  async function programList(){
    const {program,faculty} = await getPrograms();
    setData(program);
  }

  async function DraftprogramList(){
    const {program,faculty} = await getDraftPrograms();
    setDraftData(program);
  }
  useEffect(() => {
    programList();
  }, [data]); // Run only when 'data' changes

  useEffect(() => {
    DraftprogramList();
  }, [draftData]);


  function handleChange(program){
    handleProgramClick(program)
  }
  return (
    <div className="program-items">
        <SearchBar handleChange={handleChange} data={data} draftData={draftData}
        showDraft={showDraft}/>
    </div>
  )
}
