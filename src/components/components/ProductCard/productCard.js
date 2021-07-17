import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeProductAction } from '../../../store';
import Title from '../../atoms/title/title'
import StatusBar from '../StatusBar/statusBar';

import './productCard.css';


function ProductCard({id,name,img,status,removeProductProducts}) {

    console.log("Vstido",status)

    function removeProduct(){
        removeProductProducts(id);
    }
    return (
        <div className={"productCardBox"}>
            <div className={"titleBox"}>
                <Title title={name}/>{id}
                <button type="button" style={{color:"red", marginLeft:"5px"}} onClick={removeProduct}>X</button>
            </div>
            <div className={"productCardImgBox"}>
                <StatusBar status={status}/>  
                <img className={"productCardImg"} src={img} alt={img}></img>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return { removeProductProducts: bindActionCreators(removeProductAction, dispatch) }
}
export default connect(null, mapDispatchToProps)(ProductCard);

