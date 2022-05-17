import type { NextPage } from 'next'
import { IBillTable } from '../common/interfaces/IBillTable'
import billTableData from "../common/data/billTableData.json"
import BillTable from '../components/BillTable/BillTable';
import { months } from '../common/constants/date';

const Home: NextPage = () => {
  const billTable = billTableData as IBillTable;
  const date = billTable.details.date;

  return (
    <div className="main">
      <br />
      <br />
      <div className="container neutral">
        <h2>Tenants details</h2>
        <br />
        <p>
          Invoices received on <strong>{months[date.month - 1]} {date.year}</strong>.
          <br />
          This report reflect the amounts from last month <small>(most likely)</small>.
          <br />
          <br />
          Ask your administrator to keep everything up to date.
        </p>
        <br />
        <div className="slidish">
          <BillTable billTable={billTable} />
        </div>
        <br />
        <small>For any questions or suggestions discuss with <strong>Ed</strong>.</small>
      </div>
    </div>
  )
}

export default Home
