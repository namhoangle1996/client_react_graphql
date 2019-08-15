import styled, {css} from 'styled-components';

export const RedButton  = styled("button")`
    cursor: pointer;
    user-select: none;
    transition: background 120ms ease-in 0s;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    height: 36px;
    border-radius: 3px;
    color: #1e2135;
    font-size: 14px;
    line-height: 1;
    padding-left: 12px;
    padding-right: 12px;
    background: #5c5a55
    font-weight: 500;
    // box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px, rgba(235, 87, 87, 0.3) 0px 0px 0px 1px inset;
    transition : all 0.4s ease-out;
    border: 0;
    margin-top: 10px;

    ${props =>
        props.disabled &&
        css`
          background: #9E9E9E ;
          color: #7e746c;
          box-shadow: none;
          cursor: not-allowed;
        `};

`