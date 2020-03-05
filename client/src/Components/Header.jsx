import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { connect } from "react-redux";
import { sendMessage } from "../store/actions/messageAction";

const Header = props => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ name: "", phone: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = e => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.sendMessage(message);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бесплатный вызов замерщика</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Заполните все поля</p>
          <Form className="flexCenter" onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="name"
                onChange={onChange}
                placeholder="Ваше имя"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="phone"
                onChange={onChange}
                placeholder="Ваш телефон"
              />
            </Form.Group>
            <Button className="custom-bg" type="submit" onClick={handleClose}>
              вызвать
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        className="backGround top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">VANDOORS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Link to="/">Главная</Link>
              <Link to="/advantage">Наши преимущества</Link>
              <Link to="/catalog">Каталог</Link>
              <Link to="/SignIn">Расположение</Link>
            </Nav>
            <Button className="custom-bg" onClick={handleShow}>
              Вызвать замерщика
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(null, { sendMessage })(Header);
