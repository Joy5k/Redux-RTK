import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import routes from "./routes/routes";
import { ToastContainer } from "react-toast";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
        <ToastContainer></ToastContainer>
      </Provider>
    </div>
  );
}

export default App;
