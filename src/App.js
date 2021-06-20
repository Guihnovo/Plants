import './App.css';
import Router from './routes/Router';


//   var contarCaractere = ["um", "dois", "tres", "quatro", "cinco"]
//   var aux = 0;

//   for( var i = 0; i < contarCaractere.length; i++){
    
//     var resultado = contarCaractere[i].replace(/\s+/g, '').split("",)
//     console.log(resultado)
//     aux += resultado.length
//   }
// console.log(aux)

  // let array = [1, 2, 3, 4, 5]

  // let Depende = array.map((item) => {
  //   const tamanho = item
  //   console.log(tamanho.length)
  //   return(tamanho.length)
  // })
  // console.log(Depende)
  



function App() {
  return (
    <div>
       <Router/>
    </div>
  );
}

export default App;
