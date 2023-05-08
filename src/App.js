import { Watermark } from "antd";
import "./App.css";
import Heading from "./components/Heading";
import LogInScreen from "./components/LogInScreen";
import MbdLogIn from "./components/MbdLogIn";
import Lotus from "./components/Lotus";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Watermark content="SOS">
      <div>
        <Heading />
        <LogInScreen />
        {/* <MbdLogIn/> */}
        {/* <Lotus/> */}
        <ToastContainer position='top-center' autoClose={3000} />
      </div>
    </Watermark>
  );
}

export default App;
