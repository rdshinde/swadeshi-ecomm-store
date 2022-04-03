import "./loader.css";
export const Loader = () => {
  return (
    <div className="loader__overlay">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
