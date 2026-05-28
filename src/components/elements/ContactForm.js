import React, { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function ContactForm() {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "413c57e0-14b8-482a-aa8c-dbbbf537cfc9";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Devicist",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="fieldset form-input">
        <div className="form-label">Full Name:</div>
        <input
          type="text"
          {...register("name", { required: true })}
          className="input"
        />
        <div className="form-label">Email Address:</div>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
        />
        <div className="form-label">Message:</div>
        <textarea
          {...register("message", { required: true })}
          className="form-input mt-16"
        ></textarea>
        <br />
        <button type="submit" className="button mt-24">
          Submit Form
        </button>
      </form>

      <div className="mt-16">{result}</div>
    </div>
  );
}
