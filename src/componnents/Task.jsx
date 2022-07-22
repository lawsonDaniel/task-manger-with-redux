import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Style from '../Style/Style.module.css'
import EditForm from './Editform'

const Task = () => {
  const user = useSelector((state) => state.userinfo.value)
  const [index, setindex] = useState(0);
  const [isopen,setisopen] = useState(false)
  return (
    <div>
  
        {
          user.map((users,i)=>{
            return(
             
              !isopen &&  <div className={Style.taskcontainer} key={users.id}>
              <div className={Style.taskinfo}>
               <span>{users.task_msg}</span>
               <span>{users.task_date}</span>
              </div>
              <div>
              <span className="material-symbols-outlined" onClick={()=>{
               setindex(i)
               setisopen(true)
              }}>
                 edit
               </span>       
              </div>
             </div>
             
            )
          })
        }
        {isopen && <EditForm i={index} setisopen={setisopen}/>}
    </div>
  )
}

export default Task