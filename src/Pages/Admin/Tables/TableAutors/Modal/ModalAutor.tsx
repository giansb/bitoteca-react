import React, { FormEvent, useEffect, useState } from 'react';
import './style.css';
import { IAutor } from '../../../../../Interfaces/IAutor';
import { Button, TextField } from '@mui/material';
import { useAutorById, usePostAutor, useUpdateAutor } from '../../../../../Hooks/useAutors';

interface ModalProps {
  id?: number;
  modalOpen: boolean;
  onClose: () => void;
}

const ModalAutor: React.FC<ModalProps> = ({ id, modalOpen, onClose }) => {
  const autorData = id ? useAutorById(id) : null;

  const [autor, setAutor] = useState<IAutor>({
    nome: '',
    biografia: '',
    imagem_url: ''
  });

  const [operationStatus, setOperationStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (autorData) {
      setAutor(autorData);
    }
  }, [autorData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAutor(prevAutor => ({
      ...prevAutor,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id !== undefined) {
      // Atualizar autor
      const success = await useUpdateAutor(autor);
      setOperationStatus(success ? 'success' : 'error');
    } else {
      // Adicionar novo autor
      const success = await usePostAutor(autor);
      setOperationStatus(success ? 'success' : 'error');
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!modalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <TextField 
            id="outlined-basic" 
            label="Nome" 
            variant="outlined"
            name="nome"
            value={autor.nome}
            onChange={handleChange}
          />

          <TextField 
            id="outlined-basic" 
            label="URL da Imagem" 
            variant="outlined"
            name="imagem_url"
            value={autor.imagem_url}
            onChange={handleChange}
          />

          <TextField
            value={autor.biografia}
            id="outlined-multiline-static"
            label="Biografia"
            name="biografia"
            multiline
            rows={4}
            onChange={handleChange}
          />

          <Button variant="contained" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" type="submit">Cadastrar</Button>

          {operationStatus === 'success' && <p>Operação realizada com sucesso!</p>}
          {operationStatus === 'error' && <p>Ocorreu um erro ao realizar a operação.</p>}
        </form>
      </div>
    </div>
  );
};

export default ModalAutor;