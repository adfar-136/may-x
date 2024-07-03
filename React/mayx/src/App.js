import Head from "./components/Header"
import {Footer} from "./components/Footer"
function App() {
  return (
    <>
<div className="hello">
      <h1>Hello React</h1>
    <Head/>
      {heading}
      {main}
    </div>
    <Footer/>
    <Head/>
   
    </>
    
  );
}
// function Header(){
//   return (
//     <>
//      <header>
//       <h1>header</h1>
//       <Footer/>
//      </header>
//     </>
//   )
// }
// function Footer(){
//   return (
//     <>
//      <footer>
//       <h1>Footer</h1>
//      </footer>
//     </>
//   )
// }
var heading = <h1>Hello welcome</h1>
var main = <main> 
  <h1>main</h1>
  <p>main</p>
</main>
export default App;

