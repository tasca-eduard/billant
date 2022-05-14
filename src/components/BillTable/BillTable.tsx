import React from "react";
import { IBillTable } from "../../common/interfaces/IBillTable"
import { ITenant } from "../../common/interfaces/ITenant";
import Tenants from "./Tenants";
import Totals from "./Totals";

interface Props {
  billTable: IBillTable;
}

const BillTable: React.FC<Props> = ({billTable}) => {
  const tenants = billTable.tenants as ITenant[];
  const totals = billTable.details.totals;

  return (
    <div className="table-component">
    <table className="table">
      <thead className="table-head">
        <tr className="row">
          <th className="data head">
            <div className="content">
              Tenants
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Gas
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Electric
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Utilities
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Internet
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Rent
            </div>
          </th>
          <th className="data head">
            <div className="content">
              <strong>Total</strong>
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Status
            </div>
          </th>
          <th className="data head">
            <div className="content">
              Last updated
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        <Tenants tenants={tenants} />
        <tr className="row">
          <td className="data">
            <div className="content">
            </div>
          </td>
          <Totals totals={totals} />
          <td className="data">
            <div className="content">
            </div>
          </td>
          <td className="data">
            <div className="content">
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default BillTable;