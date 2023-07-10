import React from "react";
import IconContact from "./IconContact";
import DataForm from "@/data/DataForm";

export default function MessageUs() {
  return (
    <div className="max-w-[90%] mx-auto lg:py-10 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h3 className="text-3xl lg:text-7xl font-bold py-5">Message us</h3>
      </div>
      <div className="py-5">
        <p className="font-normal max-w-2xl">
          Fill in the information required in the form and we will get back to
          you within one hour. Or contact Hyer® via our social media channels.
        </p>
        <div className="py-3">
          <IconContact />
        </div>
        <div>
          <p className="font-normal max-w-2xl">
            Your information will be kept private and confidential and will be
            used by Hyer® only. Fields marked * must be completed before
            submitting. All details provided by you will be held by Hyer® and
            used in accordance with our Privacy Policy.
          </p>
        </div>
        <div className="max-w-md py-5">
          {DataForm.map((item) => (
            <div key={item.id} className="mb-4">
              {/* Étiquette du champ */}
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={item.id}
              >
                {item.label}
              </label>

              {/* Vérification du type de champ */}
              {item.id === "phone" ? ( // Si c'est le champ "Phone Number"
                <div className="flex items-center border-b border-black">
                  {/* Liste déroulante des pays */}
                  <select
                    className="appearance-none bg-transparent border-none w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id={item.id}
                  >
                    {item.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  {/* Champ de saisie du numéro de téléphone */}
                  <input
                    className="appearance-none bg-transparent border-none w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                </div>
              ) : item.type === "textarea" ? ( // Si c'est un champ de type "textarea"
                <textarea
                  className="appearance-none border-b border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
                  id={item.id}
                  placeholder={item.placeholder}
                  rows={item.rows}
                ></textarea>
              ) : (
                // Pour tous les autres champs de saisie
                <input
                  className="appearance-none border-b border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-black"
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              )}
            </div>
          ))}

          {/* Bouton d'envoi */}
          <div className="flex items-center">
            <button
              className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-xl"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}