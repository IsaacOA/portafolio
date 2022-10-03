import { useContext } from "react";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";
import { Toggle } from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  //PARA EL CASO DE ESTA APLICACION SENCILLA PODEMOS UTILIZAR USESTATE Y PASARLO COMO PROPS A LOS DEMAS COMPONENTES
  //BUT I AM GONNA USE CONTEXAPI
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
