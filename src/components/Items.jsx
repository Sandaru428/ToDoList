import tick from './assets/tick.png'
import non_tick from './assets/not_tick.png'
import cross from './assets/cross.png'

const Items = ({no, display, text, setTodos}) => {

    const deleteitem = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }

    const toggle = () => {
        let data = JSON.parse(localStorage.getItem('todos'));

        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === '') {
                    data[i].display = 'line-through';
                } else {
                    data[i].display = '';
                }
                break;
            }
        }

        setTodos(data);
    }

    return (
        <div className='items'>
            <div className={'items-container' } onClick={() => {toggle(no)}}>
            {display === '' ? <img src={non_tick} alt=''/> : <img src={tick} alt=''/>}
            <div className='items-text'>{text}</div>
            </div>
            <img className='cross-icon' onClick={() => {deleteitem(no)}} src={cross} alt='' />
        </div>
    )
}

export default Items
