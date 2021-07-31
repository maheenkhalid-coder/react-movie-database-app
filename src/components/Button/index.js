import React from 'react';
//styles
import { Wrapper } from './Botton.styles';

const Button = ({ text, callBack }) => (
    <Wrapper type="button" onClick={callBack}>
        {text}
    </Wrapper>
);

export default Button;