"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Button, Space, Upload } from "antd";

export default function ImageUpload() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture"
        maxCount={1}
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
      </Upload>
    </Space>
  );
}
