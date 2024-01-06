
function Animal(props) {
    return (
        <div>
            <div className="animal">
                <h2>{props.number}{props.animalName}</h2>
                <img src={props.animalPhoto} alt="" />
                <p>{props.animalDescription}</p>
            </div>
        </div>
    )
}

export default Animal