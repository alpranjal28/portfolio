"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Checked, Email } from "@/components/icons";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const text: string = "Say hello";
  const notify = (content: string) => toast(content);

  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(false);
    setError(false);

    const SERVICE_EMAIL_ID = process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    if (formRef.current) {
      emailjs
        .sendForm(SERVICE_EMAIL_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          (result) => {
            setSuccess(true);
            if (formRef.current) {
              formRef.current.reset();
            }
          },
          (error) => {
            setError(true);
          }
        );
    }
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div className=" overflow-scroll h-full flex flex-col lg:flex-row px-1 sm:px-6 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className=" h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                }}
              >
                {letter}
              </motion.span>
            ))}
            !!
          </motion.div>
        </div>

        {/* FORM CONTAINER OLD*/}
        {/* <form
          className="h-fit self-center lg:w-1/2 flex flex-col gap-8 justify-center bg-red-50 rounded-xl text-xl p-12 relative"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <span>Dear Pranjal Lakra,</span>

          <textarea
            name="user_message"
            rows={5}
            placeholder="Your message here"
            className="bg-red-100 rounded-md  border-b-2 border-b-black outline-none resize-none p-4"
            required
          />

          <span>Yours</span>

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="rounded-md bg-red-100  border-b-2 border-b-black outline-none resize-none p-4"
            required
          />

          <span>Regards</span>

          <button className="bg-red-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <p className=" text-green-600 font-semibold">
              Your message has been sent successfully!
            </p>
          )}
          {error && (
            <p className=" text-red-600 font-semibold">Something went wrong!</p>
          )}
        </form> */}

        {/* FORM CONTAINER UPDATED*/}
        <form
          className="h-fit self-center lg:w-1/2 flex flex-col lg:hidden gap-6 justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl text-lg p-4 md:py-10 md:px-6 relative shadow-xl"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <h2 className="text-white text-2xl font-light mb-2 flex items-center  justify-between">
            <span>Get in touch</span>
            <button
              type="button"
              about="copy"
              onClick={() => {
                navigator.clipboard.writeText("alpranjal28@gmail.com");
                notify("Email copied to clipboard!");
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              {copied ? <Checked /> : <Email color="white" />}
            </button>
          </h2>

          <div className="relative">
            <textarea
              name="user_message"
              rows={4}
              placeholder="Your message"
              className="w-full bg-zinc-800/50 rounded-lg border border-zinc-700 text-white outline-none resize-none p-4 focus:border-blue-400 transition-colors"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="w-full bg-zinc-800/50 rounded-lg border border-zinc-700 text-white outline-none p-4 focus:border-blue-400 transition-colors"
              required
            />
          </div>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 font-medium text-center"
            >
              Message sent successfully!
            </motion.p>
          )}

          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 font-medium text-center"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}

          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium p-4 transition-all duration-300 hover:shadow-lg">
            Send Message
          </button>

        </form>

        {/* FORM CONTAINER - Enhanced Phone UI */}
        <div className="h-fit w-full lg:w-1/2 hidden lg:flex items-center justify-center self-center">
          {/* Phone Frame */}
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl relative w-full max-w-sm">
            {/* Camera Notch */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10"></div>

            {/* Phone Screen */}
            <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="bg-transparent px-8 py-4 flex justify-between items-center text-white text-xs font-medium pt-8">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  </div>
                  <div className="w-6 h-3 border border-white/60 rounded-sm ml-2">
                    <div className="w-4 h-1.5 bg-green-400 rounded-sm m-0.5"></div>
                  </div>
                </div>
              </div>

              {/* App Content */}
              <form
                className="px-6 pb-8 min-h-[650px] flex flex-col relative"
                ref={formRef}
                onSubmit={sendEmail}
              >
                {/* Header with Avatar */}
                <div className="text-center mb-8">
                  <button
                    about="copy"
                    onClick={() => {
                      navigator.clipboard.writeText("alpranjal28@gmail.com");
                      notify("Email copied");
                      setCopied(true);
                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                    type="button"
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span className="text-white text-xl font-bold">P</span>
                  </button>
                  <h2 className="text-white text-xl font-semibold">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    Drop me a message
                  </p>
                </div>

                {/* Form Fields */}
                <div className="flex-1 space-y-5">
                  <div className="relative">
                    <textarea
                      name="user_message"
                      rows={4}
                      placeholder="What's on your mind?"
                      className="w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl text-white p-4 text-sm outline-none border border-slate-700/50 focus:border-blue-400 focus:bg-slate-800/70 transition-all duration-300 resize-none placeholder-slate-400"
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl text-white p-4 text-sm outline-none border border-slate-700/50 focus:border-blue-400 focus:bg-slate-800/70 transition-all duration-300 placeholder-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 mt-4 backdrop-blur-sm"
                  >
                    <p className="text-green-400 text-sm text-center flex items-center justify-center gap-2">
                      <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      Message sent successfully!
                    </p>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 mt-4 backdrop-blur-sm"
                  >
                    <p className="text-red-400 text-sm text-center flex items-center justify-center gap-2">
                      <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✗</span>
                      </span>
                      Something went wrong. Try again.
                    </p>
                  </motion.div>
                )}

                {/* Send Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-semibold py-4 mt-8 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
