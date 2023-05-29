import './index.css'

const AlertButton = ({label='Test'}) => {
    return <button className='alert-button' onClick= {() => alert(`This button's label is '${label}'`)}> {label} </button>
}

export default AlertButton