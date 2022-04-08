import React from 'react';

import './styles.css'

const Css = () => {

    return (
        <>  
            <div className='content'>
                <div className='components'>
                    <div className='component-group'>
                        <div className='component'>
                            <label className='component-name'>Toggle Switch (sem animação)</label>
                            <label className="switch">
                                <input type='checkbox' />
                                <span className='slider' />
                            </label>
                        </div>

                        <div className='component'>
                            <label className='component-name'>Toggle Switch (com animação)</label>
                            <label className="switch">
                                <input type='checkbox' />
                                <span className='slider animate' />
                            </label>
                        </div>
                    </div>

                    <div className='component-group'>
                        <div className='component'>
                            <label className='component-name'>Change Color onHover (sem animação)</label>
                            <div className='square' />
                        </div>

                        <div className='component'>
                            <label className='component-name'>Change Color onHover (com animação)</label>
                            <div className='square animate' />
                        </div>
                    </div>

                    <div className='component-group'>
                        <div className='component'>
                            <label className='component-name'>Loading onHover (sem animação)</label>
                            <div className='loading'>
                                <div className='circle' />
                            </div>
                        </div>

                        <div className='component'>
                            <label className='component-name'>Loading onHover (com animação)</label>
                            <div className='loading'>
                                <div className='circle animate' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text'>
                    <p>CSS transitions provê uma forma de controlar a velocidade de uma animação quando há mudanças de propriedades CSS. Ao invés de uma propriedade entrar em vigor imediatamente, você pode fazer com que as mudanças em uma propriedade ocorram durante um periodo de tempo. Por exemplo, se você mudar a cor de um elemento de branco para preto, a alteração será instantanea. Utilizando transições CSS, as alterações acontecem em uma intervalo de tempo que seguem uma curva de aceleração, e todas podem ser personalizadas.</p>
                    Fonte: <a className='link' target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">Developer Mozilla</a>
                </div>
            </div>
        </>
    );
};

export default Css;