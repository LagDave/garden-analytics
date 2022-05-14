import './button.styles.scss';
const Button = ({children, ...options}) => {
  return (
    <button {...options}> { children } </button>
  )
}

export default Button;