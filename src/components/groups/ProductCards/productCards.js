import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import { addProductAction, removeProductAction } from '../../../store'
import ProductCard from '../../components/ProductCard/productCard'

import "./productCards.css"


function ProductCards(props) {
    return (
        <> 
        <div className={"productCardsBox"}>
            {props.products && props.products.map((p,idx)=>(<ProductCard key={idx} {...p}/>))}
        </div>
       
        </>
    )
}


function mapStateToProps(state) {
	return {
		products: state.products,
    }
}

function mapDispatchToProps(dispatch) {
    return { removeProductProducts: bindActionCreators(removeProductAction, dispatch) }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductCards);

