import React from 'react';
import './App.css';
import Post from './components/Post/Post';


class App extends React.Component {
 
  
  render() {
   
    return (
      <div className={'app-container'}>
       
        
      <Post>
       nomeUsuario: "paulinha"
         
         fotosUsuario: "https://picsum.photos/50/50"

         fotosPost: "https://picsum.photos/200/150"
                     
      </Post>
     
     <Post>
        nomeUsuario: ="adeise"

        fotoUsuario = "https://images.pexels.com/photos/6866487/pexels-photo-6866487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 

        fotoPost = "https://images.pexels.com/photos/6762036/pexels-photo-6762036.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

     </Post>



     <Post>
        nomeUsuario:"theo",

        fotoUsuario: "https://images.pexels.com/photos/6847697/pexels-photo-6847697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  ,

        fotoPost: "https://images.pexels.com/photos/4393417/pexels-photo-4393417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
     </Post>
     
      </div>
    );
  }
}

export default App;
