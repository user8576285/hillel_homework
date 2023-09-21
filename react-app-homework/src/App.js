import "./App.css";
// import Button from "./components/button/button";
import CourseCard from "./components/button/CourseCard/Card";

const courses = [
  {
    id: 1,
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Intermediate",
    title: "Introduction Basic Programming HTML & CSS",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "John Doe",
    },
    rating: 4.5,
    students: 1234,
    modules: 5,
    duration: 5400,
    isMyCource: false,
  },
  {
    id: 2,
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Intermediate",
    title: "Introduction Basic Programming HTML & CSS",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "John Doe",
    },
    rating: 4.5,
    students: 1234,
    modules: 5,
    finishedModules: 3,
    duration: 5400,
    isMyCource: true,
  },
];


function App() {

  // const onSave = () => console.log("Save");
  // const onCancel = () => console.log("Cancel");
  // const alert1 = () => alert("Вийди отсюда разбийнык ")
  return (
    <div>

      {/* 
      <Button text="Save" handleClick={onSave}></Button>
      <Button text="Cancel" handleClick={onCancel}></Button>
      <Button text="Нажми на меня ٩(｡•́‿•̀｡)۶" handleClick={}/> */}
      {/* <CourseCard /> */}
      <div className="App">
        {courses.map((props) => (
          <CourseCard key={props.id} props={props} />
        ))}
      </div>


    </div>
  );
}


export default App;