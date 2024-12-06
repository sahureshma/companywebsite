import React, { useState } from "react";
import "./AddSIPFormstock.css";

const AddSIPForm = () => {
  const [formValues, setFormValues] = useState({
    sipAmount: "",
    sipStart: "",
    sipEnd: "",
    frequency: "Monthly",
    installments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  return (
    <div className="sipform-container">
      <p className="sipform-info">
        Add SIP (First transaction will be recorded based on the information provided above. Following inputs will be applicable from the 2nd transaction onwards)
      </p>
      <form onSubmit={handleSubmit} className="sipform">
        <div className="sipform-field">
          <label className="sipform-label" htmlFor="sipAmount">
            SIP Amount
          </label>
          <input
            type="number"
            id="sipAmount"
            name="sipAmount"
            value={formValues.sipAmount}
            onChange={handleChange}
            className="sipform-input"
            placeholder=""
            required
          />
        </div>

        <div className="sipform-field">
          <label className="sipform-label" htmlFor="sipStart">
            SIP Start
          </label>
          <input
            type="date"
            id="sipStart"
            name="sipStart"
            value={formValues.sipStart}
            onChange={handleChange}
            className="sipform-input"
            required
          />
        </div>

        <div className="sipform-field">
          <label className="sipform-label" htmlFor="sipEnd">
            SIP End Date
          </label>
          <input
            type="date"
            id="sipEnd"
            name="sipEnd"
            value={formValues.sipEnd}
            onChange={handleChange}
            className="sipform-input"
            required
          />
        </div>

        <div className="sipform-field">
          <label className="sipform-label" htmlFor="frequency">
            Frequency
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formValues.frequency}
            onChange={handleChange}
            className="sipform-select"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>

        <div className="sipform-field">
          <label className="sipform-label" htmlFor="installments">
            No. of Installments
          </label>
          <input
            type="number"
            id="installments"
            name="installments"
            value={formValues.installments}
            onChange={handleChange}
            className="sipform-input"
            placeholder=""
            required
          />
        </div>

      
      </form>
    </div>
  );
};

export default AddSIPForm;