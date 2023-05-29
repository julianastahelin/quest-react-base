import './index.css'

const ToUpperCase = (text) => {
        return (
            <>
            {text.toUpperCase()}
            </>
        )
}

const StyledText = ({text, color}) => {
    return <p className="styled-text" style={{ color: color }}> {ToUpperCase(text)} </p>
}

export default StyledText