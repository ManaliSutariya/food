import logo from './logo.svg';
import './App.css';
    // https://goodtaste.ththeme.net/

function App() {
  return (
    <div>
      <header class="bg_header">
        <div class="container">
          <div class="flex">
            <div class="logo">
                good taste            
            </div>
            <nav class="flex">
              <ul class="main_menu">
                <li>
                  <a>Home</a>
                  <ul class='sub_menu'>
                    <li><a>Home 1</a></li>
                    <li><a>Home 2</a></li>
                    <li><a>Home 3</a></li>
                  </ul>
                </li>
                <li>
                  <a>Shop</a>
                  <div class='mega_menu'>
                    <ul class="sub">
                      <li>Shop pages</li>
                      <li><a>Shop default</a></li>
                      <li><a>Shop list</a></li>
                      <li><a>My account</a></li>
                      <li><a>Cart</a></li>
                      <li><a>Checkout</a></li>
                    </ul>
                    <ul class='sub'>
                      <li>Product detail</li>
                      <li><a>Product default</a></li>
                      <li><a>Poduct group</a></li>
                      <li><a>Product extra link</a></li>
                      <li><a>Product variable</a></li>
                      <li><a>Special product</a></li>
                    </ul>
                    <ul class="sub">
                      <li><img src={require('./image/0.jpeg')}></img></li>
                      <li><a>Seafood</a></li>
                      <li><a>$156.00</a></li>
                    </ul>
                    <ul class="sub">
                      <li><img src={require('./image/1.jpeg')}></img></li>
                      <li><a>Vegetable Soup</a></li>
                      <li><a>$375.00 $353.00</a></li>
                    </ul>
                  </div>
                </li>
                <li><a>Blog</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
