import { Totals } from "../../common/types/TTotals";

interface Props {
  totals: Totals
}

const Totals: React.FC<Props> = ({totals}) => {
  return(
    <>
      {Object.values(totals).map((total, index) => {
        return (
          <td className="data paid" key={index}>
            <div className="content">
              <span className="amount">
                {total}
              </span>
            </div>
          </td>
        )
      })}
    </>
  )
}

export default Totals;