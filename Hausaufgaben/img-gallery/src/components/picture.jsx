import data from "../helper/data.js";

function Picture() {
  return (
    <>
      {data.map((photo, index) => (
        <div key={index} className="photo">
          <img src={photo.src.large} alt="foto" />
          <p>{photo.photographer}</p>
        </div>
      ))}
    </>
  );
}




export default Picture;
