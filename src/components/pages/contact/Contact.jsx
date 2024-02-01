"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [validation, setValidation] = useState({
    fullName: true,
    email: true,
    message: true,
  });

  const validateForm = () => {
    let isValid = true;
    const newValidation = {
      fullName: true,
      email: true,
      message: true,
    };

    // Validate Full Name
    const fullNameInput = form.current.querySelector("#fullName");
    if (fullNameInput.value.length < 3) {
      isValid = false;
      newValidation.fullName = false;
    }

    // Validate Email
    const emailInput = form.current.querySelector("#email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      isValid = false;
      newValidation.email = false;
    }

    // Update state with validation status
    setValidation(newValidation);

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_xr5ijaj",
          "template_g9q1b6q",
          form.current,
          "-jZPQswTrtMCw_jxB"
        )
        .then((result) => {
          console.log(result.text);
          // Menampilkan SweetAlert2 pada keberhasilan
          Swal.fire({
            title: "Success!",
            text: "Email send successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          console.error(error);
          // Menampilkan SweetAlert2 pada kegagalan
          Swal.fire({
            title: "Error!",
            text: "Failed to send email. Please try again later.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  return (
    <div id="contact" className={`text-center bg-white pt-8 pb-40`}>
      <div className="flex justify-center items-center mt-10 gap-3">
        <TitleSection title="Contact" />
        <Image
          src="/img/cntct.gif"
          alt="codegif"
          width={40}
          height={30}
          className="mb-2"
        />
      </div>

      <div className="mt-10 mx-10 rounded-xl">
        <form
          className="flex justify-center items-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="lg:w-1/2 bg-LightBlue shadow-xl shadow-slate-500 pt-8 px-8 rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div className="mb-4">
              <input
                type="text"
                id="fullName"
                name="user_name"
                placeholder="Name"
                className={`w-full py-2 px-4 border-2 ${
                  validation.fullName ? "border-Blue" : "border-red-500"
                } rounded-tr-md rounded-bl-md rounded-br-md`}
                required
              />
              {!validation.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid name (at least 3 characters).
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                required
                className={`w-full py-2 px-4 border-2 ${
                  validation.email ? "border-Blue" : "border-red-500"
                } rounded-tr-md rounded-bl-md rounded-br-md`}
              />
              {!validation.email && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email address.
                </p>
              )}
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                required
                className={`w-full py-2 px-4 border-2 border-Blue rounded-tr-md rounded-bl-md rounded-br-md`}
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="btn mt-5 bg-Blue text-White border-2 shadow-xl rounded-full border-LightBlue mb-10 hover:bg-Bluesea"
            >
              <IoIosSend /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
