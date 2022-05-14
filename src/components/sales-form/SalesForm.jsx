import { useState } from 'react';

import { createSalesData } from '../../firebase-utils';

import './sales-form.styles.scss';
import InputField from '../forms/input-field/InputField';
import SelectField from '../forms/select-field/SelectField';
import Option from '../forms/option/Option';
import Button from '../forms/button/Button';

const SalesForm = () => {

  const defaultSalesData = {
    vegetableName: '',
    numberOfKilos: 0,
    pricePerKilo: 0
  }
  const [salesData, setSalesData] = useState(defaultSalesData)
  const { vegetableName, numberOfKilos, pricePerKilo } = salesData;

  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setSalesData(defaultSalesData);
  }

  const submitSaleHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    createSalesData({ vegetableName, numberOfKilos, pricePerKilo })
    .then(() => {
      setIsLoading(false);
      resetForm();
    })
    .catch((e) => {
      console.error(e);
      setIsLoading(false);
      resetForm();
    })
  }

  const handleSalesDataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSalesData({...salesData, [name]: value})
  }

  return (
    <div className="sales-form-container">
      <h2>Input Sales Data</h2>
      <form onSubmit={submitSaleHandler} id="sales-form">
        <SelectField label='Vegetable Name' onChange={handleSalesDataChange} name="vegetableName" id="vegetable-name" value={vegetableName}>
          <Option label="Okra" value="okra" />
          <Option label="Pipino" value="pipino" />
          <Option label="Talong" value="talong" />
        </SelectField>

        <InputField label='Number of Kilos' onChange={handleSalesDataChange} placeholder="How many kilos?" name="numberOfKilos" type="number" value={numberOfKilos} />
        <InputField label='Price per Kilo' onChange={handleSalesDataChange} placeholder="How much per kilo?" name="pricePerKilo" type="number" value={pricePerKilo} />

        <Button disabled={isLoading ? true : false} type="submit">{`${isLoading ? 'Please wait...' : 'Save'}`}</Button>
      </form>
    </div>
  )
}

export default SalesForm;