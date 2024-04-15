import { Outlet, useNavigate } from "react-router-dom"

const AWS = () => {
    const navigate = useNavigate("")
    return (
      <div className="mt-4 text-center">
        <h1 className="display-6 text-warning">AWS/DevOps Path</h1>
        <p>
          We prepare you for AWS DevOps certifications. Our graduates land the
          best IT jobs!
        </p>


        <Outlet/>
        <button className="btn btn-warning w-50" onClick={()=> navigate("azure")}>Azure</button>
        <button className="btn btn-warning w-50" onClick={()=> navigate("google")}>Google</button>
        <img
          src="https://clarusway.com/wp-content/uploads/elementor/thumbs/Aws-Solution-Architech-1-pmxc3z6r0ibsy5uixyzfrgrdilrq8nu5yid937d8w8.jpg"
          alt=""
        />
        <div>
          <button className="btn btn-outline-warning mt-4">Learn More</button>
        </div>
      </div>
    )
  }
  
  export default AWS