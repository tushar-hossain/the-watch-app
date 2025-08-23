"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";

export default function register() {
  const [fileList, setFileList] = useState([]);
  const onFinish = (values) => {
    values.image = fileList;

    console.log("Received values of form: ", values);
  };

  return (
    <div className="flex justify-center items-center my-5">
      <div className="bg-base-200 p-5 rounded-md">
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360, padding: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          {/* email */}
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<MdOutlineEmail />} placeholder="Email" />
          </Form.Item>

          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          {/* image upload */}
          <div className="mb-5">
            <ImageUpload setFileList={setFileList} />
          </div>

          {/* button */}
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            Already have an account! <Link href="/login">Login</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
