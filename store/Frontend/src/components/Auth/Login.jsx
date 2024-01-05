import { message, Input, Button, Checkbox, Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;

  const handleLogin = async (values) => {
    setLoading(true);

    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Login successful.");

        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        const errorData = await response.json();
        message.error(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Login error:", error);
      message.error("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="account-column">
      <h2>Login</h2>
      <Form onFinish={handleLogin}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your username or email." },
          ]}
        >
          <Input placeholder="Username or email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password." }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <div className="remember">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember me
            </Checkbox>
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
          </div>
        </Form.Item>
        <a href="#" className="form-link">
          Lost your password?
        </a>
      </Form>
    </div>
  );
};

export default Login;
