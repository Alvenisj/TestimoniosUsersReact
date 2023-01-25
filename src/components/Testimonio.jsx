import '../stylesSheet/Testimonio.css';


export const Testimonio = ( props ) => {


  return (

    <div className='container-testimonio'>
        <img className="img-testimonio" 
             src={require(`../images/img-${props.img}.png`)}
              alt='Imagen de perfil'
         />

         <div className="container-text-testimonio">
            <p className='name-testimonio'><strong>{props.name}</strong> in {props.country}</p>
            <p className='cargo-testimonio'>{props.cargo} at <strong>{props.enterprise}</strong> </p>
            <p className='text-testimonio'>"{props.testimonio}".</p>
         </div>

    </div>
    
  );
}
