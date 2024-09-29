import React from "react";
import { useForm } from "react-hook-form";

function AddBlogs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        className="p-2 w-1/2 w-sm w-md max-w-lg  text-center m-auto mt-20"
        style={{ borderRadius: `24px`, boxShadow: `3px 3px 8px 10px skyblue` }}
      >
        <div className="p-2 text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1
              className="text-4xl glass"
              style={{ textDecoration: `underline` }}
            >
              Add blogs
            </h1>
            <br />
            {/* <input type="image" /> */}
            <input
              {...register("summary")}
              className="input input-bordered w-full max-w-xs input-info"
              placeholder="summary"
            />
            <br />
            <h2 className="text-3xl">Title: </h2>

            <input
              type="text"
              {...register(`Title`, { required: true })}
              placeholder="Title"
              className="input input-bordered w-full max-w-xs input-info"
            />
            <br />
            <br />
            <h2 className="text-2xl">Description: </h2>
            <textarea
              className="textarea textarea-info mt-2"
              {...register(`description`, { required: true })}
              placeholder="Bio"
            ></textarea>
            <br />  
            <button className="btn btn-info btn-outline">Add Blog</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBlogs;
