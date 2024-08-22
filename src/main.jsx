import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* to make the sotore globally accessible */}
    {/* Here store is the name of store we created inside store.js */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
