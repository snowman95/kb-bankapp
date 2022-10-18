import { ThemeProvider } from "@emotion/react";
import store from "modules";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import theme from "styles/theme";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
