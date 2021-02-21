import styled from 'styled-components';
const TabletBarStyled = styled.div`
display: flex;
justify-content: space-between;

body {
  overflow-y: ${props=> props.click ?  "hidden" : "scroll"};
}


.rightSide {
display: flex;
align-items: center;
}
button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
}  
.burger {
margin-left: 50px;
}
  `


export default TabletBarStyled;
