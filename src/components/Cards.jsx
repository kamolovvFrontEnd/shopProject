import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

function Cards({ cards, handleClick, name }) {
  const dispatch = useDispatch();

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center p-3" key={cards.id}>
        <img
          src={cards.image}
          className="card-img-top"
          alt="..."
          height="250px"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">{cards.title.substring(0, 12)}</h5>
          <p className="card-text fw-bolder">{cards.price}</p>
          <Button
            onClick={() => dispatch(handleClick(cards.id))}
            size="small"
            variant="contained"
          >
            {name}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
