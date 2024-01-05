import { useState } from "react";
import { message, Input, Button, Form, Space } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;

  const handleRegister = async (values) => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Registration successful.");
        navigate("/");
      } else {
        const errorData = await response.json();
        message.error(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Registration error:", error);
      message.error("Registration failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <Form onFinish={handleRegister}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username." }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email address." },
            { type: "email", message: "Please enter a valid email address." },
          ]}
        >
          <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Space direction="vertical">
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#">privacy policy.</a>
            </p>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
