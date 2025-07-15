"use client"
import { useState } from "react";
import { toast } from "react-toastify";
import { Checked, Email } from "./icons";

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const notify = (content: string) => toast(content);

  return (
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
  );
};
