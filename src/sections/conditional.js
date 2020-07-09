import React, { Component } from 'react';

class LoginButton extends Component{
    render(){
        return (
            <button>Iniciar Sesión</button>
        );
    }
}
class LogoutButton extends Component{
    render(){
        return (
            <div>
                <p>Bienvenido, usuario!</p>
                <button>Cerrar sesión</button>
            </div>
        );
    }
}

// function useConditionalRendering(mostrarA){
//     if(mostrarA){
//         return <ComponenteA />
//     }else{
//         return <ComponenteB />
//     }
// }

export default class ConditionalSection extends Component{

    constructor(){
        super();
        this.state = {
            isUserLogged: true
        }
    }

    render(){
        // const conditionalComponent = useConditionalRendering(this.state.mostrarA);
        // const conditionalComponent = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />

        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/* {conditionalComponent} */}
                {this.state.isUserLogged ? <LoginButton /> : <LogoutButton />}
            </div>
        );
    }

}
  