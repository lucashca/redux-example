import { createStore } from "redux";


const ACTION_TYPES_ENUM = {
    ADD_PRODUCT:'ADD_PRODUCT',
    REMOVE_PRODUCT:'REMOVE_PRODUCT',
}

const INITIAL_STATE = {
    products: []
}

const reducer = (store = INITIAL_STATE, action)=>{
    switch(action.type){
        case(ACTION_TYPES_ENUM.ADD_PRODUCT):
            return { ...store, products:[...store.products, {...action.data,id:store.products.length}]}
        case(ACTION_TYPES_ENUM.REMOVE_PRODUCT):
            let idx = store.products.findIndex((obj)=>obj.id === action.data)
            console.log(idx);
            store.products.splice(idx,1);
            return { ...store, products:[...store.products]}
        default :
            return store;

    }
}

const store = createStore(reducer);

export function addProductAction(data){
    return {type:ACTION_TYPES_ENUM.ADD_PRODUCT, data}
}

export function removeProductAction(data){
    return {type:ACTION_TYPES_ENUM.REMOVE_PRODUCT, data}
}


export default store;