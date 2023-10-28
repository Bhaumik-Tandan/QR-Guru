import GenericQRForm from "../../component/GenericQRForm";

const textBox = {
  fields: [
    {
      name: "text",
      placeholder: "Please enter something",
      multiline: true,
    },
  ],
  generateQRContent: ({ text }) => text,
};

export default function TextBox() {

  return (
    <GenericQRForm {...textBox} />
  );
}


