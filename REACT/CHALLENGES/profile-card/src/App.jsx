import Avatar from "./Components/Avatar.jsx";
import Intro from "./Components/Intro.jsx";
import SkillList from "./Components/SkillList.jsx";

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App
 