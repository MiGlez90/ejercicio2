import React from 'react';

class ImagenLocal extends React.Component{
    render(){
        return(
            <img src={ require ('../img/Fixter-logo.png')} alt="ImagenLocal"/>
        );
    }
}

export default ImagenLocal;