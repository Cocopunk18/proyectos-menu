import React from 'react'
import { Space, Table,} from "antd";
import { SearchOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";


const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Productos",
        dataIndex: "productos",
        key: "productos",
    },
    {
        title: "Count",
        dataIndex: "count",
        key: "count",
    },
    {
        title: "State",
        dataIndex: "state",
        key: "state",
    },
    {
        title: "Actions",
        key: "action",
        render: (_, record) => (
        <Space size="middle">
            <a><SearchOutlined></SearchOutlined></a>
            <a><DeleteOutlined></DeleteOutlined></a>
            <a><EditOutlined></EditOutlined></a>
        </Space>
        ),
    },
];
const data = [
    {
        key: "1",
        id: "A1",
        productos: "Blusa rosa",
        count: "1",
        state: "Pendiente",
    },
    {
        key: "1",
        id: "A2",
        productos: "Jeans",
        count: "3",
        state: "Enviado",
    },
    {
        key: "1",
        id: "A3",
        productos: "Chaquetas",
        count: "2",
        state: "Pendiente",
    },
    {
        key: "1",
        id: "A4",
        productos: "Blusa floor",
        count: "2",
        state: "Enviado",
    },
    {
        key: "1",
        id: "A5",
        productos: "Blusa azul",
        count: "3",
        state: "Pendiente",
    },
    {
        key: "1",
        id: "A6",
        productos: "Pantalón",
        count: "2",
        state: "Enviado",
    },
    {
        key: "1",
        id: "A7",
        productos: "Blusa verde",
        count: "3",
        state: "Pendiente",
    },
];

export const Listar = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5, total: data.length }}
        />
    );
}


