import "./App.css";
import Button from "./components/button";

function App() {

  const onSave = () => console.log("Save");
  const onCancel = () => console.log("Cancel");
  return (
    <div>
      

      <Button text="Save" handleClick={onSave}></Button>
      <Button text="Cancel" handleClick={onCancel}></Button>



    </div>
  );
}


export default App;