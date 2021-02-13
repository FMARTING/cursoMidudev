const Mensajes = (props) => {
    console.log(props)
    return  (
        <div> 
            <h1 style={{color: props.color}}>BetoYPelu empezando</h1>
            <h2> Aprendiendo React para el proximo emprendimiento</h2>
            <p>usando un modulo</p>
            <p>{props.msg}</p>
        </div>
    )
}
  export default Mensajes