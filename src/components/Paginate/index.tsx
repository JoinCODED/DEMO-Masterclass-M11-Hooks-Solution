import { UsePaginate } from "../../hooks";
import "./style.scss";

type PaginateProps = UsePaginate;

const Paginate = (props: PaginateProps) => {
  return (
    <div className="paginate-container">
      <button
        className="paginate-btn"
        disabled={props.page === 1}
        onClick={props.back}
      >
        Back
      </button>
      {props.page}
      <button className="paginate-btn" onClick={props.next}>
        Next
      </button>
    </div>
  );
};

export default Paginate;
