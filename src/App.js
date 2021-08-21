import {Header} from "./conponents/Header";
import {Footer} from "./conponents/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contacts} from "./pages/Contacts";
import {NotFound} from "./pages/NotFound";
import {Category} from "./pages/Category";
import {Recipe} from "./pages/Recipe";

function App() {
    return <>
        <Router basename='/Geek-Food'>
            <Header/>
            <main className='container content'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contacts}/>
                    <Route path='/category/:name' component={Category}/>
                    <Route path='/meal/:id' component={Recipe}/>
                    <Route component={NotFound}/>
                </Switch>
            </main>
            <Footer/>
        </Router>
    </>
}

export default App;
