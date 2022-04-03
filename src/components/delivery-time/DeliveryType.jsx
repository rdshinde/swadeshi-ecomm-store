export const DeliveryType = ({ isFastDelivery }) => {
  return (
    <div>
      {isFastDelivery ? (
        <span className="fast-delivery">
          <i className="fa-solid fa-truck-fast text-5 text-primary">
            &nbsp; Fast Delivery
          </i>
        </span>
      ) : (
        <span className="fast-delivery">
          <i className="fa-solid fa-truck text-5 text-gray">
            &nbsp;Regular Delivery
          </i>
        </span>
      )}
    </div>
  );
};
