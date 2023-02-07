import React from 'react';
import styled from 'styled-components';

const Footerdiv = styled.div`

     position:relative;
    height: 8em;
    width : 100%;
    background-color : #2E294E;
    text-align : center;
    p {
        font-size : 0.8rem;
        margin : 1px;
    }
`

const Text = styled.div`
    padding-top : 18px;
    color: white
`

const Footer = () => {
    return (
        <Footerdiv>
            <Text>
                <p>문의 : sunny100487@naver.com, sunny100487@gmail.com</p>
                <p>©Aniwana 2023. All Rights Reserved.</p>
                <p><a href="https://github.com/puputia/Ani-wana" style={{ color: '#616161' }}>Aniwana's Github</a></p>
            </Text>
        </Footerdiv>
    );

};

export default Footer;