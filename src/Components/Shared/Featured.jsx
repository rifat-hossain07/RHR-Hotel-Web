import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Featured = ({ Room }) => {
  console.log(Room);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={Room.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Only at {Room.price}$
            <div className="badge bg-red-600 text-white">NEW</div>
          </h2>
          <p>{Room.short_description}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-sm lg:btn-md shadow-black text-white border-none bg-orange-400  normal-case hover:text-black">
              Book Now !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;