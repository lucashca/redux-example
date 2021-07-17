import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductAction } from '../../store';
import { PRODUCT_STATUS_ENUM } from '../../util/enums';

let productsSet = [
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido Nude", img:'https://i.pinimg.com/564x/ea/5c/0f/ea5c0fd7defb3243088e15e51727286b.jpg'},
    {status:PRODUCT_STATUS_ENUM.REPROVADO, name:"Vestido Verde", img:'https://s3.us-east-1.amazonaws.com/megamoda.smserver.com.br/vestido-longo_2360.jpeg'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Azul", img:'https://images.tcdn.com.br/img/img_prod/699026/vestido_longo_manga_7_8_azul_marinho_lala_dubi_1059_2_8ee74954bcb7ca92e23bfcbd76a37264.jpg'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido Salmão", img:'https://img.elo7.com.br/product/main/3530C18/vestido-de-festa-madrinhas-005-casamento.jpg'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido Roxo", img:'https://5299028l.ha.azioncdn.net/img/2020/12/produto/500/1/large/rosa-prosa-verao-vestidos-3.png'},
    {status:PRODUCT_STATUS_ENUM.REPROVADO, name:"Vestido Funeral", img:'https://litt.vteximg.com.br/arquivos/ids/229692-500-750/126101VM_008_1-VESTIDO-MIDI-MALHA-RICHILIER.jpg?v=637496240493770000'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Casamento", img:'https://26985.cdn.simplo7.net/static/26985/sku/thumb_vestido-longo-vestido-longo-salvador--p-1574942616100.jpg'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Listrado", img:'https://estacaodamodastore.vteximg.com.br/arquivos/ids/164547-512-681/Vestido-Longo-Luiza1.jpg?v=636698332428330000'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido de Perna", img:'https://alphaconvites.com.br/wp-content/uploads/2020/10/vestido-viscose-soberana-preto.jpg'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Nude", img:'https://i.pinimg.com/736x/1f/09/9b/1f099b49e5ced50668538e8049843ecb.jpg'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido Bolinha", img:'https://images.tcdn.com.br/img/img_prod/798207/vestido_longuete_fluido_em_crepe_poa_milalai_1722_1_aeb4a6d28d108186041199cab09b60a9.jpg'},
    {status:PRODUCT_STATUS_ENUM.REPROVADO, name:"Vestido Iphone", img:'https://www.dhresource.com/0x0/f2/albu/g6/M00/C4/7D/rBVaR1vNKdOAXoOvAAb2MShyvfU446.jpg/long-sleeve-short-cocktail-dresses-vestidos.jpg'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Colar", img:'https://img.ltwebstatic.com/images3_pi/2019/11/02/157267086881138482d8de903235bf7be89635ed4c_thumbnail_600x.webp'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido Vermelho", img:'https://cuplovershop.cdn.plataformaneo.com.br/produto/592311612__ME_0375_592311612.jpg'},
    {status:PRODUCT_STATUS_ENUM.EM_DESENVOLVIMENTO, name:"Vestido Vinho", img:'https://cf.shopee.com.br/file/9496e696905d236e4d5415b35a659394'},
    {status:PRODUCT_STATUS_ENUM.REPROVADO, name:"Vestido Coleira de pitbull", img:'https://agilita.vteximg.com.br/arquivos/ids/366078-500-750/127262VM_011_1-VESTIDO-MIDI-OMBRO-A-OMBRO-BABADOS.jpg?v=637509664395130000'},
    {status:PRODUCT_STATUS_ENUM.APROVADO, name:"Vestido ", img:'https://i.pinimg.com/736x/e6/1a/f0/e61af03d76081d4487ca0199c22f9318.jpg'},
]


function ButtonAddProduct({addProducts}) {
    return (
        <div>
              <button type="button" onClick={addProduct}>Adicionar Producto</button>
        </div>
    )
    function addProduct(){
        var product = productsSet[Math.floor(Math.random()*productsSet.length)];
        addProducts(product);
    }
}

function mapDispatchToProps(dispatch) {
    return { addProducts: bindActionCreators(addProductAction, dispatch) }
}

export default connect(null, mapDispatchToProps)(ButtonAddProduct);


