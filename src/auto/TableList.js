import React from "react";
import "./TableList.scss";

const TableList = ({ children }) => {
  return (
    <div className="TableList">
      <div className="app-title">통계테이블 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TableList;
