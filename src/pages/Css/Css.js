import React from 'react';

import './styles.css'

const Css = () => {

    return (
        <>
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
        </>
    );
};

export default Css;