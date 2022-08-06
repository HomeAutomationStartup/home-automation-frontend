import Landing from "./Landing/Landing";
import UiLook from "./UiLook/UiLook";
import User from "./User/User";
import Contact from "./Contact/Contact";
import "./index.css";

const Index = () => {
  return (
    <div className="container">
      <Landing />
      <UiLook />
      <User />
      <Contact />
    </div>
  );
};

export default Index;
