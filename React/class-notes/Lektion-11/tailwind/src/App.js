import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typografy from "./components/Typografy";



function App() {
  return (
    <div className="App">
    <Navbar/>
    <h1>Hello Tailwind</h1>

    {/* <Typografy/> */}
    {/* <SpacingAndSizing/> */}
    {/* <HoverAndFocus/> */}
    {/* <FlexAndResponsive/> */}
    <ProfileCard/>
      
    </div>
  );
}

export default App;
