import './Login_Input.css';


function Login_Input() {

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
                    <input value="Проверить пользователя" type="button" />
                    <br/>
                    <br/>
                    <button type='button' >Отправить</button>
                </form>
            </div>
        </div>
    )
}



export default Login_Input;
