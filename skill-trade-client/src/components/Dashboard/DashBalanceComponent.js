import React from "react";

const DashBalanceComponent = () => {
  return (
    <div className="dashboard__balanceComponent">
      <div className="dashboard__balanceComponent__text">
        <p className="dashboard__balanceComponent__text--number">
          $100.00{' '}
          <span className="dashboard__balanceComponent__text--remaining">
            remaining
          </span>
        </p>
        <br />
      </div>
    </div>
  );
};

export default DashBalanceComponent;
