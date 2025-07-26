"use client";
import { useState } from "react";
import { Copy } from "@deemlol/next-icons";

export default function Home() {
  const [inputPassowrd, setInputPassword] = useState("");
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";
    const lenght = 16;
    const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$*()";

    if (useSymbols) charset += symbols;
    if (useNumbers) charset += numbers;
    if (useUppercase) charset += upperCharacters;
    if (useLowercase) charset += lowerCharacters;

    for (let i = 0; i < lenght; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setInputPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (inputPassowrd) {
      navigator.clipboard.writeText(inputPassowrd);
      alert("Password saved in clipboard");
    } else alert("I dont have a password to copy")
  };

  return (
    <div className="font-sans flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 w-full">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <div>
          <div className="flex gap-4 justify-center w-full">
            <div className="relative flex gap-4 items-center">
              <Copy
                size={26}
                color="#ffffff"
                className="cursor-pointer"
                onClick={copyToClipboard}
              />
              <input
                type="text"
                className="bg-white text-black px-4 py-2"
                value={inputPassowrd}
                readOnly
              />
            </div>
            <button
              className="bg-indigo-400 p-2 rounded-md cursor-pointer"
              onClick={generatePassword}
            >
              Generate one password
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <div className="">
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={() => setUseSymbols(!useSymbols)}
              />
              <label className="pl-2">Allow symbols?</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                checked={useLowercase}
                onChange={() => setUseLowercase(!useLowercase)}
              />
              <label className="pl-2">Allow lowercase?</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                checked={useUppercase}
                onChange={() => setUseUppercase(!useUppercase)}
              />
              <label className="pl-2">Allow uppercase?</label>
            </div>
            <div className="">
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={() => setUseNumbers(!useNumbers)}
              />
              <label className="pl-2">Allow numbers?</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
