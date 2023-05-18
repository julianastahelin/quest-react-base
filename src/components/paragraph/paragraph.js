import './paragraph.css'

const ToUpperCase = (text) => {
        return (
            <>
            {text.toUpperCase()}
            </>
        )
}

const Paragraph = ({text, color}) => {
    return (
        <p className="paragraph" style={{ color: color }}>
        {ToUpperCase(text)}
        </p>
    )
}

export default Paragraph