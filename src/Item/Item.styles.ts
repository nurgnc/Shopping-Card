import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 2px solid #894242;
border-radius: 20px;
height: 100%;

button  {
    background-color: #EBD4CC;
    border-radius: 0 0 20px 20px;
}

button:hover {
    background-color: #894242 !important;
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

div > h2 {
    color: #542929;
}

div > p {
    color: #251212;
}

div > h3 {
    color: #CB8F7B;
}
`;