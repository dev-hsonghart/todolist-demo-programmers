import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type Todo = {
  id: number;
  item: string;
  isChecked: boolean;
};

type TodoModalProps = {
  show: boolean;
  todo: Todo | null;
  handleClose: () => void;
};

const TodoModal: React.FC<TodoModalProps> = ({ show, todo, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{todo?.id}</li>
            <li>{todo?.item}</li>
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoModal;
