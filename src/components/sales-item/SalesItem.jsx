import './sales-item.styles.scss';

const SalesItem = () => {
  return (
    <div className="sales-item">
      <span className="date">5-10-2022 —</span>
      <span className="numberOfKilos">20kls •</span>
      <span className="pricePerKilo">₱20</span>
      <span className="total">₱400</span>
    </div>
  )
}

export default SalesItem;