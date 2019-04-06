import React from "react";

const DashBalanceComponent = () => {
  return (
    <div className="dashboard__balanceComponent">
      <p className="dashboard__balanceComponent__text">
        <span className="dashboard__balanceComponent__text--number">$100.00</span>
        <span className="dashboard__balanceComponent__text--remaining">remaining</span>
      </p>
    </div>
  );
};

export default DashBalanceComponent;
