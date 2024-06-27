import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import BookList from './component/BookList';
import { NavDropdown } from "react-bootstrap";
import fantasy from './data/fantasy.json'

const App = () => {  

  

  return (
    <>
     <MyNav categories={fantasy.map(library => <NavDropdown.Item href="#action3">{library}</NavDropdown.Item>)}/>
    {/* <SingleBook asin={romance[2].asin} img={romance[2].img} title={romance[2].title} category={romance[2].category} price={romance[2].price}/> */}
    <BookList books={fantasy}/>
    <MyFooter/>
    </>
  );
}

export default App;
