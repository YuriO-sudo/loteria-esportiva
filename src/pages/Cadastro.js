// src/Cadastro.js
import React, { useState } from 'react';
import '../styles/Cadastro.css';

// import { useNavigate } from 'react-router-dom';
// ainda preciso instalar react-router-dom

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    referencia: '',
    data_de_cadastro: '',
    cpf: '',
    password:'',
  });

  const [errors, setErrors] = useState({});
  // const navigate = useNavigate(); // 👈 Hook de navegação


//  if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
//     if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
//     if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
//     if (!formData.referencia.trim()) newErrors.referencia = 'Referência é obrigatória';
//     if (!formData.data_de_cadastro.trim()) newErrors.data_de_cadastro = 'Data é obrigatória';
//     if (!formData.cpf.trim()) newErrors.cpf = 'CPF é obrigatório';


  const validate = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.telefone)) {
      newErrors.telefone = 'Telefone deve ter 10 ou 11 dígitos numéricos';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.referencia.trim()) {
      newErrors.referencia = 'Referência é obrigatória';
    }

    if (!formData.data_de_cadastro.trim()) {
      newErrors.data_de_cadastro = 'Data de cadastro é obrigatória';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password é obrigatório';
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = 'CPF é obrigatório';
    } else if (!/^\d{11}$/.test(formData.cpf)) {
      newErrors.cpf = 'CPF deve ter 11 dígitos numéricos';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert('Cadastro realizado com sucesso!');
      console.log('Dados cadastrados:', formData);

      // Reset form
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        referencia: '',
        data_de_cadastro: '',
        cpf: '',
      });

      setErrors({});

      // 👇 Redireciona para a página de sucesso
      // navigate('/success');
    }
  };

  return (
    // CADASTRO
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {errors.nome && <p className="error">{errors.nome}</p>}
      </div>

      <div>
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
        />
        {errors.telefone && <p className="error">{errors.telefone}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Referência:</label>
        <input
          type="text"
          name="referencia"
          value={formData.referencia}
          onChange={handleChange}
        />
        {errors.referencia && <p className="error">{errors.referencia}</p>}
      </div>

      <div>
        <label>Data de Cadastro:</label>
        <input
          type="date"
          name="data_de_cadastro"
          value={formData.data_de_cadastro}
          onChange={handleChange}
        />
        {errors.data_de_cadastro && (
          <p className="error">{errors.data_de_cadastro}</p>
        )}
      </div>

      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
        {errors.cpf && <p className="error">{errors.cpf}</p>}
      </div>


              {/* LOGIN */}
        <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>


         <div>
        <label>Senha:</label>
        <input
          type="password"
          name="password"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.password}</p>}
      </div>
        






      <button type="submit">Cadastrar</button>
    </form>
  );
}
