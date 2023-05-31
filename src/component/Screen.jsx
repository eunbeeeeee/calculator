import React from 'react';
import './screen.css';
import { Textfit } from 'react-textfit';

const Screen = ({value}) => {
    return (
        <Textfit className='screen'
                 model="single"
                 max={50}
                 >
            {value}
        </Textfit>
    );
};

export default Screen;