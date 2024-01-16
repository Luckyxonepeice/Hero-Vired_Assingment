import React, { useEffect, useState } from 'react';
import Firstrow from './Firstrow';
import Secondrow from './Secondrow';
import Thirdrow from './Thirdrow';
import Button from '@mui/material/Button';
import { FaTrashCan } from "react-icons/fa6";
import { IoSave } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { RiSave2Fill } from 'react-icons/ri';
import { getFaculty, createProgram,updateProgram,deleteProgram} from '../Api/programs';
import { createDraftProgram , deleteDraftProgram} from '../Api/draftprogram';


const Form = ({ input,editMode,setEditMode,faculty_id,setFaculty_id}) => {
  const [formData, setFormData] = useState({ ...input });
  const [faculty, setFaculty] = useState([]);



  async function facultyList() {
    const result = await getFaculty();
    setFaculty(result);
  }

  useEffect(() => {
    facultyList();
  }, []);

  useEffect(() => {
    // Update formData whenever the input prop changes
    setFormData({ ...input });
  }, [input]);

  const handleChange = (e) => {
    if (editMode) {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (formData.program_id === null) {
      // If program_id is null, it's a new program, so call createProgram
      const {result,Error} = await createProgram(formData, faculty_id);
      if(Error){
        alert(Error);
       }else{
        alert(result);
       }
      setEditMode(false);
    } else {
      
      const {result,Error} = await updateProgram(formData, faculty_id);
      alert(result);
      // If program_id exists, it's an existing program, so call updateProgram
      setEditMode(false); 
    }
  };

  const handleDeleteClick = async () => {

    if(formData.program_id==null) return;

    if (window.confirm('Are you sure you want to delete this program?')) {
       const {result,Error} = await deleteProgram(formData.program_id); 
       if(Error){
        alert(Error);
       }else{
        alert(result);
       }
        
    }
  };
  const handleSaveAsDraft = async () => {
    // Implement your draft saving logic here
    await createDraftProgram(formData, faculty_id);
    alert('Saved as Draft');
  };
  

  const handleUpdateClick = () => {
    setEditMode(true);
  };

  return (
    <div className="programs-form-container">
      <form onSubmit={handleSubmit}>
        <Firstrow
          handleChange={handleChange}
          formData={formData}
          editMode={editMode}
        />
        <Secondrow
          handleChange={handleChange}
          formData={formData}
          editMode={editMode}
        />
        <Thirdrow
          handleChange={handleChange}
          formData={formData}
          faculty={faculty}
          setFaculty_id={setFaculty_id}
          editMode={editMode}
          faculty_id={faculty_id}
        />

        <div className="form-row">
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              disabled={!editMode} // Disable if not in edit mode
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              disabled={!editMode} // Disable if not in edit mode
            />
          </label>
          <label>
            Eligibility Criteria:
            <input
              name="eligibility_criteria"
              value={formData.eligibility_criteria}
              onChange={handleChange}
              disabled={!editMode} // Disable if not in edit mode
            />
          </label>
        </div>

        <div className="form-row">
          <label
            style={{ display: "block", width: "150px", marginBottom: "5px" }}
          >
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              cols={25}
              style={{ width: "300px", resize: "none", margin: "5px 0" }}
              disabled={!editMode} // Disable if not in edit mode
            />
          </label>
        </div>

        <div className="form-row">
          {!editMode && (
            <Button onClick={handleUpdateClick} variant="outlined">
              Update <RxUpdate />
            </Button>
          )}
          {editMode && (
            <Button onSubmit={handleSubmit} type="submit" variant="outlined">
              Save <IoSave />
            </Button>
          )}
          {editMode && (
              <Button
                onClick={handleDeleteClick}
                variant="outlined"
                style={{ marginLeft:'5px',color: "red" , borderColor:'red'}}
              >
                Delete <FaTrashCan />
              </Button>
          )}
          {editMode && (
            <Button
              onClick={handleSaveAsDraft}
              variant="outlined"
              style={{ marginLeft: '5px' }}
            >
              Save Draft <RiSave2Fill />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
