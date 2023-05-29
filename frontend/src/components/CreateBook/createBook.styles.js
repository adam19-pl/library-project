import styled from 'styled-components';

export const Wrapper = styled.div`

@media (max-width: 568px){


.textarea{
    max-width: 250px !important;
}
input{
    max-width: 250px !important;
}
.error{
        word-wrap: break-word;
        width: 250px !important;
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;
    }
}
margin-top:3rem;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
flex-direction: column;

.back-button{
        width: 140px;
        margin: 1rem auto;
        border: none;
        border-radius: 16px;
        padding: 0.7rem;
        color: white;
        transition: 500ms;
        background-color: rgba(252, 13, 97,0.8);
    &:hover{
        background-color: rgba(252, 13, 97,1);
        cursor: pointer;
    }
}
    }

form{
    display: flex;
    flex-direction: column;

    .email-error{
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;
    }

    .text-input-error{
        border:1px solid red;
    }
    
    label{
        margin-top: 0.5rem;
        margin-bottom: 0.3rem;
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

    .textarea{
        width: 400px;
        height: 300px;
    }
    .textarea-error{
        width: 400px;
        height: 300px;  
        border:1px solid red;
    }
    select{
        display: block;
        margin: 1rem auto 0 auto;
        padding: 0.5rem;
        width: 200px;
        text-align: center;
        outline: none;
        border: none;
        border-bottom: 1px solid blue;
    }
    
    .error{
        word-wrap: break-word;
        width: 400px;
        font-size: 0.8rem;
        color: red;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        font-style: italic;
        font-weight: 500;
    }

    .select-error{
        padding: 0.5rem;
        border: 1px solid red;
    }

    .imageContainer img{
        max-width: 180px !important;
    }
    }
    .create-project-button{
        width: 140px;
        margin: 1rem auto;
        background-image: linear-gradient(to right, #b4d49a, #9ecd7c, #87c55d, #6ebd3b, #50b500);
        border: none;
        border-radius: 16px;
        padding: 0.7rem;
        color: white;
        transition: 500ms;
        &:hover{
            background-image: linear-gradient(to right, #50b500, #6ebd3b,  #87c55d, #9ecd7c, #b4d49a);
            cursor: pointer;
        }
    }
}
`