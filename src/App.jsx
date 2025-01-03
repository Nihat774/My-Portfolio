import MyRoute from "./config/MyRoute";
import LayoutComponent from "./Layout/LayoutComponent";
import "./index.css";

function App() {
  return (
    <>
      <LayoutComponent>
        <MyRoute />
      </LayoutComponent>
    </>
  );
}

export default App;
