import { ITenant } from "../../common/interfaces/ITenant"

interface Props {
  tenants: ITenant[]
}

const Tenants: React.FC<Props> = ({tenants}) => {
  return (
    <>
      {tenants.map(tenant => {
        return (
          <tr className="row" key={tenant.id}>
            <td className="data">
              <div className="content">
                {tenant.name}
              </div>
            </td>
            <td className="data paid">
              <div className="content">
                <span className="amount">
                  {tenant.gas}
                </span>
              </div>
            </td>
            <td className="data">
              <div className="content">
                <span className="amount">
                  {tenant.power}
                </span>
              </div>
            </td>
            <td className="data">
              <div className="content">
                {tenant.utilities}
              </div>
            </td>
            <td className="data paid">
              <div className="content">
                <span className="amount">
                  {tenant.internet}
                </span>
              </div>
            </td>
            <td className="data">
              <div className="content">
                <span className="amount">
                  {tenant.rent}
                </span>
              </div>
            </td>
            <td className="data">
              <div className="content">
                <strong>{tenant.total}</strong>
              </div>
            </td>
            <td className="data">
              <div className="content">
                <span className={`status ${tenant.status}`}>
                  <span className="dot"></span>
                  <span>{tenant.status}</span>
                </span>
              </div>
            </td>
            <td className="data">
              <div className="content">
                {tenant.lastUpdate}
              </div>
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default Tenants;