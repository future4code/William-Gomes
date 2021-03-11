import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="data:image/jpeg;base64,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" 
          nome="William Gomes Ferreira" 
          descricao="Oi, eu sou o William. Sou aluno Labenu, mas já fui aluno no CPS (Centro Paula Souza) e Senai SP. Adoro aprender e me desafiar a participar do ensino continuado, ou seja, pretendo nunca parar."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
        texto = "endereço: Laís Petra Skol, 50"
        endereço = " Link: https://www.facebook.com/"
        />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
         
          texto="Facebook" 
        />        
       
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter:" 
        /> 


      </div>
    </div>
  );
}

export default App;
