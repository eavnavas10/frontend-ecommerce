import React from "react";
import { Select } from "antd";

export const SelectAnt = ({ placeholder, options, value, onChange }) => (
  <Select
    showSearch
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{ minWidth: 200, height: 40 }}
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    options={options}
    allowClear
  />
);
