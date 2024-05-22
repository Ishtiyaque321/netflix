import { Provider } from "react-redux";
import Body from "./components/Body.js"
import appStore from "./utils/appStore.js";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
