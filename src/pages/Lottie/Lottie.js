import React from 'react';

import { default as ReactLottie } from 'react-lottie';
import * as astro from './astro.json'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop, faPause, faRetweet } from "@fortawesome/free-solid-svg-icons";

import './styles.css'

const Lottie = () => {

    const [state, setState] = React.useState({isStopped: false, isPaused: false, direction: 1});
  
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: astro,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <div className='content'>
                <div className='components'>
                    <ReactLottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                        isStopped={state.isStopped}
                        isPaused={state.isPaused}
                        direction={state.direction}
                    />

                    <div className='controls'>
                        <button className='button' onClick={() => setState({ isStopped: true })}>
                            <FontAwesomeIcon icon={faStop} />
                        </button>
                        <button className='button' onClick={() => setState({ isStopped: false })}>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <button className='button' onClick={() => setState({ isPaused: !state.isPaused })}>
                            <FontAwesomeIcon icon={faPause} />
                        </button>
                        <button className='button' onClick={() => setState({ direction: state.direction * -1 })}>
                            <FontAwesomeIcon icon={faRetweet} />
                        </button>
                    </div>
                </div>

                <div className='text'>
                    <p>Lottie é uma biblioteca para Android, iOS, Web e Windows que analisa animações do Adobe After Effects exportadas como json com Bodymovin e as renderiza nativamente em dispositivos móveis e na Web.</p>
                    Fonte: <a className='link' target="_blank" href="https://airbnb.io/lottie/#/" rel="noreferrer">Airbnb</a>
                </div>
            </div>
        </>
    );
};

export default Lottie;