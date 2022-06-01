import './sales-view.styles.scss'
import SalesItem from '../sales-item/SalesItem';
import { useContext } from 'react';
import { SalesContext } from '../../contexts/SalesContext';

const SalesView = () => { 

  const {sales, setSales} = useContext(SalesContext);
  
  return (
    <div className="sales-view-container">
      <div className="sales-view-header">
        <h2>Pipino</h2>
        <h2 className="total-income">₱503</h2>
      </div>
      <div className="sales-item-list">

      </div>
      
    </div>
  )
}

export default SalesView;
