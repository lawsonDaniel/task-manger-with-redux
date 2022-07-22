import React,{useState,useEffect}from 'react'
import Style from '../Style/Style.module.css'
import { useSelector } from 'react-redux'
import { toggle } from '../Redux/isopen'
import axios from 'axios'

const EditForm = ({i,setisopen}) => {
    const user = useSelector((state) => state.userinfo.value)

    const [task, settask] = useState({
        task_time: '',
        task_msg:'',
        task_date:'',
        user_name:''
    });
    
    // get taskid details{
    const taskid = user[i].id
    // getting the task
   useEffect(() => {
    const api = `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskid}?company_id=company_413ef22b6237417fb1fba7917f0f69e7`
    axios.get(api, { headers: {"Authorization" :` Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTg0MzQ1ODAsIm5iZiI6MTY1ODQzNDU4MCwianRpIjoiODdiN2RkNzYtYWRmZC00ZWFkLWJiMDUtYWE5NDJmMWQ5MzA4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jWerdiSGRzlFWU-DfeHHuntikT1xVM9UwFXEi4ROc3w`} })
        .then(res => {
            settask({
                task_time: res.data.results.task_time,
                task_msg:  res.data.results.task_msg,
                task_date: res.data.results.task_date,
                user_name: res.data.results.user_name
            })
         
            
        })

   }, [settask]);

    const onCancle = (e)=>{
        e.preventDefault()
        setisopen(false)
    }
    const onSubmitted = (e)=>{
        e.preventDefault()
        setisopen(false)
        // const url =" https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7"
        // // conver clock time to seconds 
        // const hm = formdetails.time;
        // const [hours,minutes] = hm.split(':');
        // const totalSeconds = (hours) * 60 * 60 + (minutes) * 60 ;
        // console.log(totalSeconds);
        // // form data
        // const data = {
        //         assigned_user: "user_4ee4cf67ad474a27988bc0afb84cf472", 
        //         task_date:formdetails.date ,
        //         task_time: totalSeconds,
        //         is_completed:0 ,
		//         time_zone:19800 ,
        //         task_msg: formdetails.description
        // }
        // axios.post(url,data, {
        //     headers: {
        //         'authorization': ` Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTg0MzQ1ODAsIm5iZiI6MTY1ODQzNDU4MCwianRpIjoiODdiN2RkNzYtYWRmZC00ZWFkLWJiMDUtYWE5NDJmMWQ5MzA4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jWerdiSGRzlFWU-DfeHHuntikT1xVM9UwFXEi4ROc3w`,
        //         'Accept' : 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => {
        //    console.log(response)
        //    Updateform(toggle())
        // })
        // .catch((error) => {
        //    console.log(error)
        // });
    }
    // logic to get the time
    let arr =[]
    var measuredTime = new Date(null);
    measuredTime.setSeconds(task.task_time); // specify value of SECONDS
    var MHSTime = measuredTime.toISOString().substr(11, 8);
    arr.push(MHSTime.split(":")[0])
    arr.push(MHSTime.split(":")[1])
   
    console.log(arr.join(':'))
  return (
    <form className={Style.form}>
        <div className={Style.formControl}>
            <label>Task Descripition</label>
            <input type="text" value={task.task_msg}/>
        </div>
        <div className={Style.flex}>
            <div  className={Style.formControl}>
                <label>Date</label>
                <input readOnly value={task.task_date} type="date" />
            </div>
            <div  className={Style.formControl}>
                <label>Time</label>
                <input readOnly value={arr.join(":")} type="time"/>
            </div>
        </div>
        <div className={Style.formControl}>
            <label>Assign User</label>
            <input readOnly type="text" value={task.user_name}/>
        </div>
        <div className={Style.btnContainer}>
        <button onClick={onCancle}>Cancle</button>
        <button onClick={onSubmitted}>Update</button>
        </div>
    </form>
  )
}

export default EditForm