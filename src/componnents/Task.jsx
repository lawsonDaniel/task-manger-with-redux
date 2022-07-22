import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Style from '../Style/Style.module.css'
import EditForm from './Editform'
import axios from 'axios'

const Task = () => {
  const user = useSelector((state) => state.userinfo.value)
  const [index, setindex] = useState(0);
  const [isopen,setisopen] = useState(false)
   
  const Delect =(i)=>{
   const api = `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${user[i].id}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`
   axios.delete(api, { headers: {"Authorization" : `  Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTg0MzQ1ODAsIm5iZiI6MTY1ODQzNDU4MCwianRpIjoiODdiN2RkNzYtYWRmZC00ZWFkLWJiMDUtYWE5NDJmMWQ5MzA4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jWerdiSGRzlFWU-DfeHHuntikT1xVM9UwFXEi4ROc3w`} })
        .then((res)=>{
          console.log(res)
        })
  }
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
               <span className="material-symbols-outlined" onClick={()=>{
                Delect(i)
               }}>
                delete
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