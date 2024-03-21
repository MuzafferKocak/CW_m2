import Picture from "../components/picture"

function Homepage() {
    return (
      <div className="container">
        <h1>Image Gallery</h1>
        <div className="gallery">
            {Picture()}
        </div>
      </div>
    )
  }


  
  
export default Homepage