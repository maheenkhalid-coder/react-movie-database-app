import React from 'react';
import { Link } from 'react-router-dom';
//styles
import { Wrapper, Content } from './BreadCrumb.styles';

const BreadCrumb = ({ movieTtile }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTtile}</span>
        </Content>
    </Wrapper>
);

export default BreadCrumb;