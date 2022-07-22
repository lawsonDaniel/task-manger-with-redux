import React from 'react'
import Style from '../Style/Style.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { AddDescripton,AddDate,Addtime } from '../Redux/form'
import { toggle } from '../Redux/isopen'
import axios from 'axios'

const Form = () => {
    const formdetails = useSelector((state)=> state.form.value)
    const Updateform = useDispatch()

    const onCancle = (e)=>{
        e.preventDefault()
        Updateform(AddDescripton(''))
        Updateform(AddDate(''))
        Updateform(Addtime(''))
        Updateform(toggle())
    }
    const onSubmitted = (e)=>{
        e.preventDefault()
        const url =" https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7"
        // conver clock time to seconds 
        const hm = formdetails.time;
        const [hours,minutes] = hm.split(':');
        const totalSeconds = (hours) * 60 * 60 + (minutes) * 60 ;
        console.log(totalSeconds);
        const data = {
                assigned_user: "user_4ee4cf67ad474a27988bc0afb84cf472", 
                task_date:formdetails.date ,
                task_time: totalSeconds,
                is_completed:0 ,
		        time_zone:19800 ,
                task_msg: formdetails.description
        }
        axios.post(url,data, {
            headers: {
                'authorization': ` Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTg0MzQ1ODAsIm5iZiI6MTY1ODQzNDU4MCwianRpIjoiODdiN2RkNzYtYWRmZC00ZWFkLWJiMDUtYWE5NDJmMWQ5MzA4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jWerdiSGRzlFWU-DfeHHuntikT1xVM9UwFXEi4ROc3w`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
           console.log(response)
            Updateform(toggle())
        })
        .catch((error) => {
           console.log(error)
        });
    }
  return (
    <form className={Style.form}>
        <div className={Style.formControl}>
            <label>Task Descripition</label>
            <input type="text" value={formdetails.description} onChange={(e)=>{
                Updateform(AddDescripton(e.target.value))
            }}/>
        </div>
        <div className={Style.flex}>
            <div  className={Style.formControl}>
                <label>Date</label>
                <input type="date" value={formdetails.date} onChange={(e)=>{
                Updateform(AddDate(e.target.value)) }}/>
            </div>
            <div  className={Style.formControl}>
                <label>Time</label>
                <input type="time"value={formdetails.time} onChange={(e)=>{
                Updateform(Addtime(e.target.value)) }}/>
            </div>
        </div>
        <div className={Style.formControl}>
            <label>Assign User</label>
            <input type="text"/>
        </div>
        <div className={Style.btnContainer}>
        <button onClick={onCancle}>Cancle</button>
        <button onClick={onSubmitted}>Submit</button>
        </div>
    </form>
  )
}

export default Form