import { createContext, useReducer } from "react"; //!INVESTIGAR QUE ES

//*ThemeContext me va servir de intermediario para quenlos demas componentes se puedan comunicar
export const ThemeContext = createContext(); //creamos el contexto

//*useReducer -->
const INITIAL_STATE = { darkMode: false };

//*El parametro state recibe el estado previo y la funcion va a retornar el nuevo estado
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

//*dispatch recibe un action (que es un objeto { type: x } )

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
