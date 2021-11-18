import { Component, createContext } from "react";

const Context = createContext('mi valor');

const Provider = ({ children }) => {
    return (
        <Context.Provider value={'otro valor'}>
            {children}
        </Context.Provider>
    );
}

class Componente extends Component {
    // primera forma
    static contextType = Context;
    render(){
        console.log(this.context);
        return(
            <div>Hola mundo</div>
        );
    }
}

const App = () => {
    return(
        <Provider>
            <Componente/>
        </Provider>
    );
}

export default App;