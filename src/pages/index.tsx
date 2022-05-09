import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main">
      <br />
      <br />
      <div className="container neutral">
        <h2>Tenants details</h2>
        <br />
        <p>
          Invoices received on <strong>May 2022</strong>.
          <br />
          This report reflect the amounts from last month <small>(most likely)</small>.
          <br />
          <br />
          Ask your administrator to keep everything up to date.
        </p>
        <br />
        <div className="slidish">
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
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      Ed T.
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">
                        35 
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount">

                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">

                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">
                        10 
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount"></span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <strong>45</strong> 
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status paid">
                        <span className="dot"></span>
                        <span>Paid</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      5/8/2022, 10:41:10 PM
                    </div>
                  </td>
                </tr>
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      Raul L.
                    </div>
                  </td>
                  <td className="data pending">
                    <div className="content">
                      <span className="amount">
                        35 
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount"></span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount"></span>
                    </div>
                  </td>
                  <td className="data unpaid">
                    <div className="content">
                      <span className="amount">
                        10 
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="amount"></span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <strong>45</strong> 
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status pending">
                        <span className="dot"></span>
                        <span>Pending</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      5/8/2022, 10:41:10 PM
                    </div>
                  </td>
                </tr>
                <tr className="row">
                  <td className="data">
                    <div className="content">
                      Rafaela N.
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">35 </span>
                    </div>
                  </td>
                  <td className="data pending">
                    <div className="content">
                      <span className="amount">43 </span>
                    </div>
                  </td>
                  <td className="data unpaid">
                    <div className="content">
                      <span className="amount">55 </span>
                    </div>
                  </td>
                  <td className="data paid">
                    <div className="content">
                      <span className="amount">10 </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <strong>45</strong> 
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      <span className="status pending">
                        <span className="dot"></span>
                        <span>Pending</span>
                      </span>
                    </div>
                  </td>
                  <td className="data">
                    <div className="content">
                      5/8/2022, 10:41:10 PM
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <small>For any questions or suggestions discuss with <strong>Ed</strong>.</small>
      </div>
    </div>
  )
}

export default Home
