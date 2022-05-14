import './select-field.styles.scss';
const SelectField = ({children, label, ...options}) => {
  return (
    <>
    <label>{label}</label>
    <select {...options}>
      {children}
    </select>
    </>
  )
}

export default SelectField;