import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

export const RegistroForm = () => {
  // ...

    const onFinish = (values) => {
        console.log("Form values:", values);
        // Aquí puedes realizar la lógica de envío del formulario
    };

    return (
        <div className="registro-form-container">
        <Form onFinish={onFinish}>
            <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Apellido"
            name="apellido"
            rules={[{ required: true, message: "Por favor ingresa tu apellido" }]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Departamento"
            name="departamento"
            rules={[
                {
                required: true,
                message: "Por favor selecciona tu departamento",
                },
            ]}
            >
            <Select placeholder="Selecciona el departamento">
                <Option value="departamento1">Departamento 1</Option>
                <Option value="departamento2">Departamento 2</Option>
                <Option value="departamento3">Departamento 3</Option>
            </Select>
            </Form.Item>

            <Form.Item
            label="Municipio"
            name="municipio"
            rules={[
                { required: true, message: "Por favor selecciona tu municipio" },
            ]}
            >
            <Select placeholder="Selecciona el municipio">
                <Option value="municipio1">Municipio 1</Option>
                <Option value="municipio2">Municipio 2</Option>
                <Option value="municipio3">Municipio 3</Option>
            </Select>
            </Form.Item>

            <Form.Item
            label="Correo"
            name="correo"
            rules={[
                {
                required: true,
                message: "Por favor ingresa tu correo electrónico",
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Usuario"
            name="usuario"
            rules={[
                {
                required: true,
                message: "Por favor ingresa tu nombre de usuario",
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Contraseña"
            name="contrasena"
            rules={[
                { required: true, message: "Por favor ingresa tu contraseña" },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            label="Confirmar Contraseña"
            name="confirmarContrasena"
            dependencies={["contrasena"]}
            rules={[
                {
                required: true,
                message: "Por favor confirma tu contraseña",
                },
                ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue("contrasena") === value) {
                    return Promise.resolve();
                    }
                    return Promise.reject(
                    new Error("Las contraseñas no coinciden")
                    );
                },
                }),
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit">
                Registrarse
            </Button>
            </Form.Item>
        </Form>
        </div>
    );
};
