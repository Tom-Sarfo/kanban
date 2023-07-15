import { useState, useContext } from 'react'
import './ProjectStyles/CreateProjectForm.css'
import MemberForm from './MemberForm'
import { useNavigate } from 'react-router-dom';
import { 
   ProjectDispatch 
  } from '../stateManagement/ProjectContext';

export default function CreateProjectForm() {
  const dispatch = useContext(ProjectDispatch)
  const [projectName, setProjectName] = useState('');
  const [ members, setMembers ] = useState([])
  const navigate = useNavigate()

  function handleDeleteMember(deletedTask){
    setMembers(members.filter(mem => mem.id !== deletedTask.id));
  }

  function handleCreateProject(){
    dispatch({
      type: "project_created",
      projectName: projectName,
      members: members
    });
    return navigate("/board/projects");
  }

  return (
    <div className="CreateProjectForm">
      <div className='side-color'></div>
       <div className='form'>
          <h2>Create a project</h2>
           <div>
             <input 
              type='text' 
              name='projectName' 
              id='projectNameId'
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)} 
              placeholder='Enter a Project Name'
              />
           </div>
           <MemberForm 
            members={members} 
            onHandleDeleteMember = {handleDeleteMember} 
            setMembers={setMembers}
           />
           <div>
            <button id='submit-btn' onClick={handleCreateProject}>Create</button>
           </div>
           <div>
           </div> 
       </div>
    </div>
  )
}
