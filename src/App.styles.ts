import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 5rem;

  h1{
    text-align: center;
    padding: 20px;
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #894242;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;