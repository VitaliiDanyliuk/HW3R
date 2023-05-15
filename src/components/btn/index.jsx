function Btn ({value, className, eventFN}) { 
    return (
        <button type="button" className={className} onClick={eventFN}>
            {value}
        </button>
    )
}

export default Btn;