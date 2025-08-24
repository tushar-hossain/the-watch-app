import React from "react";
import { Button } from "antd";

export default function PrimaryButton({ btnName, href }) {
  return (
    <div>
      <Button type="primary" href={`${href}`}>
        {btnName}
      </Button>
    </div>
  );
}
