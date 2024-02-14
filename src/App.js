import logo from './logo.svg';
import { FaMapMarkerAlt,FaRegEnvelope,FaPhoneAlt } from "react-icons/fa";
import './App.css';
    // https://goodtaste.ththeme.net/

function App() {
  return (
    <div>
      {/*======================== header =====================*/}
      <header class="bg_header">
        <div class="container">
          <div class="between flex align">
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
                    <ul class="sub_menu">
                      <li>Shop pages</li>
                      <li><a>Shop default</a></li>
                      <li><a>Shop list</a></li>
                      <li><a>My account</a></li>
                      <li><a>Cart</a></li>
                      <li><a>Checkout</a></li>
                    </ul>
                </li>
                <li>
                  <a>Blog</a>
                  <ul class="sub_menu">
                    <li>Blog pages</li>
                    <li><a>Blog default</a></li>
                    <li><a>Blog list 2</a></li>
                    <li><a>Blog list 3</a></li>
                    <li><a>Blog Grid</a></li>
                    <li><a>Blog grid 2</a></li>
                  </ul>
                  </li>
                <li>
                  <a>About</a>
                    <ul class="sub_menu">
                      <li><a>About</a></li>
                      <li><a>About 2</a></li>
                      <li><a>About 3</a></li>
                    </ul>
                </li>
                <li>
                  <a>Contact</a>
                  <ul class='sub_menu'>
                    <li><a>Contact</a></li>
                    <li><a>Contact 2</a></li>
                    <li><a>Contact 3</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/*========================== slider ===================== */}
      <section class='slider'>
        <div class="sliderin">
          <div class="slider_text">
            <h1>new Taste</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit<br></br> voluptatem accusantium doloremque laudantium.<br></br>Vivamus Iacinia odio vitae vestibulum vestibulum</p>
            <button class="btn1">Read more</button>
          </div>
        </div>
        <div class="forme between align flex container">
          <select placeholder='1 Person'>
            <option>1 Person</option>
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
          </select>
          <input type="text" placeholder='dd-mm-yyyy'></input>
          <select placeholder='1 Person'>
            <option>7:00 pm</option>
            <option>7:30 pm</option>
            <option>8:00 pm</option>
            <option>8:30 pm</option>
            <option>9:00 pm</option>
            <option>9:30 pm</option>
            <option>10:00 pm</option>
            <option></option>
          </select>
          <button class="btn3">Book now</button>
        </div>
      </section>
      {/*=========================== all item section start ================================== */}
      <section class="ptb-100 container">
        <div class="food_tital">
          <h1>new Foods</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div class="all_item flex">
          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/0.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Seafood</b></p>
              <a>$156.00</a>
            </div>
          </div>
          
          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/1.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Vegetable Soup</b></p>
              <a><span><del>$375.00</del></span> $353.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/2.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Pumupkin Soup</b></p>
              <a>$356.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/3.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Italian Spaghetti</b></p>
              <a>$218.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/4.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Gluten Free</b></p>
              <a>$146.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/16.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Fresh Salad</b></p>
              <a><span><del>$278.00</del></span> $250.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/17.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Easy Meal</b></p>
              <a><span><del>$279.00</del></span> $239.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/18.jpeg')}></img>
            </div>
            <div class="item_text">
              <p><b>Antipasti</b></p>
              <a>$98.00</a>
            </div>
          </div>
        </div>
      </section>
      {/*=========================== list section start =========================== */}
      <section class='ptop'>
        <div class='bg_list'>
          <div class='flex'>
            <div class="list_img">
              <img src={require('./image/19.jpeg')}></img>
            </div>
            <div class='taste_text'>
              <h1>Oriental Taste</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <button class="btn2">order now</button>
            </div>
          </div>  
          <div class='Menu_text'>
            <h1>From Our Menu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div> 
      </section>
      {/*============================= menu list section start =============================== */}
      <section>
        <div class="menu">
          <div class="flex wrap">
            <div class='menu_list1'>
              <h2 class="flex">Beef burger meal<div class="align"><hr width="425px" height='10px'></hr></div>$32</h2>
              <p>Classic greek salad, barrel aged feta cheese, bread</p>

              <h2 class="flex">Roasted lamb rump<div class="align"><hr width="400px" height='10px'></hr></div>$25</h2>
              <p>Grilled lamb cutlets, pomegranate glaze, butternut squash</p>

              <h2 class="flex">Pan seared sea bass<div class="align"><hr width="400px" height='10px'></hr></div>$40</h2>
              <p>Saffron and mussel’s broth, new potatoes, edamame beans</p>

              <h2 class="flex">King prawns and lobster<div class="align"><hr width="355px" height='10px'></hr></div>$36</h2>
              <p>Creamy saffron, sauce Vierge</p>

              <h2 class="flex">Citrus cured salmon<div class="align"><hr width="395px" height='10px'></hr></div>$52</h2>
              <p>Horseradish creme fraiche, beetroot mousse, oil</p>

            </div>
            <div class="menu_list2">
              <h2 class="flex">Pan seared scallops<div class="align"><hr width="400px" height='10px'></hr></div>$32</h2>
              <p>Saffron, celeriac puree, black pudding, olive oil</p>

              <h2 class="flex">Baked Camembert<div class="align"><hr width="400px" height='10px'></hr></div>$32</h2>
              <p>Red onion marmelade, garlic Foccacia bread, grilled figs</p>

              <h2 class="flex">Braised ox cheek ravioli<div class="align"><hr width="360px" height='10px'></hr></div>$32</h2>
              <p>Mediterranean olives casserole, celeriac puree, mushrooms</p>

              <h2 class="flex">Corn fed chicken<div class="align"><hr width="410px" height='10px'></hr></div>$32</h2>
              <p>Wild mushrooms, truffle potatoes, braised leeks, carrots</p>

              <h2 class="flex">Nduja pork chicken terrine<div class="align"><hr width="330px" height='10px'></hr></div>$32</h2>
              <p>Smoked duck breast, pistachio, smoked pancetta</p>
            </div>
            <div class="flex">
              <div class='test_text'>
                <h1>Chicken Grill</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button class="btn2">order now</button>
              </div>
              <div class="list_img">
                <img src={require('./image/20.jpeg')}></img>
              </div>
            </div> 
          </div>      
        </div>  
      </section>
      {/*============================= all item image section start =============================== */}
      <section class="ptb-100 container">
        <div class="food_tital">
          <h1>Best Seller</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div class="all_item flex">
          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/0.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Seafood</p>
              <a>$156.00</a>
            </div>
          </div>
          
          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/21.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Pumpkin Soup</p>
              <a>$102.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/3.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Carrot Soup</p>
              <a><span><del>$216.00</del></span> $121.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/22.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Vegetable Soup</p>
              <a>$196.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/23.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Grilled Pizza</p>
              <a>$252.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/18.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Seafood</p>
              <a><span><del>$118.00</del></span> $58.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/21.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Best Steak</p>
              <a>$128.00</a>
            </div>
          </div>

          <div class='all_image'>
            <div class="img1">
              <img src={require('./image/17.jpeg')}></img>
            </div>
            <div class="item_text">
              <p>Pizza</p>
              <a>$92.00</a>
            </div>
          </div>
        </div>
      </section>
      {/*============================ good taste section start ============================= */}
      <section class="prelex">
          <div class="prelex_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <h1>Good taste</h1>
          </div>
      </section>
      {/*============================== footer section start =============================*/}
      <section class="bg_footer flex">
        <div class='footer1'>
          <h1>Good Taste</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul class="contact">
            <li><FaMapMarkerAlt></FaMapMarkerAlt>27 Division St,NY 10002,USA</li>
            <li><FaPhoneAlt></FaPhoneAlt>+0 123-456-7890</li>
            <li><FaRegEnvelope></FaRegEnvelope>info@example.com</li>
          </ul>
        </div>
        <div class="footer2">
          <h3>Pages</h3>
          <ul class="infom">
            <li>About</li>
            <li>Contact</li>
            <li>My Account</li>
            <li>Cart</li>
            <li>Checkout</li>
          </ul>
        </div>
        <div class="footer3">
          <h3>Services</h3>
            <ul class="services">
              <li>Shopping guide</li>
              <li>Delivery & pick up</li>
              <li>My Account</li>
              <li>Cart</li>
              <li>Checkout</li>
            </ul>
        </div>
        <div class="footer4">
          <h3>Newletter</h3>
          <p>Subscribe to our Newsletter and get bonuses for the next purchase</p>
          <input type="email" placeholder='your email address'></input><button class="btn4">sign up</button>
        </div>
      </section>
      <section class="end flex">
        <div class="copy">
          <p>All rights reserved. © Copyright ththeme</p>
        </div>
        <div class="card_img flex">
          <img src={require('./image/24.jpeg')}></img>
          <img src={require('./image/25.jpeg')}></img>
          <img src={require('./image/26.jpeg')}></img>
          <img src={require('./image/27.jpeg')}></img>
        </div>
        
      </section>
    </div>
  );
}

export default App;
