import './TestProps.css';
import {useRef} from "react";
import Inventory_record from "../inventory_record/inventory_record";



function TestProps(props){
    const Description = useRef(null) //объявляем переменную
    const val2 = useRef(null)
    let Send=()=>{
        props.callSend(Description.current.value, val2.current.value);
        console.log(Description.current.value);
    };
    var value_komponents=[];
    for (var key in props.inventory){
        value_komponents.push(<Inventory_record name={key} count={props.inventory[key]}/>)
    };
        console.log(props);
    return (
        <div className='allign'>
            {value_komponents}

            <form action="">

                <label>Добавить новый продукт</label>
                <br/>
                <input ref='val2' type="text"/>
                <br/>
                <label>Введите количество:</label>
                <br/>
                <textarea ref={Description} rows='4'/>
                <br/>
                <button type='button' onClick={Send}>Отправить</button>  //функция
            </form>


        </div>

);

}

export default TestProps;


