//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

import "./Main.css"
import kediImage from "./img/kedi.jpg"


const Main = () => {
    //! JS alani

    //? local ve global degiskeni
    const headerStyle = {
        color: "hotpink",
        backgroundColor: "gray",
        fontSize: "1.2rem"
    }

    return <main>
    {/*JSX alani */}
    {/* Inline CSS (key-value) notasyon olrak camelCase */}
        <h2 style={{color: "red", backgroundColor: "gray"}}>MAIN SECTION</h2>

        <h3 style={headerStyle}>Other header</h3>

        <p style={headerStyle}>Lorem, Ipsum</p>


        {/* External CSS'den stil geldi */}
        <p className="par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, maiores quam quis quae est consectetur!</p>

        <p  className="par">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eum delectus accusantium magni voluptates natus.</p>

        <div>
            <img className="img" src="https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_1280.jpg" alt="" />


            <img className="img" src="https://cdn.pixabay.com/photo/2023/11/12/02/17/bird-8382118_960_720.jpg" alt="" />


            <img id="img-id" src="https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578205_960_720.jpg" alt="" />
        </div>

        {/* Lokal ortamımızda buluna bir resmi dogrudan path vererek cagiramayiz. Bunun yerine import yaparız */}
        <img className="img" src={kediImage} alt="kedi" />

        {/* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. Ana dizin) */}
        <img className="img" src="./img/birds.webp" alt="bird" />

    </main>
  }
  
  export default Main