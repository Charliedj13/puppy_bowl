import { Link } from "react-router-dom"
import { useState } from "react"

const AllPuppies = (props) => {
    const [search, setSearch] = useState("");

    let filteredPuppies = props.puppyProps.filter((singlePuppyElement) => {
        let lowercaseName = singlePuppyElement.name.toLowerCase();
        // console.log(lowercaseName)

        return lowercaseName.includes(search.toLowerCase())
    })
    console.log(props)


    return (
        <div className="All">
            <input type="text"placeholder="Search Puppies here..." onChange={(event)=> {
                setSearch(event.target.value)
            }}></input>
            
            <h2 id="h2-tag"> All Puppy Players: </h2>
             
            <section>
            {
            filteredPuppies.length ? filteredPuppies.map((singlePuppyElement, index) => {
                // console.log(singlePuppyElement)
                return (  
                    <div key={index} className="AllElements">
                        <h1>Name: {singlePuppyElement.name}</h1>
                        <h3><Link to={`/puppies/${singlePuppyElement.id}`}>See More Details about {singlePuppyElement.name} </Link></h3>
                        <img id="puppy-img" src={singlePuppyElement.imageUrl}></img>

                        
                    </div> 
                )
            }) : <div> No data yet...</div>
            } 
            </section>
        </div>
    )
}

export default AllPuppies;