import React, { useState } from "react";
import Swal from "sweetalert2";
export const Notes = () => {
  const [notes, setNotes] = useState([]);

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formValues;

  const onChangeHanlder = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let inputTitle = title.trim();
    let inputDescription = description.trim();
    if (inputTitle.length > 0) {
      if (inputDescription.length > 0) {
        const newNota = {
          id: new Date().getUTCMilliseconds(),
          title: inputTitle,
          description: inputDescription,
          close: false,
        };
        let newNotes = [...notes, newNota];
        setNotes(newNotes);
        setFormValues({
          title: "",
          description: "",
        });
      } else {
        Swal.fire("Error", "Need a description", "error");
      }
    } else {
      Swal.fire("Error", "Need a title", "error");
    }
  };

  return (
    <div className="flex flex-row h-screen ">
      <div className="w-2/5 bg-gray-50	h-full px-6 pt-4 ">
        <h1 className="text-2xl pb-2">New note</h1>
        <p className="text-xs pb-8">
          Put a title and description of a note to create a new
        </p>
        <form className="flex flex-col" onSubmit={onSubmitHandler}>
          <div className="flex flex-col">
            <label htmlFor="" className="text-md mb-2">
              Note title
            </label>
            <input
              type="text"
              className="py-2 rounded mb-4 border border-inherit border-slate-300 pl-1"
              name="title"
              value={title}
              onChange={onChangeHanlder}
              required
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-md mb-2">
              Note description
            </label>
            <input
              type="text"
              className="py-2 rounded mb-6 border border-inherit border-slate-300 pl-1"
              name="description"
              value={description}
              onChange={onChangeHanlder}
              required
            />
          </div>
          <button className="bg-green-600 py-3 rounded-md hover:bg-green-700 text-white shadow-md shadow-green-600">
            Save
          </button>
        </form>
      </div>
      <div className="w-3/5 bg-white h-full px-6 pt-4">
        <h1 className="text-2xl pb-2">Note list</h1>
        <p className="text-xs pb-8">
          It is your saves notes, complete o delete using the actions
        </p>
        <ul>
          {notes.map((note) => {
            return (
              <div
                key={note.id}
                className="flex flex-row bg-gray-100 rounded-md px-2 my-3 py-2 justify-between items-center	"
              >
                <div>
                  <p className="text-xs">Title</p>
                  <h1 className="text-xl">{note.title}</h1>
                  <p className="text-xs">Description</p>
                  <p>{note.description}</p>
                </div>

                {note.close ? (
                  <p className="text-green-600 text-sm">Cerrada</p>
                ) : (
                  <button className="bg-green-600 py-2 px-3 h-3/5 rounded-md text-white hover:bg-green-700">
                    Close
                  </button>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
