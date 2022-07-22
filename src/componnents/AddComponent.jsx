import React from 'react'
import Style from '../Style/Style.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { toggle } from '../Redux/isopen'

const AddComponent = () => {
    const isopen = useSelector((state) => state.isopen.value)
    const user = useSelector((state) => state.userinfo.value)
    const dispach = useDispatch()
  return (
    <div className={Style.CardHeader}>
        <div>Task</div>
        <div>{user.length}</div>
        <span className="material-symbols-outlined" onClick={()=>{
            dispach(toggle())
            console.log(isopen)

        }}>
        add
        </span>
    </div>
  )
}

export default AddComponent