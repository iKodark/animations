import React from 'react';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import './styles.css'

const ReactTransition = () => {
    const [ballsAnimation, setBallsAnimation] = React.useState([])
    const [balls, setBalls] = React.useState([])
    
    const addBallAnimation = () => {
        setBallsAnimation([...ballsAnimation, ballsAnimation.at(-1) ? ballsAnimation.at(-1) + 1 : 1])
    }

    const removeBallAnimation = (i) => {
        let newBalls = ballsAnimation.slice();
        newBalls.splice(i, 1);
        setBallsAnimation(newBalls);
    }
    
    const addBall = () => {
        setBalls([...balls, balls.at(-1) ? balls.at(-1) + 1 : 1])
    }

    const removeBall = (i) => {
        let newBalls = balls.slice();
        newBalls.splice(i, 1);
        setBalls(newBalls);
    }

    return (
        <>
            <div className='content'>
                <div className='components'>
                    <div className='component-group'>
                        <div className='component'>
                            <label className='component-name'>Entrada/Saída de elementos (sem animação)</label>
                            <div className='balls'>
                                {
                                    balls.map((ball, i) => (
                                        <div className='ball' onClick={() => removeBall(i)}>
                                            {ball}
                                        </div>
                                    ))
                                }

                                <div className='ball add' onClick={addBall}>+</div>
                            </div>
                        </div>
                    </div>

                    <div className='component-group'>
                        <div className='component'>
                            <label className='component-name'>Entrada/Saída de elementos (com animação)</label>
                            <TransitionGroup className='balls'>
                                {
                                    ballsAnimation.map((ball, i) => (
                                        <CSSTransition
                                        key={i}
                                        timeout={1000}
                                        classNames="item"
                                        >
                                            <div className='ball' onClick={() => removeBallAnimation(i)}>
                                                {ball}
                                            </div>
                                        </CSSTransition>
                                    ))
                                }

                                <div className='ball add' onClick={addBallAnimation}>+</div>
                            </TransitionGroup>
                        </div>
                    </div>
                </div>

                <div className='text'>
                    <p>Expõe componentes simples úteis para definir transições de entrada e saída. O React Transition Group não é uma biblioteca de animação como React-Motion , ele não anima estilos por si só. Em vez disso, ele expõe estágios de transição, gerencia classes e elementos de grupo e manipula o DOM de maneiras úteis, facilitando muito a implementação de transições visuais reais.</p>
                    Fonte: <a className='link' target="_blank" href="https://reactcommunity.org/react-transition-group/" rel="noreferrer">React Community</a>
                </div>
            </div>
        </>
    );
};

export default ReactTransition;