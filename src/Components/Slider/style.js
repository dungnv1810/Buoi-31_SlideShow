import styled from "styled-components";
export const SliderShowWrapper = styled.div`
    width: 100%;
    height: 500px;
    border: 1px solid red;
    position: relative;
    .images{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        .number{
            width: 500px;
            height: 500px;
            background-color: tomato;
            font-weight: bold;
            font-size: 5rem;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            img{
                width: 500px;
                height: 500px;
                border-radius: 50%;
            }
        }
    }
    .control{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .caption{
        position: absolute;
        left: 0;
        bottom: 15%;
        z-index: 3;
        background-color: #f5f5f5;
        width: 100%;
        height: 30px;
        text-align: center;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .list-dot{
        display: flex;
        border: 1px solid;
        position: absolute;
        top: 90%;
        bottom: 0;
        z-index: 4;
        .dost{
            display: inline-block;
            width: 15px;
            height: 15px;
            background: #cacaca;
            border-radius: 50%;
            margin: 0 4px;
            cursor: pointer;
        }
        .active{
            background: tomato;
        }
    }
`;