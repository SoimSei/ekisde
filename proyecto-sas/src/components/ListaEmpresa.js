import React from "react";

const ListaEmpresa = (props) => {
  return (
    <div className="lista-empresa">
      <div className="empresa-desc">
        <h3>{props.nombreEmpresa}</h3>
        <h4>{props.descripcionEmpresa}</h4>
      </div>
    </div>
  );
};
export default ListaEmpresa;
