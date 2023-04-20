interface fieldType {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

const fieldsData: fieldType[] = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    placeholder: "example: Mohammad",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    placeholder: "example: Mohammad zadeh",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "example: moh@gmail.com",
  },
  {
    name: "birthdayDate",
    type: "date",
    label: "Birthday date",
  },
  {
    name: "salary",
    type: "number",
    label: "Salary",
    placeholder: "example: 15000",
  },
];

export default fieldsData;
