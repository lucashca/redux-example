import React from 'react'
import { PRODUCT_STATUS_ENUM } from '../../../util/enums'

import './statusBar.css'

export default function StatusBar({status}) {
    let statusBarClass = 'statusBar'
    switch (status){
        case PRODUCT_STATUS_ENUM.APROVADO:
            statusBarClass+=" green";
            break;
        case PRODUCT_STATUS_ENUM.REPROVADO:
            statusBarClass+=" red";
            break;
        case PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO:
            statusBarClass += " yellow";
            break;
        default:
            break;
    }

    return (
        <div className={statusBarClass}>
            
        </div>
    )
}
