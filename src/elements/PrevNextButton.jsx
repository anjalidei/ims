import React from 'react';
import styled from "styled-components";

export default function NavButton (props) {

    const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    `
    const NextArrow = styled.button`
    transform: rotate(90deg);
    text-align: center;
    font-size: 1rem;
    padding: 5px;
    background: white;
    outline: none;
    border: 1px solid transparent;
    width: 20px;
    height: 25px;
    cursor: pointer;
    `

    const PrevArrow = styled.button`
    transform: rotate(-90deg);
    text-align: center;
    font-size: 1rem;
    padding: 5px;
    background: white;
    outline: none;
    border: 1px solid transparent;
    width: 20px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
    `
    return(
        <Wrapper>
            <PrevArrow>
                &#94;
            </PrevArrow>
            <NextArrow>
                &#94;
            </NextArrow>
        </Wrapper>
    )
}