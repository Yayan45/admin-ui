import { useState } from "react";
function UserCard(props) {
  const [clicked, setClicked] = useState(false);
  const { name, email, city } = props;
  // Fungsi handler
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">address:</span> {city}
        </p>
        <button
          className={`${clicked ? "bg-green-500" : "bg-gray-500"} text-white p-2 rounded-md`}
          onClick={() => setClicked(true)}
        >
          {clicked ? "Button sudah di klik" : "Klik"}
        </button>
      </div>
    </>
  );
}

export default UserCard;
