import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

  const databases = new Databases(client);

  //   const promise = databases.createDocument(
  //     conf.appwriteDatabaseId,
  //     conf.appwriteCollectionId,
  //     ID.unique(),
  //     { ...formData }
  //   );
  //   promise.then(
  //     function (response) {
  //       console.log(response);
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const promise = databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      { ...formData }
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );

    // console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div
      id="contact"
      className=" contact  min-h-screen w-full flex flex-col items-center text-white bg-brown-500"
    >
      <div className="flex flex-row p-2 m-4">
        <h1 className=" developer flex text-wrap text-6xl items-center font-bold bg-gradient-to-r from-[#e4afa4] to-[#5c443f]  mr-0 m-2 ">
          Reach Out
        </h1>
        <h3 className="text-6xl p-4 ml-0 m-2 ">✌️✌️</h3>
      </div>
      <div className="  flex flex-center h-[30rem] m-2 w-full md:w-3/4 rounded-xl shadow-3xl border-0 border-[#c86450]">
        <form
          className="flex white-glassmorphism flex-between flex-col w-full items-start gap-4 my-5 mx-4 p-4 text-white text-xl shadow-xl shadow-[#e48d7c18] "
          onSubmit={handleSubmit}
        >
          <input
            className="name flex w-full bg-[#e48d7c18] border-0  border-[#c86450] rounded-lg p-2 "
            id="name"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={handleChange}
          ></input>
          <input
            className="email flex w-full bg-[#e48d7c18] focus:border-2  border-[#c86450] rounded-lg p-2  "
            id="email"
            type="email"
            required
            value={email}
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <input
            className="subject flex w-full bg-[#e48d7c18] focus:border-2  border-[#c86450] rounded-lg p-2  "
            id="subject"
            type="text"
            value={subject}
            placeholder="Subject"
            onChange={handleChange}
          ></input>
          <textarea
            id="message"
            required
            type="text"
            value={message}
            className="w-full h-full bg-[#e48d7c18] rounded-xl p-2"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
          <button
            className="flex justify-end items-end p-2 px-4 rounded-lg bg-gradient-to-r from-[#e4afa4] to-[#5c443f] hover:border-2 border-[#c86450]"
            onClick={handleSubmit}
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
