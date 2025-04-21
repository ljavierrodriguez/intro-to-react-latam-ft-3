/* 

componentes funcionales
componentes clases

*/

class Home {
    render(){
        {/* JSX */}
        return (
            <h1>Hola Mundo</h1>
        )
    }
}

function Home(){
    return (
        <h1>Hola Mundo</h1>
    )
}

<Home />

function ElementoLista(props){ // { texto: 'Elemento Lista' }
    return (
        <li>{props.texto}</li>
    )
}

function Lista(){
    return (
        <ul>
            <ElementoLista texto="Elemento Lista" />
            <ElementoLista texto="Elemento Lista" />
            <ElementoLista texto="Elemento Lista" />
            <ElementoLista texto="Elemento Lista" />
        </ul>
    )
}

<ul>
    <li>Elemento Lista</li>
    <li>Elemento Lista</li>
    <li>Elemento Lista</li>
    <li>Elemento Lista</li>
</ul>

<input type="text" placeholder="Prueba" />
