import './Login_Input.css';
import {useRef} from "@types/react";

function Login_Input(props) {
    const Description = useRef(null) //объявляем переменную
    let Inp=()=>{
        props.users(Description.current.value);
        console.log();
        // console.log(Description.current.value);
    }

    return (

        <div className='Login_Input'>
            <div className='allignright'>
            <form action="">
                <input type="text"/>
                <br/>
                <br/>
                <input type="text"/>
                <br/>
                <br/>
                <input value="Проверить пользователя" type="button"onClick={Inp}/>
                <br/>
                <br/>
                <button type='button' >Отправить</button>
            </form>
            </div>
        </div>
    )
}



export default Login_Input;


