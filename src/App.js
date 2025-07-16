// src/App.js
import React from 'react';
import Cadastro from './pages/Cadastro'
// import Cadastro from './styles/Cadastro.css'

function App() {
  return (
    <div className="App">
      <h1>Cadastro de Usuário</h1>
      <Cadastro />
    </div>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CadastroForm from './CadastroForm';
// import SuccessPage from './SuccessPage'; // 👈 nova página

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<CadastroForm />} />
//         <Route path="/success" element={<SuccessPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
