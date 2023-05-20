import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
//import { IP_SERVER, API_VERSION } from "../../../../SERVER-PROJECT";

export const SignIn = () => {
  const onFinish = (values) => {
      const url = "http://localhost:3000/api/v1/auth/login";
      console.log("Formulario enviado. Datos:", values);
    // Realizar la petición HTTP POST al backend con los datos de inicio de sesión (email y password)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // La respuesta fue exitosa (código de estado 2xx)
          return response.json();
        } else {
          // La respuesta no fue exitosa
          throw new Error("Error en la solicitud");
        }
      })
      .then((data) => {
        // Manejar la respuesta del backend y guardar los tokens en el almacenamiento local
        console.log("Respuesta del backend:", data);
        // Aquí puedes guardar los tokens en el almacenamiento local o en el estado de tu componente
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((error) => {
        // Manejar el error en caso de que ocurra
        console.error("Error:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "Por favor ingrese un correo electrónico válido",
          },
          {
            required: true,
            message: "Por favor ingrese su correo electrónico",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: "Por favor ingrese su contraseña" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Iniciar Sesión
        </Button>
      </Form.Item>
    </Form>
  );
};
