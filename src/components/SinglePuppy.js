import { useParams } from "react-router-dom"


const SinglePuppy = (props) => {
    const { id } = useParams();
    // console.log("Here is our singlePuppy component id:" + id);
    // console.log(id, "Id console log")
    // console.log(props.puppyProps)
    // console.log (props.puppyProps)

    let puppyData = props.puppyProps.filter(findPuppyWithId)
    // console.log(puppyData, "This is the filtered puppy")
    function findPuppyWithId (singlePuppyElement) {
        // console.log(singlePuppyElement, "Is this working")
        if (singlePuppyElement.id == id) {
            return singlePuppyElement
        }
    }
    // console.log(puppyData[0])


    
    
    return (
        <div>
            <div>
                <h1 id="details">Details about {puppyData[0].name}</h1>
                 <p className="text">Breed: {puppyData[0].breed}</p>
                 <p className="text">Status: {puppyData[0].status}</p>
                 <p className="text">Puppy Id: {puppyData[0].id}</p>
                 {/* <img src={puppyData[0].imageURL}/> */}
                <img className="text" id="puppyimg" src={puppyData[0].imageUrl}></img>
                {/* <h4>Name: {props.puppyProps[puppy].name}</h4>
                <h4>Breed: {props.puppyProps[id].breed}</h4>
                <h4>Status: {props.puppyProps[id].status}</h4> */}
            </div>
        </div>
    )
}
//name, breed, status, imageURL

export default SinglePuppy;