import React from "react";
import axios from 'axios'
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
            name:data.name,
            email:data.email,
            message:data.massage
        }
        try {
            await axios.post("https://getform.io/f/pamqqdxa",userInfo) 
           toast.success('your massage has been sent')
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
            
        }
      }
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div className="text-3xl font-bold mb-5">Contact me</div>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/pamqqdxa"
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl "
          >
            <h1 className="text-xl font-samibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">
                FullName
              </label>
              <input 
                {...register("name", { required: true })} 
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
               {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Email
              </label>
              <input 
                 {...register("Email", { required: true })} 
                id="email"
                name="Email"
                type="text"
                placeholder="Enter your Email"
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Message
              </label>
              <textarea
                 {...register("massage", { required: true })} 
                id="massage"
                name="massage"
                type="text"
                placeholder="Type your massage here"
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
              {errors.massage && <span>This field is required</span>}
            </div>
            <button type="submit" className="bg-black rounded-xl px-3 py-2 hover:bg-slate-700 duration-300 text-white">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
