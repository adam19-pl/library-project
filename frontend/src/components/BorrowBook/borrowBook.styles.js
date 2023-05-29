import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top:3rem;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;

.backend-error{
    font-size: 1.5rem;
    color: red;
    margin-bottom: 0.5rem;
}
a{
    text-decoration:none;
    width: 140px;
        margin: 1rem auto;
        background-color: rgba(3, 198, 252,1);
        border: none;
        border-radius: 16px;
        padding: 0.5rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(3, 123, 252,0.8);
            cursor: pointer;
        }
}
button{
    width: 140px;
        margin: 1rem auto;
        background-color: rgba(3, 198, 252,1);
        border: none;
        border-radius: 16px;
        padding: 0.7rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-color: rgba(3, 123, 252,0.8);
            cursor: pointer;
        }
}

.button-back{
    background-color: rgba(252, 13, 97,0.8);
    &:hover{
        background-color: rgba(252, 13, 97,1);
    }
}
.button-submit{
    background-image: linear-gradient(to right, #b4d49a, #9ecd7c, #87c55d, #6ebd3b, #50b500);
    &:hover{
            &:before {
            opacity: 0.5;
        }
            background-image: linear-gradient(to right, #50b500, #6ebd3b,  #87c55d, #9ecd7c, #b4d49a);
            cursor: pointer;
        }
}

`