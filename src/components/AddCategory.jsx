import { useState } from "react";
import PropTypes from 'prop-types';


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
    <form aria-label="form" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Busca tu gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired,
}
