import './button.css'

const alertFunction = (label) => {
    alert(`This button's label is '${label}'`)
}

const Button = ({label}) => {
    return (
        <button className="button" onClick= {() => alertFunction(label)}>
            {label}
            </button>
    )
}

export default Button