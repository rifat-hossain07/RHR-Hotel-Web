import { useState } from "react";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const BookedRoom = ({ Room }) => {
  //   const { _id } = Room;
  //   console.log(Room._id);
  const [date, setDate] = useState(Room.date);
  //   console.log(date);
  const handleUpdateDate = async (id) => {
    const { value: date } = await Swal.fire({
      title: "Input email address",
      input: "date",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
    });

    const dateStore = { date };
    // console.log(date, id);

    fetch(`http://localhost:5000/booked/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateStore),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Successfully Updated Check In Date!");
          setDate(date);
        }
      });
    // window.location.reload();
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={Room.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Room.status}</h2>
        <p>
          Check In date: <span className="font-bold">{date}</span>
        </p>

        <p>{Room.short_description}</p>
        <div className="card-actions justify-between">
          <button
            onClick={() => handleUpdateDate(Room._id)}
            className="btn btn-outline btn-warning"
          >
            Update Date
          </button>
          <button className="btn btn-outline btn-error">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BookedRoom;
