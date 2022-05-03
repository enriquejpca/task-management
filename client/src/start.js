import ReactDOM from "react-dom";
import App from "./app";

import { Provider } from "react-redux";
import store from "./redux/store";

//Chakra UI
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <ColorModeScript initialColorMode="light" />
            <App />
        </ChakraProvider>
    </Provider>,
    document.querySelector("main")
);
