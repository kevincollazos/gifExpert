import { useState } from "react";

export const AddCategory = ({onNewValue}) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    const neInputValue = inputValue.trim();
    if (neInputValue.length <= 1) return;
    onNewValue(neInputValue);
    setInputValue('')
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Busca tu gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
