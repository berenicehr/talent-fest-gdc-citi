import React from 'react'

export const LateralMenuHome = () => {
    return (
        <div className='menu-lateral-home-container'>
        <h3 className='zoom-fx'>Acciones rápidas</h3>
           <section className='btns-lateral-container'>
           <section className='lateral-btns-home-container'>
                <button className='zoom-fx'><i className="bi bi-credit-card"/>Pagar tarjeta de crédito</button>
                <button className='zoom-fx'><i className="bi bi-file-earmark-text"/>Descargar estados de cuenta</button>
                <button className='zoom-fx'><i className="bi bi-bell"/>Configurar notificaciones</button>
                <button className='zoom-fx'><i className="bi bi-cash-stack"/>Ver movimientos de BancaNet</button>
            </section>

            <section className='second-laterl-btns-home-container'>
                <button className='zoom-fx'><i className="bi bi-file-earmark-text"/>Comprobante electrónico de pago (CEP)</button>
                <button className='zoom-fx'><i className="bi bi-coin" />Redisponer crédito</button>
                <button className='zoom-fx'><i className="bi bi-exclamation-diamond"></i>Reportar robo o extravío de tarjeta</button>
            </section>

            <section className='image-lateral-container'>
                <img src="https://i.ibb.co/ck9c3yY/oficina.png" alt="Ofertas citibanamex" />
                <section>
                <p className='zoom-fx'>Las ofertas Citibanamex están pensadas en ti. ¡Conócelas!</p>
                </section>
                <section>
                <button className='zoom-fx'>Me interesa</button>
                </section>
            </section>
           </section>
        </div>
    )
}
