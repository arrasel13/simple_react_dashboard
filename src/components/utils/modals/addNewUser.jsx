import React from "react";

const AddNewUser = () => {
  return (
    <>
      <div className="modal-box w-8/12 max-w-3xl">
        <h3 className="font-bold text-lg">Add New User</h3>
        <p className="py-4">Click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
