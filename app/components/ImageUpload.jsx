"use client";

import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Space, Upload } from "antd";
import axios from "axios";
import { useState } from "react";

export default function ImageUpload({ setFileList }) {
  const uploadImage = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData
      );

      // Get uploaded image URL
      const imageUrl = res?.data?.data?.url;
      message.success("Upload successful!");

      // update fileList with imgbb url
      setFileList(imageUrl);

      onSuccess(res.data, file);
    } catch (error) {
      console.error(error);
      message.error("Upload failed!");
      onError(error);
    }
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size="large">
      <Upload customRequest={uploadImage} listType="picture" maxCount={1}>
        <Button icon={<UploadOutlined />}>Upload Photo</Button>
      </Upload>
    </Space>
  );
}
