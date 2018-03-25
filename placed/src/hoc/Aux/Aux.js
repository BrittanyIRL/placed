/**
@function aux
@summary Higher Order component to allow us to render multiple components at once without breaking jsx
@param {object} props
@returns {object} props.children
**/
const aux = (props) => props.children;

export default aux;
