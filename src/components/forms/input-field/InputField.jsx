import './input-field.styles.scss';
const InputField = ({label, ...options}) => {
  return (
    <>
      <label>{ label }</label>
      <input { ...options }/>
    </>
  ) 
}

export default InputField;