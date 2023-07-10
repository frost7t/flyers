const DataForm = [
  {
    id: "name",
    label: "Name*",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    label: "Email*",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "phone",
    label: "Phone Number*",
    type: "tel",
    placeholder: "Enter your phone number",
    options: [
      { value: "", label: "Select a country" },
      { value: "+33", label: "France +33" },
      { value: "+355", label: "Albania +355" },
      { value: "+93", label: "Afghanistan +93" },
      { value: "+213", label: "Algeria +213" },
      // options pour country
    ],
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Enter the subject",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message",
    rows: 4,
  },
];

export default DataForm;
