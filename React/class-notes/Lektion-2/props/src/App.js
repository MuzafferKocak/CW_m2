// ? deafult exportun importu, istediğimiz isimle import edebiliriz
// import MyCat from "./components/Cat";
import Cat from "./components/Cat.jsx";

function App() {
  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat
        name="Cenitin"
        img="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
        color="grey"
        // isBlueEyed={true}
        isBlueEyed
      />
      <Cat
        name="Garfield"
        img="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
        color="blue"
        isBlueEyed={false}
      />
      <Cat
        name="Serefattin"
        img="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
        isBlueEyed={false}
      />
      
      {/* <MyCat /> */}
    </div>
  );
}

export default App;
