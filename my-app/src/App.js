import "./index.css";
import { useEffect, useState } from "react";
import Loginform from "./Loginform";
import RegistrationForm from "./RegistrationForm";
import Exe1 from "./component/Exe1";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  ToggleButton,
} from "react-bootstrap";

function App() {
  const [islogin, setIslogin] = useState(true);
  const [isregister, setIsregister] = useState(false);
  const [bgbtn2, setBgbtn2] = useState("primary");
  const [bgbtn1, setBgbtn1] = useState("success");

  let ShowRegisterBox = () => {
    if (!isregister) {
      setIsregister(true);
      setBgbtn2("success");
      setIslogin(false);
      setBgbtn1("primary");
    } else {
      setBgbtn1("primary");
      setBgbtn2("success");
    }
  };

  let ShowLoginBox = () => {
    if (!islogin) {
      setIslogin(true);
      setBgbtn1("success");
      setIsregister(false);
      setBgbtn2("primary");
    } else {
      setBgbtn1("success");
      setBgbtn2("primary");
    }
  };
  return (
    <>
      <Card className="mycard">
        <div>
          <ToggleButton
            className="w-50"
            type="submit"
            variant={bgbtn1}
            onClick={ShowLoginBox}
          >
            ورود
          </ToggleButton>
          <ToggleButton
            className="w-50"
            type="sumbit"
            variant={bgbtn2}
            onClick={ShowRegisterBox}
          >
            ثبت نام
          </ToggleButton>
        </div>
        <div>
          {/* {Object.keys(getData).map((item)=> console.log(item))} */}
          {islogin && <Loginform />}
          {isregister && <RegistrationForm />}
        </div>
      </Card>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mb-5">
            <Exe1 />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
