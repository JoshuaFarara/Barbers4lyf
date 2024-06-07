import { Button } from "antd";
import "./AboutPage.css";

function AboutPage() {
    return (
        <div className={"background"}>
          <div className="image"></div>
          <div className="welcome">
            <div>About Barbers4lyf </div>
            <br></br>
            <Button className="ourMission">
             Our Mission
            </Button>
            <br></br>
            <Button className="aboutTheCreators">
             About the creators
            </Button>
            <br></br>
            <Button className="fAQ">
             FAQ
            </Button>
            <br></br>
            <Button className="help">
             help
            </Button>
          </div>
        </div>
    );
  }
  export default AboutPage;