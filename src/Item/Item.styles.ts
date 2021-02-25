import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
border-radius: 20px;
height: 100%;

button  {
    background-color: #EBD4CC;
    border-radius: 0 0 20px 20px;
}

img {
    max-width: 280px;
    max-height: 250px;
    object-fit; cover;
    border-radius: 20px;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

div{
    font-family: Arial, Helvetica, sans-serif;
    padding: 2rem;
    height: 100%;
}
`;