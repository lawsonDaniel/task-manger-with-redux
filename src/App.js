import AddComponent from './componnents/AddComponent';
import Form from './componnents/Form';
import Task from './componnents/Task';
import Style from './Style/Style.module.css'
import {useSelector} from 'react-redux'
import GetUserInfo from './componnents/GetUserInfo';

function App() {
  const isopen = useSelector((state) => state.isopen.value)

  return (
   <>
   <div className={Style.card}>
    <AddComponent/>
   {isopen && <Form/>}
   <GetUserInfo/>
  {!isopen && <Task/>} 
   </div>
   </>
  );
}

export default App;
