import "./HomePage.css";
// import { Button } from "antd";
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <>
      <div className={"background"}>
        <div className="image"></div>
        <div className="welcome">
          <div>Welcome to Barbers4lyf </div>
          <br></br>
          <div>Our Mission</div>
          <div className="missionStatement">
            Encourage people that use the skill of barbering to lose any fear in
            their abilities and teach new capabilities for barbers to start
            other business ventures.
          </div>
        </div>
      </div>
      <div className="buttonPosition">
        <div>JoinTheTeam</div>
        {/* <Button className="button"></Button> */}
        <Button variant="primary">Primary</Button>{' '}
      </div>
    </>
  );
}
export default HomePage;
