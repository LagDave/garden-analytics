const Option = ({label, ...options}) => {
  return (
    <option {...options}> { label } </option>
  )
}

export default Option;