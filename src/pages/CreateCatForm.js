import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form, Input, Button, Upload, message, Row, Col, Card, Space} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Title from "antd/es/skeleton/Title";

const CreateCatForm = () => {
    const [form] = Form.useForm();
    const [photoFile, setPhotoFile] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const postData = new FormData();
        postData.append('title', values.title);
        postData.append('content', values.content);
        postData.append('photo', photoFile);
        postData.append('born_year', values.born_year);

        try {
            const response = await axios.post('/api/v1/cat/', postData);
            console.log(response.data);
            // Обновление списка котов или другие действия после успешного создания
            navigate('/success');
        } catch (error) {
            console.error('Error creating cat:', error);
        }
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const beforeUpload = (file) => {
        setPhotoFile(file);
        return false; // Prevent antd Upload component from uploading the file automatically
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <h2>Добавь новую статью!</h2>

            <Row justify="center">
                <Col span={18}>
                    <p>ВАЖНО: перед публикацией на портале статья проходит проверку. Статус публикации вы можете узнать в личном кабинете. При нарушении модератор в праве отклонить статью.</p>
                    <Card>
        <Form form={form} name="create_cat_form" onFinish={onFinish}>
            <Form.Item name="title" rules={[{ required: true, message: 'Введите заголовок' }]}>
                <Input placeholder="Заголовок" />
            </Form.Item>
            <Form.Item name="content" rules={[{ required: true, message: 'Введите описание' }]}>
                <Input.TextArea placeholder="Описание" />
            </Form.Item>
            <Form.Item
                name="photo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[{ required: true, message: 'Загрузите фото/гифку кота' }]}
            >
                <Upload beforeUpload={beforeUpload} maxCount={1} listType="picture" accept="image/*">
                    <Button icon={<UploadOutlined />}>Загрузите фото/гифку кота</Button>
                </Upload>
            </Form.Item>
            <Form.Item name="born_year" rules={[{ required: true, message: 'Введите год появления мема' }]}>
                <Input type="number" placeholder="Год появления мема" />
            </Form.Item>
            <Form.Item>
                <Space>
                <Button type="primary" htmlType="submit">
                    Создать кота
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>Очистить все</Button>
                    </Space>
            </Form.Item>

        </Form></Card>
                </Col>
            </Row></div>
        </div>
    );
};

export default CreateCatForm;
