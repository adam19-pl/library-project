import styled from 'styled-components';

export const Wrapper = styled.div`
margin-top: 3rem;
width: 100%;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;
.imageContainer img{
    max-width: 180px;
}

select{
        display: block;
        margin: 1rem auto 1.5rem auto;
        padding: 0.5rem;
        width: 200px;
        text-align: center;
        outline: none;
        border: none;
        border-bottom: 1px solid blue;
    }
input{
        padding: 0.5rem;
        width: 400px;
        text-align: center;
        border: none;
        border-bottom: 1px solid blue;
        background-color: rgba(205,205,205,0.3);
        outline: none;
    }

div{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
a{  
    min-width: 80px;
    margin: 0 1rem;
    background-image: linear-gradient(to right, #051937, #044166, #006e94, #009ebe, #25d1e1);
    text-decoration: none;
    border-radius: 16px;
    padding: 0.5rem;
    color: white;
    transition: 500ms;
    &:hover{
        &:before {
        opacity: 0.5;
    }
        background-image: linear-gradient(to right, #25d1e1, #009ebe, #006e94, #044166, #051937);
        cursor: pointer;
    }
}
.borrow-link{
    background-image: linear-gradient(to right, #b4d49a, #9ecd7c, #87c55d, #6ebd3b, #50b500);
    &:hover{
            &:before {
            opacity: 0.5;
        }
            background-image: linear-gradient(to right, #50b500, #6ebd3b,  #87c55d, #9ecd7c, #b4d49a);
            cursor: pointer;
        }
}
table{
    margin: auto;
    width: 100%;
    td{
        text-align: center;
        margin: 1rem 0 1rem 0 ;
        justify-content: center;
        a{
            display: block;
            width: 60%;
            margin: 0.5rem auto;
        }
        div{
            width: 100%;
            justify-content: center;
            img{
                margin: auto;
            }
        }
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
}
`