import React from 'react';
import './styles/styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = (props) => {
    return(
        <div id="title">
            <Header/>

            <div className="especialidade">
                <h1>Nossa especialidade</h1>
                <span className="separator">Alguma Coisa</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, lorem ut malesuada mattis, ante nisl ultricies orci, ut scelerisque nulla nibh non ipsum. Duis nec condimentum nulla. Cras congue dui mi, eget elementum sapien finibus vel. Quisque at nibh massa. Nunc purus ex, tempus sed metus a, maximus feugiat lacus. Mauris fringilla pharetra consequat. In suscipit nibh sed est rhoncus, eget dapibus sapien tincidunt.</p>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;