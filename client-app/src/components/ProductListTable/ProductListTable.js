import React from "react";

import classes from "./ProductListTable.module.css";

const ProductListTable = (props) => {

    const tableData = [];

    for(let item in props.data){
        tableData.push({
            ...props.data
        })
        console.log(item);
    }

    const fill = tableData.map((tr,index) => {
        return(
            <tr>
                <th>{tr[index].Id}</th>
                <th>{tr[index].Title}</th>
                <th>{tr[index].Price}</th>
                <th>{tr[index].Date}</th>
                <th>{tr[index].Reduced}</th>
            </tr>

        )
    })

    return (
    <table className={classes.ProductListTable}>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Date posted</th>
          <th>Reduced</th>
        </tr>
        </tbody>
      {fill}      
    </table>
  );
};

export default ProductListTable;
