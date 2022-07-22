import React,{useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { SetUser } from '../Redux/UserInfo'

const GetUserInfo = () => {
    const setuser = useDispatch()
    // get all users
    useEffect(()=>{
        const api = `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=company_413ef22b6237417fb1fba7917f0f69e7`
            axios.get(api, { headers: {"Authorization" :  ` Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTg0MzQ1ODAsIm5iZiI6MTY1ODQzNDU4MCwianRpIjoiODdiN2RkNzYtYWRmZC00ZWFkLWJiMDUtYWE5NDJmMWQ5MzA4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jWerdiSGRzlFWU-DfeHHuntikT1xVM9UwFXEi4ROc3w`} })
        .then(res => {
             setuser(SetUser(res.data.results) )  
        })
        },[setuser])
        
}

export default GetUserInfo