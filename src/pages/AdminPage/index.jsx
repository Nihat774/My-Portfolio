import React, {  useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import {ErrorAlert, SuccessAlert} from "../../components/Alert";

function AdminPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [newData, setNewData] = useState({
    projectImage: "",
    projectName: "",
    projectAbout: "",
    projectLink: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    const url = import.meta.env.VITE_API_URL;
    e.preventDefault();
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        ErrorAlert()
        return;
      }

      SuccessAlert();
      setNewData({
        projectImage: "",
        projectName: "",
        projectAbout: "",
        projectLink: "",
      });
    } catch (error) {
      ErrorAlert()
    }
  }

  return (
    <>
      {isOpen ? (
        <>
          <div className="h-[90vh] flex flex-col justify-center items-center absolute top-[20px] right-[20px] md:top-[3%] md:right-[25%] z-10">
            <div className="flex justify-end w-[60vw] md:w-[50vw]">
              <IoCloseSharp
                className="border border-black text-black text-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="h-[30vh] w-[60vw] md:h-[50vh] md:w-[50vw] bg-green-600 flex items-center justify-center text-white text-2xl rounded-b-lg rounded-l-lg">
              <p className=" text-center">Xoş gəldin Nihat Abdullah!</p>
            </div>
          </div>
        </>
      ) : null}
      <section className=" px-[40px] py-[20px] flex items-center flex-col">
        <p className="text-3xl font-semibold py-[25px] md:py-[50px]">
          My Projects Səhifəsini yeniləmək üçün xoş gəldin.!
        </p>

        <form className="flex flex-col gap-9" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <input
              required
              name="projectName"
              value={newData.projectName}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Layihənin adı"
              className="inputsStill w-full md:w-[40vw]"
            />
            <input
              required
              name="projectAbout"
              value={newData.projectAbout}
              type="text"
              placeholder="Layihə haqqında"
              className="inputsStill w-full md:w-[40vw]"
              onChange={(e) => handleChange(e)}
            />
            <input
              required
              value={newData.projectLink}
              name="projectLink"
              type="text"
              placeholder="Layihənin linki"
              className="inputsStill w-full md:w-[40vw]"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="flex justify-center ">
            <button className="bg-sky-500 p-3 rounded-lg text-white w-fit md:w-[10vw] text-xl font-semibold">
              Əlavə et ✔
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AdminPage;
