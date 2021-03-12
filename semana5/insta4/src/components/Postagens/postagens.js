import React from 'react'

class postagens extends React.Component {
    
    state = {
       
            
          nomeUsuario: ["paulinha","adeise","theo"],
         
          fotosUsuario: [
              
            "https://picsum.photos/50/50",   
          
          "https://images.pexels.com/photos/6866487/pexels-photo-6866487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", 
          
          
          "https://images.pexels.com/photos/6847697/pexels-photo-6847697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  
        
          ],


          fotosPost: [
              
            "https://picsum.photos/200/150",
          
          "https://images.pexels.com/photos/6762036/pexels-photo-6762036.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          
          "https://images.pexels.com/photos/4393417/pexels-photo-4393417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        
        ]     
          
    }
    
    PrimeiroPost = () => {
      if (this.state.nomeUsuario === paulinha) {
        this.setState({
          fotosUsuario: fotosUsuario === "https://picsum.photos/50/50" ,
          fotosPost: fotosPost === "https://picsum.photos/200/150"
        })
      }
    }

    SegundoPost = () => {
      if (this.state.nomeUsuario === adeise) {
        this.setState({
          
          fotosUsuario: fotosUsuario === "https://images.pexels.com/photos/6866487/pexels-photo-6866487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
           
          ,

          fotosPost: fotosPost === "https://images.pexels.com/photos/6762036/pexels-photo-6762036.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

        })
      }
    }
    
    TerceiroPost = () => {
      if (this.state.nomeUsuario === theo) {
        this.setState({
       
          fotosUsuario: fotosUsuario === "https://images.pexels.com/photos/6847697/pexels-photo-6847697.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          
          ,

          fotosPost: fotosPost ===  "https://images.pexels.com/photos/4393417/pexels-photo-4393417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        })
      }
    }
    render() {


return <div className={'infos'}>



</div>

    }
}

export default postagens