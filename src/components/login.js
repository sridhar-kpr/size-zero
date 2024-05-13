import React, { useState } from "react";

const Login = ({ onLogin }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleLoginClick = () => {
  //   onLogin({ email, password });
  // };

  return (
    <>
      <meta charSet="utf-8" />
      <title>Hockerty: Custom clothing to Dress the Real You</title>
      <meta
        name="description"
        content="Design men custom suits and shirts and enjoy 2 weeks free shipping. Unlimited personalization options & a wide range of fabrics. Order now"
      />
      <meta
        name="keywords"
        content="Custom Suits, Tailored suits, Custom made suits, Custom Dress Shirts, Tailored shirts, Custom made shirts"
      />{" "}
      {/*[if gte IE 9]><meta http-equiv="x-ua-compatible" content="IE=edge" /><![endif]*/}
      {/*[if lt IE 9]><meta http-equiv="x-ua-compatible" content="IE=6,7,8" /><![endif]*/}
      <meta httpEquiv="content-language" content="en-us" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, user-scalable=yes"
      />
      <link rel="manifest" href="/en-us/manifest_json?v=1709817418" />{" "}
      <meta name="apple-mobile-web-app-title" content="hockerty" />
      <meta name="application-name" content="hockerty" />
      <meta name="msapplication-TileColor" content="#fafafa" />
      <meta name="theme-color" content="#fafafa" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#fafafa" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        rel="icon"
        sizes="32x32"
        href="https://d2w9m16hs9jc37.cloudfront.net/images/favicon/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://d2w9m16hs9jc37.cloudfront.net/images/favicon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="https://d2w9m16hs9jc37.cloudfront.net/images/favicon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        href="https://d2w9m16hs9jc37.cloudfront.net/images/favicon/apple-touch-icon.png"
      />
      <link rel="preconnect" href="https://d2w9m16hs9jc37.cloudfront.net" />
      <link rel="preconnect" href="https://d1fufvy4xao6k9.cloudfront.net" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link
        rel="alternate"
        hrefLang="de-at"
        href="https://www.hockerty.at/de-at/"
      />
      <link
        rel="alternate"
        hrefLang="de-ch"
        href="https://www.hockerty.ch/de-ch/"
      />
      <link rel="alternate" hrefLang="de" href="https://www.hockerty.de/de/" />
      <link
        rel="alternate"
        hrefLang="en-au"
        href="https://www.hockerty.com/en-au/"
      />
      <link
        rel="alternate"
        hrefLang="en-ca"
        href="https://www.hockerty.com/en-ca/"
      />
      <link
        rel="alternate"
        hrefLang="en-ch"
        href="https://www.hockerty.ch/en-ch/"
      />
      <link
        rel="alternate"
        hrefLang="en-ie"
        href="https://www.hockerty.com/en-ie/"
      />
      <link
        rel="alternate"
        hrefLang="en-gb"
        href="https://www.hockerty.uk/en-uk/"
      />
      <link
        rel="alternate"
        hrefLang="en-us"
        href="https://www.hockerty.com/en-us/"
      />
      <link rel="alternate" hrefLang="en" href="https://www.hockerty.com/en/" />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://www.hockerty.com/en/"
      />
      <link
        rel="alternate"
        hrefLang="es-co"
        href="https://www.hockerty.com/es-co/"
      />
      <link
        rel="alternate"
        hrefLang="es-mx"
        href="https://www.hockerty.com/es-mx/"
      />
      <link
        rel="alternate"
        hrefLang="es-us"
        href="https://www.hockerty.com/es-us/"
      />
      <link rel="alternate" hrefLang="es" href="https://www.hockerty.es/es/" />
      <link
        rel="alternate"
        hrefLang="fr-be"
        href="https://www.hockerty.fr/fr-be/"
      />
      <link
        rel="alternate"
        hrefLang="fr-ca"
        href="https://www.hockerty.com/fr-ca/"
      />
      <link
        rel="alternate"
        hrefLang="fr-ch"
        href="https://www.hockerty.ch/fr-ch/"
      />
      <link rel="alternate" hrefLang="fr" href="https://www.hockerty.fr/fr/" />
      <link
        rel="alternate"
        hrefLang="it-ch"
        href="https://www.hockerty.ch/it-ch/"
      />
      <link rel="alternate" hrefLang="it" href="https://www.hockerty.it/it/" />
      <link rel="alternate" hrefLang="ru" href="https://www.hockerty.ru/ru/" />
      <link rel="canonical" href="https://www.hockerty.com/en-us/" />{" "}
      <link
        rel="stylesheet"
        href="https://d2w9m16hs9jc37.cloudfront.net/css/1709817418/default.css?v=v24"
        type="text/css"
        charSet="utf-8"
      />
      {/*[if lt IE 9]>



<![endif]*/}
      <meta property="og:url" content="https://www.hockerty.com/en-us/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://d1fufvy4xao6k9.cloudfront.net/images/share/hockerty.jpg"
      />
      <meta property="og:image:height" content={1200} />
      <meta property="og:image:width" content={1200} />
      <meta property="og:site_name" content="Hockerty" />
      <meta property="fb:app_id" content={1012420945555828} />
      <div id="body_height" className="  has_footer">
        {/*googleoff: all*/}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\tbody.menu_open { height: 100%; overflow: hidden; padding-right: 15px; }\n\n\t#tv3.floating .main, #tv3.sticky .main {  box-shadow: none; position:absolute; top: 0; left:0; right:0; z-index: 100; background: none;}\n\t.has_bbar #tv3.floating .main, .has_bbar #tv3.sticky .main { top: 38px; }\n\t#tv3.black_gradient .main { background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%); }\n\t#tv3.sticky .main { position:fixed; transition: all 0.3s, top 0s; }\n\t#tv3.sticky .collapsed { transform: translateY(-80px); }\n\t#tv3.white .main a { color: #FFF; }\n\t#tv3.white .main img { filter: invert(100%); }\n\t#tv3.sticky .addbg { background:#FFF; border-bottom: 1px solid #e7e7e7; }\n\t#tv3.sticky .addbg img { filter:none; }\n\t#tv3.sticky .addbg.main a { color: #212127; }\n\t\n\t\n\n\t#tv3.hide_llinks .main .llinks { display: none; }\n\t#tv3.hide_llinks .main .logo { margin-left: 10px; }\n\t#tv3.hide_rlinks .main .rlinks { display: none; }\n\n\t#tv3 { color:#212727; }\n\t#tv3 a { color:#212727;  text-decoration:none; transition: 0.2s ease-in-out; }\n\t#tv3 a:hover { color: #C19D56; }\n\t#tv3 img { vertical-align: middle; }\n\t#tv3 ul { padding: 0; }\n\t#tv3 .main { display: flex; padding: 10px 20px; align-items: center; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03); background: #FFF; box-sizing: border-box; }\n\t#tv3 .main .llinks { flex:1; margin-bottom:0px; padding:0px; text-shadow: 0 0 0 #000; font-size: 15px; letter-spacing: 0.5px; }\n\t#tv3 .main .rlinks { flex:1; text-align:right; }\n\t#tv3 .main .close { display:none; }\n\t#tv3 .burguer { font-size: 25px; line-height:10px;padding: 10px 20px; margin: -10px -20px; }\n\t#tv3 .change_region_link { cursor: pointer; }\n\t#tv3 .main li { display: inline-block; line-height: 30px; font-size:15px; margin-left: 28px; }\n\t#tv3 .main .rlinks li { margin-left: 24px; }\n\n\t#tv3 a.new:after, #tv3 .biglink a.new span:after { display: inline-block; content: ''; width: 41px; height: 16px; background: url('https://d1fufvy4xao6k9.cloudfront.net/images/menu/new.svg') no-repeat; background-size: cover; margin-left:  10px; vertical-align: middle;}\n\t#tv3 .biglink a.new:after{ display:none;}\n\n\n\t#tv3 .menus { position: fixed;  top: 0; bottom: 0;  left: 0; display: none; right:0; z-index:1000000; background: rgba(0,0,0,0.3); }\n\t.mobile #tv3 .menu { transition:none; }\n\t#tv3 .menu { background: #FFF;  box-sizing:border-box;   font-size: 16px; opacity: 0;  transition: 0.3s ease-in-out; position:relative;  z-index:0; overflow-y: auto; flex-direction:column;   }\n\t#tv3 .menu::-webkit-scrollbar { width: 10px; }\n\t#tv3 .menu::-webkit-scrollbar-track { border-radius: 8px; background-color: #F5F4EF;  /* border: 1px solid #F5F4EF; */ }\n\t#tv3 .menu::-webkit-scrollbar-thumb { border-radius: 8px; border: 3px solid transparent; background-clip: content-box;  background-color: #CCC; }\n\n\t#tv3 .menu.active { opacity: 1; z-index: 1; display: flex; }\n\t#tv3 .menu0.active { z-index: 2; }\n\t#tv3 .menu1.active { z-index: 3; }\n\t#tv3 .menu1 a { display: block; }\n\t#tv3 .menu1 a:first-letter { text-transform: capitalize; }\n\n\t#tv3 .menu2.active { z-index: 4; }\n\t#tv3 .primary { font-size: 22px; margin-bottom: 40px; }\n\t\n\t#tv3 .social span { display:inline-block; margin-right: 12px; }\n\t#tv3 .menu li { display:block; margin-bottom: 21px; }\n\t#tv3 .menu li.split {  border-bottom: 1px solid #CCC;  }\n\t#tv3 .menu .collection_custom_link  { display:block; margin-bottom: 24px; }\n\t#tv3 .paused a { color: #A6A9A9; }\n\t#tv3 .paused a:hover { color: #C19D56; }\n\t#tv3 .paused a.active { color: #212727;  }\n\n\t#tv3 .title { font-size: 22px; margin-bottom: 15px; }\n\n\t#tv3 .menu2 { flex: 1; }\n\n\t#tv3 .plinks { margin-bottom: 40px; }\n\t#tv3 .plinks li {  font-size: 14px; } \n\t#tv3 .plinks img { margin-bottom: 6px; }\n\t#tv3 .plinks li a, #tv3 .plinks li span  { display: block; }\n\n\t#tv3 .biglink img { width: 100%; height: auto; margin-bottom: 10px; margin-top: 35px; }\n\t#tv3 .biglink span { display: block;  } \n\n\t#tv3 .biglink.bottom { margin-top:auto; }\n\n\t#tv3 .biglink.custom_lookbook span {margin-bottom: 23px;} \n\t#tv3 .primary a.red { color: #A62D00; }\n\t#tv3 .primary a.pink { color: #e8458b; }\n\n\t#tv3 .my_shopping_bag{font-size: 22px;}\n\t.promo15 { color: #C19D56 !important; }\n\t\n\t@media (min-width: 801px) {\n\t\t#tv3 .main { height: 65px;  }\n\t\t#tv3 .menus.active { display: flex; }\n\t\t#tv3 .menu { display:none;  }\n\t\t#tv3 .back { display: none; }\n\t\t#tv3 .close {  position:absolute; margin-top:-85px; cursor:pointer;  }\n\n\t\t#tv3 .menu {  width:365px; padding: 117px 40px 70px 40px; }\n\t\t#tv3 .menu li { margin-bottom:21px; }\n\t\t#tv3 .menu .collection_custom_link  { margin-bottom: 21px; }\n\t\t#tv3 .primary { margin-top: -11px; margin-right: -40px }\n\t\t#tv3 .primary li { margin-bottom: 0; }\n\t\t#tv3 .primary a { display: block; padding: 11px 40px 12px 0; }\n\n\t\t#tv3 .main .rlinks {  margin-right: 15px; }\n\t\t#tv3 .title { margin-bottom: 29px;  }\n\t\t#tv3 .menu1 { background: #F5F4EF; padding-left: 23px; padding-right: 23px; }\n\t\t#tv3 .social { position: absolute; bottom: 70px; }\n\n\t\t#tv3 .plinks li { display: inline-block; font-size: 14px; margin-right: 15px; } \n\t\t#tv3 .plinks li span { display: block; }\n\t\t#tv3 .foot { display: none; }\n\t}\n\t@media (min-width: 801px) and (max-height: 750px) {\n\t\t#tv3 .close { margin-top: -40px; }\n\t\t#tv3 .menu { padding-top: 50px; }\n\t\t#tv3 .menu0 { padding-top: 80px; }\n\t\t#tv3 .social { position: initial; margin-top: 40px;  }\n\t}\n\t@media (max-width: 1200px) {\n\t\t#tv3 .main .llinks li { display:none; }\n\t}\n\t@media (max-width: 1300px) {\n\t\t#tv3 .main .llinks li.lookbook{ display:none; }\n\t}\n\t@media (max-width: 800px) {\n\t\t#tv3 .box_burguer { flex: 1; }\n\t\t#tv3 .logo img { width: 103px; height:auto; }\n\t\t#tv3.active .main { z-index: 10000000; position: fixed; top: 0; left: 0; right: 0; box-shadow: none; background: #FFF; }\n\t\t#tv3.active .main img { filter: none; }\n\t\t#tv3.active .burguer { display:none; }\n\t\t#tv3.active .main .close { display:block; }\n\t\t#tv3 .main .llinks { display:none; }\n\t\t#tv3 .menus.active { display: block;  }\n\t\t#tv3 .main .customer, #tv3 .main .region { display:none; }\n\t\t#tv3 .back { display: block;  margin-top: -40px; cursor:pointer; text-transform: uppercase; color: #8B8D8B; font-size: 15px; position:absolute; background: url('https://d1fufvy4xao6k9.cloudfront.net/images/menu/back.svg') center left no-repeat; background-size: 7px; padding-left: 14px; }\n\t\t#tv3 .menus { position: fixed; top:50px; }\n\t\t/*#tv3 .close  { padding: 10px; margin: -95px 0 0 -10px;  }*/\n\t\t#tv3 .title { font-size: 24px; margin-bottom: 35px; }\n\t\t#tv3 .menu { padding: 80px 22px 40px 22px; position:absolute; left:0; right:0; top:0; bottom:0; /*background: #FFF url(https://d2w9m16hs9jc37.cloudfront.net/images/logos/logo_hockerty.svg) center 13px no-repeat;*/\n    background-size: 103px; }\n   \t\t#tv3 .menu0 { padding-bottom: 100px; }\n    \t#tv3 .menu li  { margin-bottom: 24px; }\n\t\t#tv3 .menu .collection_custom_link  { margin-bottom: 24px; }\n    \t#tv3 .menus .close { display:none; }\n\t\t#tv3 .primary { font-size: 22px; }\n\t\t#tv3 .primary li { margin-bottom: 27px; }\n\t\t#tv3 .plinks { display: grid; grid-template-columns: 1fr 1fr; grid-gap: 12px; }\n\t\t#tv3 .plinks li { display: block;  } \n\t\t#tv3 .plinks img { width: 100%; height: auto; }\n\t\t#tv3 .social { display:none; }\n\t\t#tv3 .foot { display: flex; position: fixed; bottom: 0; left: 0; right: 0; background: #F5F4EF; }\n\t\t#tv3 .foot a, #tv3 .foot .change_region_link { padding: 20px; }\n\t\t#tv3 .foot .change_region_link { margin-left: auto;  }\n\n\t\t#tv3 .biglink.bottom { bottom: 30px; }\n\t\t.body_cart #tv3 .cart{display: none;}\n\t\t.body_cart #tv3 .customer{display: inline-block;}\n\t}\n\n\t\n\t#bbar { background:#212127; color:#FFF; text-align: center;  height: 50px; font-weight: 300; letter-spacing: 1px; font-size: 12px; overflow: hidden; user-select: none; -moz-user-select: none;-webkit-user-select: none;  -ms-user-select: none; position:relative; }\n\t#bbar .msg { width: 100%; box-sizing: border-box;  display: inline-block; padding: 0 20px; line-height: 35px; position:absolute; left:0; top:0; opacity:0; transition: opacity 0.8s; }\n\t#bbar .msg.active { opacity: 1; }\n\t\n",
          }}
        />
        <div id="bbar" />
        <div id="tv3" className="sticky white">
          <div className="main">
            <div className="box_burguer">
              <a href="#base_menu" className="burguer">
                <img
                  src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/burger2.svg"
                  width={23}
                  height={15}
                  alt="≡"
                />
              </a>
              <span className="close">
                <img
                  src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/close.svg"
                  width={20}
                  height={20}
                  className="lazy"
                  alt="Close"
                />
              </span>
            </div>
            <ul className="llinks">
              <li className="lookbook">
                <a href="#m_lookbook" className="mlink">
                  Lookbooks
                </a>
              </li>
              <li>
                <a href="#m_clothing" className="mlink">
                  Custom Clothing
                </a>
              </li>
              <li>
                <a href="#m_shoes" className="mlink">
                  Custom Footwear
                </a>
              </li>
              <li>
                <a href="https://www.sumissura.com/en-us/" target="_blank">
                  Women{" "}
                  <img
                    src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/external.svg"
                    width={10}
                    height={10}
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <a href="/en-us/" className="logo">
              <img
                src="https://d2w9m16hs9jc37.cloudfront.net/images/logos/logo_hockerty.svg"
                alt="Hockerty"
                width={115}
                height={30}
              />
            </a>
            <ul className="rlinks">
              <li className="region">
                <span rel="javascript:;" className="change_region_link">
                  <img
                    src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/region.svg"
                    width={22}
                    height={22}
                    alt="Choose your language"
                  />
                </span>
              </li>
              <li className="customer">
                <a href="/en-us/customer/">
                  <img
                    src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/customer.svg"
                    width={20}
                    height={20}
                    alt="Access your account"
                  />
                </a>
              </li>
              <li className="cart">
                <a id="cart-trigger" href="/en-us/checkout/cart" rel="nofollow">
                  <img
                    src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/cart.svg"
                    width={22}
                    height={22}
                    alt="Cart"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="menus">
            <div className="menu menu0" id="base_menu" data-level={0}>
              <span className="close">
                <img
                  data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/close.svg"
                  width={20}
                  height={20}
                  className="lazy"
                  alt="Close"
                />
              </span>
              <ul className="primary">
                <li>
                  <a href="#m_lookbook" className="mlink">
                    Lookbooks
                  </a>
                </li>
                <li>
                  <a href="#m_clothing" className="mlink">
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#m_occasion" className="mlink">
                    Occasion
                  </a>
                </li>
                <li>
                  <a href="#m_shoes" className="mlink">
                    Footwear
                  </a>
                </li>
                <li>
                  <a href="#m_accessories" className="mlink">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="https://www.sumissura.com/en-us/" target="_blank">
                    Women{" "}
                    <img
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/external.svg"
                      className="lazy"
                      width={7}
                      height={7}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#m_about" className="mlink">
                    About
                  </a>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <a href="/en-us/blog/">Blog</a>
                </li>
                <li>
                  <a href="/en-us/fabrics-collection/order-fabric-samples/">
                    Order samples
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/gifts/">Giftcard</a>
                </li>
              </ul>
              <div className="social" data-amp-remove={1}>
                <span
                  rel="https://www.instagram.com/hockerty_official"
                  className="instagram ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/instagram.svg"
                    width={20}
                    height={20}
                    className="lazy"
                    alt="Instagram"
                  />
                </span>
                <span
                  rel="https://www.facebook.com/hockerty"
                  className="facebook ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/facebook.svg"
                    width={20}
                    height={20}
                    className="lazy"
                    alt="Facebook"
                  />
                </span>
                <span
                  rel="https://twitter.com/hockerty_"
                  className="twitter ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/twitter.svg"
                    width={20}
                    height={20}
                    className="lazy"
                    alt="Twitter"
                  />
                </span>
                <span
                  rel="https://www.pinterest.com/hockerty/"
                  className="pinterest ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/pinterest.svg"
                    width={20}
                    height={20}
                    className="lazy"
                    alt="Pinterest"
                  />
                </span>
                <span
                  rel="https://www.tiktok.com/@hockerty"
                  className="tiktok ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/tiktok.svg"
                    width={20}
                    height={20}
                    className="lazy"
                    alt="TikTok"
                  />
                </span>
              </div>
              <div className="foot">
                <a href="/en-us/customer/" className="customer">
                  Access your account
                </a>
                <span
                  rel="javascript:;"
                  className="change_region_link"
                  data-amp-remove={1}
                >
                  English{" "}
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/caretdown.svg"
                    className="lazy"
                    width={9}
                    height={4}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="menu menu1 " id="m_lookbook" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">Shop by looks</p>
              <div className="biglink custom_lookbook">
                <a href="/en-us/spring-summer-2024" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/ss_2024_lookbook.jpg"
                  />
                  <span>Spring - Summer</span>
                </a>
              </div>
              <div className="biglink custom_lookbook">
                <a href="/en-us/mens-outfits" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/STL.jpg"
                  />
                  <span>Outfit Ideas</span>
                </a>
              </div>
              <div className="biglink custom_lookbook">
                <a href="/en-us/pitti-uomo-summer-2023" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/pitti_uomo_summer_2023.jpg"
                  />
                  <span>Summer 23 Editorial</span>
                </a>
              </div>
              <div className="biglink custom_lookbook">
                <a href="/en-us/wedding-collection" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/collection_wedding2022_resize.jpg"
                  />
                  <span>Wedding Collection 2024</span>
                </a>
              </div>
            </div>
            <div className="menu menu1 " id="m_clothing" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">Shop by product</p>
              <ul className="links ">
                <li>
                  <a href="#m_suits" className=" mlink">
                    Suits
                  </a>
                </li>
                <li>
                  <a href="#m_shirts" className=" mlink">
                    Shirts
                  </a>
                </li>
                <li>
                  <a href="#m_blazers" className=" mlink">
                    blazers
                  </a>
                </li>
                <li>
                  <a href="#m_pants" className=" mlink">
                    Pants
                  </a>
                </li>
                <li>
                  <a href="#m_jeans" className=" mlink">
                    jeans
                  </a>
                </li>
                <li>
                  <a href="#m_chinos" className="new mlink">
                    chinos
                  </a>
                </li>
                <li>
                  <a href="#m_tuxedo" className=" mlink">
                    Tuxedo
                  </a>
                </li>
                <li>
                  <a href="#m_outwear" className=" mlink">
                    Outerwear
                  </a>
                </li>
                <li>
                  <a href="#m_vests" className=" mlink">
                    Waistcoats
                  </a>
                </li>
                <li>
                  <a href="#m_polo" className=" mlink">
                    Polo Shirts
                  </a>
                </li>
              </ul>
              <div className="biglink bottom">
                <a href="/en-us/spring-summer-2024" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/ss_2024_lookbook.jpg"
                  />
                  <span>Spring - Summer</span>
                </a>
              </div>
            </div>
            <div className="menu menu2 " id="m_suits" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-suits/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/103.jpg"
                    />
                    <span>Tailored Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/3-pieces-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/58.jpg"
                    />
                    <span>3 Piece suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-tuxedos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/100.jpg"
                    />
                    <span>Tuxedo Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/double-breasted-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dbsuits.jpg"
                    />
                    <span>Double Breasted Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/wedding-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/232.jpg"
                    />
                    <span>Wedding Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tweedsuits.jpg"
                    />
                    <span>Tweed Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/linen-suits/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/linensuits.jpg"
                    />
                    <span>Linen Suits</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/suits/" className="">
                    All suits
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/suits/business-suits/" className="">
                    Business Suits
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/suits/fallwinter-suits/" className="">
                    Fall/Winter Suits
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/suits/stylish-suits/" className="">
                    Stylish Suits
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/party-tuxedos/" className="">
                    Party Tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/suits/new-arrivals/" className="">
                    New Suits Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_shirts" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-dress-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dress_shirts.jpg"
                    />
                    <span>Custom Dress Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/french-cuff-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/frenchcuffshirts.jpg"
                    />
                    <span>French Cuff Dress Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedo-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tuxedoshirt.jpg"
                    />
                    <span>Tuxedo shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/mandarin-collar-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/shirt_mao.jpg"
                    />
                    <span>Mandarin Collar Shirts</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/shirts/" className="">
                    All shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/business-shirts/" className="">
                    Business Dress Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/casual-shirts/" className="">
                    Casual Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/premium-shirts/" className="">
                    Premium Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/spring-summer/" className="">
                    Summer Dress Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/formal-dress-shirts/" className="">
                    Formal Dress Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shirts/new-arrivals/" className="">
                    New dress shirt fabrics
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_blazers" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-jackets/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/107.jpg"
                    />
                    <span>Blazers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/double-breasted-jackets/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dbsuits.jpg"
                    />
                    <span>Double-Breasted Blazers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-winter-blazers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/winterblazer.jpg"
                    />
                    <span>2 in 1 blazers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-jacket/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/105.jpg"
                    />
                    <span>Tweed Jackets</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/unstructured-blazers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/unlined.jpg"
                    />
                    <span>Unstructured Blazers</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/blazers/" className="">
                    All blazers
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/blazers/business-blazers/" className="">
                    Business Blazer
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/blazers/casual-blazers/" className="">
                    Casual Blazer
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/blazers/fallwinter-blazers/" className="">
                    Fall/Winter Blazer
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/blazers/unlined-blazer/" className="">
                    Unlined Blazer
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/blazers/peaky-blinders-blazers/"
                    className=""
                  >
                    Peaky Blinders Blazers
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/blazers/new-arrivals/" className="">
                    Blazers New season
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_pants" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-pants/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/110.jpg"
                    />
                    <span>Dress Pants</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-chinos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/111.jpg"
                    />
                    <span>Chino Pants</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-pants/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tweed_pants.jpg"
                    />
                    <span>Tweed Pants</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/pants/" className="">
                    All pants
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/pants/dress-trousers/" className="">
                    Dress Trousers
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/pants/casual-business/" className="">
                    Casual Business
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/pants/new-arrivals/" className="">
                    New Trousers Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_jeans" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/428_new.jpg"
                    />
                    <span>Custom Jeans</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/skinny-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/441.jpg"
                    />
                    <span>Skinny Jeans</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/slim-fit-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/443.jpg"
                    />
                    <span>Slim Fit Jeans for Men</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/bootcut-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/444.jpg"
                    />
                    <span>Bootcut jeans</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/black-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/439.jpg"
                    />
                    <span>Black Jeans</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/white-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/440.jpg"
                    />
                    <span>White Jeans</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/jeans/" className="">
                    All jeans
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_chinos" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-chinos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/111.jpg"
                    />
                    <span>Chino Pants</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/chino-shorts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/568.jpg"
                    />
                    <span>Chino Shorts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/jogger-dress-pants/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/569.jpg"
                    />
                    <span>Jogger Dress Pants</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/chinos/" className="">
                    All chino pants
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_outwear" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-coats/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/overcoats.jpg"
                    />
                    <span>Coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/duffle-coat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/duffle.jpg"
                    />
                    <span>Duffle coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/double-breasted-coat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dbcoats.jpg"
                    />
                    <span>Double Breasted Coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/peacoat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/peacoat.jpg"
                    />
                    <span>Pea Coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/trench-coat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/trench.jpg"
                    />
                    <span>Trench coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/field-jacket/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/301.jpg"
                    />
                    <span>Field Jackets</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-winter-blazers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/winterblazer.jpg"
                    />
                    <span>2 in 1 blazers</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/coats/" className="">
                    All coats
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/coats/new-coats/" className="">
                    New Coats
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/coats/business-coats/" className="">
                    Business Coats
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/coats/extra-warm-overcoats/" className="">
                    Extra Warm Overcoats{" "}
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/coats/casual-coats/" className="">
                    Casual Coats
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/coats/essential-coats/" className="">
                    Essential Coats
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/trench-coats/new-trench-coats/"
                    className=""
                  >
                    New Trench Coats
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_tuxedo" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-tuxedos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tux2.jpg"
                    />
                    <span>Tuxedo Suits</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/tuxedos/" className="">
                    All tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/wedding-tuxedos/" className="">
                    Wedding Tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/elegant-tuxedos/" className="">
                    Elegant Tuxedos
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/tuxedos/double-breasted-tuxedos/"
                    className=""
                  >
                    Double Breasted Tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/party-tuxedos/" className="">
                    Party Tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/groomzilla-tuxedos/" className="">
                    Groomzilla Tuxedos
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_vests" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-waistcoats/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/vest_normal.jpg"
                    />
                    <span>Vests</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/double-breasted-vests/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/vest_db.jpg"
                    />
                    <span>Double Breasted Vests</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/waistcoats-with-lapels/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/vest_lapels.jpg"
                    />
                    <span>Vests with lapels</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-vests/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/vest_tweed.jpg"
                    />
                    <span>Tweed Vests</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/waistcoats/" className="">
                    All waistcoats
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/waistcoats/suit-vests/" className="">
                    Suit Vests
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/waistcoats/business-casual-vests/"
                    className=""
                  >
                    Business Casual Vests
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/waistcoats/tuxedo-vests/" className="">
                    Tuxedo Vests
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/waistcoats/boho-groom-vests/"
                    className=""
                  >
                    Boho groom Vests
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_polo" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-polo-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/polo_short.jpg"
                    />
                    <span>Polo shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-long-sleeve-polos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/polo_long.jpg"
                    />
                    <span>Long Sleeve Polos</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/polo-shirts/" className="">
                    All Polo shirts
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/polo-shirts/essential-polo-shirts/"
                    className=""
                  >
                    Essential Polo Shirts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/polo-shirts/spring-summer/" className="">
                    Spring Summer Polo Shirts
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu1 " id="m_occasion" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">Shop by occasion</p>
              <ul className="links ">
                <li>
                  <a href="#m_wedding" className=" mlink">
                    Wedding
                  </a>
                </li>
                <li>
                  <a href="#m_business" className=" mlink">
                    business
                  </a>
                </li>
                <li>
                  <a href="#m_party" className=" mlink">
                    party
                  </a>
                </li>
                <li>
                  <a href="#m_casual" className=" mlink">
                    casual
                  </a>
                </li>
                <li>
                  <a href="#m_vintage" className=" mlink">
                    vintage
                  </a>
                </li>
              </ul>
              <div className="biglink bottom">
                <a href="/en-us/wedding-collection" className="">
                  <img
                    alt=""
                    width={309}
                    height={170}
                    layout="responsive"
                    className="lazy"
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/other/collection_wedding2022_resize.jpg"
                  />
                  <span>Wedding Collection 2024</span>
                </a>
              </div>
            </div>
            <div className="menu menu2 " id="m_wedding" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/wedding-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/wedding_all2.jpg"
                    />
                    <span>Wedding Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-tuxedos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tux3.jpg"
                    />
                    <span>Tuxedo Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/morning-coat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/243.jpg"
                    />
                    <span>Morning Coats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tailcoats/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/28.jpg"
                    />
                    <span>Tailcoats</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-wedding-suits/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tweedsuits.jpg"
                    />
                    <span>Tweed wedding suit</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/wedding-vest/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/232.jpg"
                    />
                    <span>Wedding vests</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/french-cuff-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/frenchcuffshirts.jpg"
                    />
                    <span>French Cuff Dress Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/wedding-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/354.jpg"
                    />
                    <span>Wedding shoes</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/tuxedos/" className="">
                    All tuxedos
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedos/wedding-tuxedos/" className="">
                    Wedding Tuxedos
                  </a>
                </li>
                <li>
                  <a
                    href="/en-us/men/tuxedos/double-breasted-tuxedos/"
                    className=""
                  >
                    Double Breasted Tuxedos
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_business" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/business-suits/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/103.jpg"
                    />
                    <span>Business suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-dress-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/frenchcuffshirts.jpg"
                    />
                    <span>Custom Dress Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/winchester-shirt/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dress_shirts_winchester.jpg"
                    />
                    <span>Winchester Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/business-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/320.jpg"
                    />
                    <span>Business Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/business-casual-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/478.jpg"
                    />
                    <span>Business casual sneakers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_party" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-tuxedos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tux2.jpg"
                    />
                    <span>Tuxedo Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedo-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tuxedoshirt.jpg"
                    />
                    <span>Tuxedo shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedo-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/354.jpg"
                    />
                    <span>Tuxedo shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/velvet-tuxedos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/87.jpg"
                    />
                    <span>Velvet tuxedos</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_casual" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-jeans/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/428_new.jpg"
                    />
                    <span>Custom Jeans</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-chinos/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/111.jpg"
                    />
                    <span>Chino Pants</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-jackets/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/107.jpg"
                    />
                    <span>Blazers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-polo-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/polo_short.jpg"
                    />
                    <span>Polo shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-flannel-shirts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/60.jpg"
                    />
                    <span>Flannel Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/safari-jacket/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/301.jpg"
                    />
                    <span>Safari Jackets</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/field-jacket/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/309.jpg"
                    />
                    <span>Field Jackets</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/custom-winter-blazers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/winterblazer.jpg"
                    />
                    <span>2 in 1 blazers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/business-casual-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/478.jpg"
                    />
                    <span>Business casual sneakers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/chino-shorts/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/568.jpg"
                    />
                    <span>Chino Shorts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/jogger-dress-pants/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/569.jpg"
                    />
                    <span>Jogger Dress Pants</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_vintage" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/tweed-suit/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tweedsuits.jpg"
                    />
                    <span>Tweed Suits</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-jacket/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/105.jpg"
                    />
                    <span>Tweed Jackets</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-vests/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/vest_tweed.jpg"
                    />
                    <span>Tweed Vests</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/club-collar-shirt/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/188.jpg"
                    />
                    <span>Club Collar Shirts</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/spectator-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/349.jpg"
                    />
                    <span>Spectator shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/chesterfield-coat/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/dbcoats.jpg"
                    />
                    <span>Chesterfield coats for men</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/459.jpg"
                    />
                    <span>Tweed Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tweed-pants/" className="">
                    <img
                      alt=""
                      width={195}
                      height={108}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/tweed_pants.jpg"
                    />
                    <span>Tweed Pants</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu1 " id="m_shoes" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">Shop shoes</p>
              <ul className="links ">
                <li>
                  <a href="#m_shoe" className=" mlink">
                    shoes
                  </a>
                </li>
                <li>
                  <a href="#m_boot" className=" mlink">
                    Dress boot
                  </a>
                </li>
                <li>
                  <a href="#m_sneaker" className=" mlink">
                    sneakers
                  </a>
                </li>
                <li>
                  <a href="#m_loafer" className=" mlink">
                    Loafers
                  </a>
                </li>
                <li>
                  <a href="#m_shoe_special" className=" mlink">
                    Specials
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_shoe" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-dress-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/421.jpg"
                    />
                    <span>Dress Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/derby-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/338.jpg"
                    />
                    <span>Derby Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/oxford-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/344.jpg"
                    />
                    <span>Oxford Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/monk-strap-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/342.jpg"
                    />
                    <span>Monk shoes</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/shoes/" className="">
                    All shoes
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shoes/formal-shoes/" className="">
                    Formal shoes
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shoes/ellegant-shoes/" className="">
                    Ellegant shoes
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_boot" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/450.jpg"
                    />
                    <span>Custom Boots</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/black-dress-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/420.jpg"
                    />
                    <span>Black Dress Boots</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/chukka-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/417.jpg"
                    />
                    <span>Chukka Boots</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/chelsea-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/419.jpg"
                    />
                    <span>Chelsea Boots</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/brogue-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/409.jpg"
                    />
                    <span>Brogue Boots</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/oxblood-boots/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/415.jpg"
                    />
                    <span>Oxblood Boots</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/shoes/" className="">
                    All shoes
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shoes/casual-boots/" className="">
                    Casual Boots
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/shoes/formal-boots/" className="">
                    Formal Boots
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_sneaker" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/custom-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/478.jpg"
                    />
                    <span>Custom Sneakers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/leather-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/491.jpg"
                    />
                    <span>Leather sneakers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/business-casual-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/492.jpg"
                    />
                    <span>Business casual sneakers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/white-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/490.jpg"
                    />
                    <span>White sneakers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/burgundy-sneakers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/493.jpg"
                    />
                    <span>Burgundy sneakers</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/sneakers/" className="">
                    All sneakers
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu2 " id="m_loafer" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/loafers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/430.jpg"
                    />
                    <span>Custom Loafers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/horsebit-loafers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/436.jpg"
                    />
                    <span>Horsebit Loafers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/penny-loafers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/431.jpg"
                    />
                    <span>Penny Loafers</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tassel-loafers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/435.jpg"
                    />
                    <span>Tassel Loafers</span>
                  </a>
                </li>
              </ul>
              <p className="title ">Collections</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/shoes/" className="">
                    All shoes
                  </a>
                </li>
              </ul>
              <div className="biglink collection_custom_link">
                <a href="/en-us/men/shoes/bit-loafer" className="">
                  Bit Loafer
                </a>
              </div>
              <div className="biglink collection_custom_link">
                <a href="/en-us/men/shoes/tassel-loafer" className="">
                  Tassel Loafers
                </a>
              </div>
              <div className="biglink collection_custom_link">
                <a href="/en-us/men/shoes/penny-loafer" className="">
                  Penny Loafers
                </a>
              </div>
            </div>
            <div className="menu menu2 " id="m_shoe_special" data-level={2}>
              <span className="back">Back</span>
              <p className="title ">Design your own</p>
              <ul className="plinks ">
                <li>
                  <a href="/en-us/men/brogue-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/346.jpg"
                    />
                    <span>Brogues</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/wholecut-oxford/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/355.jpg"
                    />
                    <span>Wholecut oxford shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/wingtip-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/356.jpg"
                    />
                    <span>Wing tip shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/tuxedo-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/352.jpg"
                    />
                    <span>Tuxedo shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/spectator-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/349.jpg"
                    />
                    <span>Spectator shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/two-tone-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/353.jpg"
                    />
                    <span>Two tone shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/oxblood-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/366.jpg"
                    />
                    <span>Oxblood shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/suede-shoes/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/350.jpg"
                    />
                    <span>Suede Shoes</span>
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/velvet-loafers/" className="">
                    <img
                      alt=""
                      width={195}
                      height={145}
                      layout="responsive"
                      className="lazy"
                      data-src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/hockerty/v2/landings/467.jpg"
                    />
                    <span>Velvet Loafers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu menu1 " id="m_accessories" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">Shop accessories</p>
              <ul className="links ">
                <li>
                  <a href="/en-us/men/accessories/tie/" className="">
                    Ties
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/cufflink/" className="">
                    Cufflinks
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/belt/" className="">
                    Belts
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/bowties/" className="">
                    Bow-Ties
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/scarf/" className="">
                    Scarfs
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/socks/" className="">
                    socks
                  </a>
                </li>
                <li>
                  <a href="/en-us/men/accessories/" className="">
                    all accesories
                  </a>
                </li>
              </ul>
            </div>{" "}
            <div className="menu menu1" id="m_about" data-level={1}>
              <span className="back">Back</span>
              <p className="title ">About</p>
              <ul>
                <li>
                  <a href="/en-us/info/our-mission">Our mission</a>
                </li>
                <li>
                  <a href="/en-us/info/our-values">Our values</a>
                </li>
                <li>
                  <a href="/en-us/info/how-it-works">How it works</a>
                </li>
                <li>
                  <a href="/en-us/info/partners-network">
                    Our Partners Network
                  </a>
                </li>
                <li>
                  <a href="/en-us/info/contact/">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="lang_selector">
          <div className="regions_popup">
            <div className="background">&nbsp;</div>
            <div
              id="language_selector"
              data-domain=""
              className="language_selector  min"
            >
              <a href="#" className="close" title="Close">
                v
              </a>{" "}
              <ul className="en">
                <li className="title">
                  <span>ENGLISH</span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/en-us/"
                    className="ds_link"
                  >
                    USA
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/en-ca/"
                    className="ds_link"
                  >
                    Canada
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.uk/en-uk/"
                    className="ds_link"
                  >
                    United Kingdom
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/en-au/"
                    className="ds_link"
                  >
                    Australia
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/en-ie/"
                    className="ds_link"
                  >
                    Ireland
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.ch/en-ch/"
                    className="ds_link"
                  >
                    Switzerland
                  </span>
                </li>
                <li>
                  <span rel="https://www.hockerty.com/en/" className="ds_link">
                    Others
                  </span>
                </li>
              </ul>
              <ul className="es">
                <li className="title">
                  <span>ESPAÑOL</span>
                </li>
                <li>
                  <span rel="https://www.hockerty.es/es/" className="ds_link">
                    España
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/es-us/"
                    className="ds_link"
                  >
                    Estados Unidos
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/es-mx/"
                    className="ds_link"
                  >
                    México
                  </span>
                </li>
                <li>
                  <span rel="https://www.hockerty.es/es/" className="ds_link">
                    Otros
                  </span>
                </li>
              </ul>
              <ul className="fr">
                <li className="title">
                  <span>FRANÇAIS</span>
                </li>
                <li>
                  <span rel="https://www.hockerty.fr/fr/" className="ds_link">
                    France
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/fr-be/"
                    className="ds_link"
                  >
                    Belgique
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.ch/fr-ch/"
                    className="ds_link"
                  >
                    Suisse
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.com/fr-ca/"
                    className="ds_link"
                  >
                    Canada
                  </span>
                </li>
              </ul>
              <ul className="de">
                <li className="title">
                  <span>DEUTSCH</span>
                </li>
                <li>
                  <span rel="https://www.hockerty.de/de/" className="ds_link">
                    Deutschland
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.at/de-at/"
                    className="ds_link"
                  >
                    Österreich
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.ch/de-ch/"
                    className="ds_link"
                  >
                    Schweiz
                  </span>
                </li>
              </ul>
              <ul className="it">
                <li className="title">
                  <span>ITALIANO</span>
                </li>
                <li>
                  <span rel="https://www.hockerty.it/it/" className="ds_link">
                    Italia
                  </span>
                </li>
                <li>
                  <span
                    rel="https://www.hockerty.ch/it-ch/"
                    className="ds_link"
                  >
                    Svizzera
                  </span>
                </li>
              </ul>
              <ul className="po">
                <li className="title">
                  <span>РУССКИЙ</span>
                </li>
                <li>
                  <span rel="https://www.hockerty.ru/ru/" className="ds_link">
                    Russia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*googleon: all*/}{" "}
        <div id="body" className="home">
          <div className="body_box ">
            {" "}
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n\t\n\tdiv.body_box { width: auto; }\n\t.slider_container { overflow-x: auto; overflow-y: hidden; text-align:left; }\n\t.slider_container .slider { white-space:nowrap; vertical-align:top; }\n\t.slider_container .slide { display:inline-block; position:relative; white-space:normal; }\n\t.slider_container::-webkit-scrollbar { height: 5px; border-radius: 10px; }\n\t.slider_container::-webkit-scrollbar-track { background: #f1f1f1; }\n\t.slider_container::-webkit-scrollbar-thumb { background: #888;}\n\t.slider_container::-webkit-scrollbar-thumb:hover { background: #555;}\n\n\t.separator hr { margin:0 25px; border: 0; border-top: 1px solid #c5c7c2; }\n\n\t \n\n\t#main_products{padding:65px 0 95px}#main_products h3.title{font-size:30px;font-weight:300;color:#212727;text-align:left;padding:0 36px;margin-bottom:30px}#main_products .slider_wrap{position:relative;padding:0 0 0 30px}#main_products .slider_controll{position:absolute;top:0;height:100%;width:150px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;z-index:1000}#main_products .slider_controll.button_left{left:0}#main_products .slider_controll.button_right{right:0}#main_products .list_wrap{overflow:hidden;padding-bottom:40px}#main_products .list_wrap .list{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:60vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.75s;transition-duration:.75s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}#main_products .list_wrap img.b-loaded{-webkit-transform:none;-ms-transform:none;transform:none}#main_products .arrow{font-size:40px;line-height:68px;font-family:nc-nav,sans-serif;background:rgba(0,0,0,.23);color:#fff;border-radius:50%;height:62px;width:62px;text-align:center;font-weight:bolder}#main_products .arrow.arrow_left{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}#main_products .element{display:inline-block;position:relative;width:40vh;margin:0 6px}#main_products.mobile .slider_controll,#main_products.tablet .slider_controll{display:none}#main_products .element.shoes .image{padding:0;margin-top:1px}#main_products .element .image{margin:0 auto;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:60vh;overflow:hidden;background:#dedede}#main_products a{text-decoration:none}#main_products .element .title{color:#000;padding-top:10px;font-size:16px;font-weight:400}#main_products .shoes .image img{height:60vh}@media (min-width:100px){#main_products .element .image picture{position:absolute;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}#main_products .element .image picture.hover,#main_products .element:hover .image picture:default{opacity:0}#main_products .element:hover .image picture.hover{opacity:1}}#main_products.tablet .slider_wrap{padding:0}#main_products.tablet .list_wrap{overflow-x:scroll;padding:0 15px}#main_products.tablet .list{padding-right:15px}#main_products.mobile{padding:50px 0 95px}#main_products.mobile h3.title{font-size:36px;padding:0 21px}#main_products.mobile .slider_wrap{padding:0}#main_products.mobile .list_wrap{overflow:auto}#main_products.mobile .list{padding-right:15px;padding-left:16px}#main_products.mobile .b-loaded{height:auto}@media (orientation:landscape){#main_products.mobile .list_wrap,#main_products.mobile .shoes .image img{height:85vh}#main_products.mobile .element{width:50vh;height:85vh}}\n\t.looks{background-color:#212727;color:#FFF;padding:60px 0 50px 20px}.looks .slider{padding-bottom:10px;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.75s;transition-duration:.75s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.looks .cta,.looks .hcta{padding:10px 28px;border-radius:40px}.looks .title{font-size:33px;margin-bottom:20px}.looks .text{font-size:15px;letter-spacing:.5px;line-height:20px;margin-bottom:20px;color:#D3D4D4}.looks .slider_container{margin-bottom:25px}.looks .slider_container::-webkit-scrollbar-track{background:#212727}.looks .look{width:280px;margin-right:20px;position:relative}.looks .look img{height:auto;width:auto}.looks .cta{display:inline-block;background:#FFF;color:#212127;font-size:13px;text-decoration:none}.looks .cta:hover{background-color:#FF7A00;color:#FFF;text-decoration:none}.looks .hover{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.3);opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.looks .hcta{display:inline-block;background:#212121;color:#FFF;font-size:12px}.looks a:hover .hover{opacity:1}.looks .wrap_container{position:relative}.looks .slider_controll{position:absolute;top:0;height:100%;width:90px;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;z-index:1000}.looks .slider_controll.button_left{left:0}.looks .slider_controll.button_right{right:0}.looks .arrow{font-size:40px;line-height:68px;font-family:nc-nav,sans-serif;background:rgba(0,0,0,.23);color:#fff;border-radius:50%;height:62px;width:62px;text-align:center;font-weight:bolder}.looks .arrow.arrow_left{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.woman .looks .cta:hover{background-color:#E8458B}@media (min-width:801px){.looks{padding-left:60px}.looks .title{font-size:60px;font-weight:400}.looks .text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.looks .text p{max-width:500px}.looks .cta_row{margin-left:auto;padding-right:60px}.looks .slider_container{overflow:hidden}.looks .slider_controll{display:-webkit-box;display:-ms-flexbox;display:flex}}\n\t.reviews{color:#212727;padding:70px 25px}.reviews .title_row{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:50px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.reviews .title{font-size:24px;font-weight:400}.reviews .slider_container{margin-bottom:20px;overflow:hidden}.reviews .trustpilot{margin-left:auto}.reviews .trustpilot .rate{font-size:13px;opacity:.6}.reviews .trustpilot img{width:72px;height:auto;vertical-align:bottom;margin-left:5px;padding-bottom:2px}.reviews .trustpilot .total{display:none}.reviews .slider{-webkit-transition:all .5s;transition:all .5s}.reviews .review{width:100%;padding-bottom:20px;vertical-align:top}.reviews .stars_row{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:25px}.reviews .stars_row .stars img{width:22px;height:22px;padding:1px 2px 2px}.reviews .navigate{margin-left:auto}.reviews .navigate span{cursor:pointer}.reviews .navigate img{width:21px;height:21px}.reviews .navigate .next img{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.reviews .review .title{font-weight:400;font-size:16px;line-height:20px;margin-bottom:12px}.reviews .review .text{font-size:14px;line-height:26px;margin-bottom:40px;color:#777B7B;-webkit-line-clamp:6;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.reviews .review .author{font-size:14px}.reviews .cta_row{text-align:center}.reviews .cta{display:inline-block;background:#212727;color:#FFF;padding:12px 30px;font-size:13px;border-radius:40px}.reviews .cta:hover{background-color:#FF7A00;text-decoration:none}.woman .reviews .cta:hover{background-color:#E8458B;text-decoration:none}@media(min-width:801px){.reviews{padding-left:35px;padding-right:35px}.reviews .slider{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.reviews .review .title{font-size:16px}.reviews .review{width:23%}.reviews .navigate,.reviews .review:nth-of-type(1n+4){display:none}.reviews .trustpilot{min-width:460px}.reviews .trustpilot .total{margin-left:20px;font-size:16px;font-weight:300;display:inline}}\n\t.featured,.featured .logos{text-align:center;position:relative;width:100%}.featured{padding:60px 0 0;height:100%}.featured .title_featured{font-size:24px;line-height:30px;font-weight:700;margin:0;text-transform:none;color:inherit}.featured .logos{height:220px;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden}.featured .logos .logo{min-width:100%;height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:100%;-webkit-animation:.6s cubic-bezier(.645,.045,.355,1) 0s left;animation:.6s cubic-bezier(.645,.045,.355,1) 0s left;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;background-size:cover!important;background-position:50%!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#logos_desktop{display:none}#logos_desktop img,.featured .logos .logo img{display:inline-block;opacity:.2;height:35px;width:auto;min-width:1px}.featured .logos .text{margin-top:20px;padding:0 20px;line-height:22px;font-weight:lighter}.firma_landing .featured .logos{display:none!important}.firma_landing .featured{padding:95px 0 70px}.firma_landing #logos_desktop{display:block!important}#logos_desktop{margin-top:40px}#logos_desktop img{margin:10px;height:22px}#logos_desktop img.active,.firma_landing #logos_desktop img{opacity:1}@-webkit-keyframes leftNext{from{left:100%}to{left:0}}@keyframes leftNext{from{left:100%}to{left:0}}@-webkit-keyframes leftCurr{from{left:0}to{left:-100%}}@keyframes leftCurr{from{left:0}to{left:-100%}}@-webkit-keyframes rightNext{from{left:-100%}to{left:0}}@keyframes rightNext{from{left:-100%}to{left:0}}@-webkit-keyframes rightCurr{from{left:0}to{left:100%}}@keyframes rightCurr{from{left:0}to{left:100%}}@media (min-width:801px){#logos_desktop{display:block}#logos_desktop img{margin:10px 20px;height:35px}.featured{padding-top:80px}.featured .logos{height:160px}.featured .logos .logo img{display:none}.featured .logos .text{font-size:18px;line-height:24px;margin-top:0;padding:0 30%}#body div:not(.firma_landing) .featured .desktop{cursor:pointer}}\n\n \t\n\t.hero { height: 66vw; position: relative; max-height: 100vh; user-select: none; -moz-user-select: none;-webkit-user-select: none;  -ms-user-select: none;  }\n\t.hero .images { position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden;  }\n\t.hero .images .img { position: absolute; left: 0; top: 0; right: 0; bottom: 0; background-size: cover; }\n\t.hero .text { position: absolute; bottom:0px; padding: 20px 20px 40px 20px; left: 0px; right: 0; box-sizing: border-box; color: #212121;  text-align: center;\n\t\tbackground: linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);\n\t}\n\t.hero .text.blackfriday{    top: 0px;\n    left: 0px;\n    right: 0px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\t}\n\n\t.hero .text_pad { max-width: 850px;  } \n\t.hero .text_pad.bf { max-width: 950px;  } \n\t.hero .blackfriday .text_pad { margin: 0 auto;  } \n\n\t.hero.white .text { color: #FFF;  background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%); }\n\t.hero h1 { font-size: 42px; line-height: 40px; font-weight: normal; margin-bottom: 25px; }\n\t.hero img.elbuenfin{width:130px;}\n\t.hero .blackfriday h1{font-size: 46px; line-height: 44px;font-weight: bold;margin-bottom: 15px;}\n\t.hero .blackfriday h2{font-size: 32px; text-transform: uppercase;margin-bottom: 10px;}\n\t.hero .blackfriday div{font-size: 16px;text-transform: uppercase;font-weight: lighter;}\n\n\t.hero h2 { font-size: 16px; font-weight: normal; margin-bottom: 25px; }\n\t.hero .cta { color: #FFF; background: #FF7A00; text-decoration: none; display: inline-block; padding: 15px 35px; font-size: 14px; border-radius: 40px; }\n\t.woman .hero .cta {background: #E8458B;}\n\t.hero .cta:hover { background: #000; transition: background .2s ease-in;  }\n\n\t.hero .cta_bf{text-transform:lowercase; margin-left:20px;display: inline-block;font-size: 14px;padding: 8px 28px;border-radius: 50px;color: #ffffff;border: 1px solid #dbdbdb;text-decoration: none;letter-spacing: 1px;}\n    .hero .cta_bf:hover{color: #1f2c28; background-color:#FFF;font-weight: lighter;text-decoration:none;}\n\n\t.hero .scroll { text-transform: uppercase; font-weight: 300; font-size: 12px; }\n\t.hero.white .scroll img { filter: invert(100%); }\n\n\t.no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1200.jpg'); }\n\t @media(min-width: 1201px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1500.jpg'); }}\n\t @media(min-width: 1501px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1800.jpg'); }}\n\t @media(min-width: 1801px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_2500.jpg'); }}\n\t @media(max-width: 1024px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1024.jpg'); }}\n\t @media(max-width: 800px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/mob_1024.jpg'); }}\n\t @media(max-width: 600px){ .no-webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/mob_800.jpg'); }}\n\n\t.webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1200.webp'); }\n\t @media(min-width: 1201px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1500.webp'); }}\n\t @media(min-width: 1501px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1800.webp'); }}\n\t @media(min-width: 1801px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_2500.webp'); }}\n\t @media(max-width: 1024px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/dkt_1024.webp'); }}\n\t @media(max-width: 800px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/mob_1024.webp'); }}\n\t @media(max-width: 600px){ .webp .hero .main_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/2024/2024-03/mob_800.webp'); }}\n\n\t\t\n\t.no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1200.jpg'); }\n\t @media(min-width: 1201px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1500.jpg'); }}\n\t @media(min-width: 1501px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1800.jpg'); }}\n\t @media(min-width: 1801px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/2500.jpg'); }}\n\t @media(max-width: 1024px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1024.jpg'); }}\n\t @media(max-width: 800px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/m1024.jpg'); }}\n\t @media(max-width: 600px){ .no-webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/m800.jpg'); }}\n\n\t.webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1200.webp'); }\n\t @media(min-width: 1201px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1500.webp'); }}\n\t @media(min-width: 1501px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1800.webp'); }}\n\t @media(min-width: 1801px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/2500.webp'); }}\n\t @media(max-width: 1024px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/1024.webp'); }}\n\t @media(max-width: 800px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/m1024.webp'); }}\n\t @media(max-width: 600px){ .webp .hero .wedding_img { background-image: url('https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/wedding-tweed-2302/m800.webp'); }}\n\n\n\n\n\t.designer { background-color: #F5F4EF; padding: 80px 25px 74px 25px; color: #212727; }\n\t.designer .title { font-size:30px; font-weight: bold; margin-bottom: 55px; }\n\t.designer .image { margin-bottom: 30px; text-align: center; padding: 0 60px; }\n\t.designer video { width:100%; max-width: 600px; }\n\t.designer .text { font-size: 15px; line-height:23px; margin-bottom:25px; }\n\t.designer img.b-lazy { width:auto; height:auto; }\n\t.designer .cta { display: inline-block; border: 1px solid #212121; color: #212121; padding: 13px 25px; border-radius: 40px; text-decoration: none; font-size: 14px; }\n\t.designer .cta:hover { background-color:#212727; color:#FFF; text-decoration:none; }\n\n\t.big_features { padding: 70px 0 40px 0; }\n\t.big_features .feature { display: flex;  align-items: center; text-align: center;     justify-content: space-around; }\n\t.big_features img:not(.i-amphtml-fill-content) { max-width: 100%; min-width: 10px; min-height: 10px; height:auto; }\n\t.big_features .last { flex-direction: row-reverse; }\n\t.big_features .text { box-sizing: border-box; padding: 0 5%; font-size: 16px; line-height: 24px; }\n\t.big_features .title { font-size: 42px; line-height: 42px; margin-bottom: 20px; }\n\t.big_features .intro {  margin-bottom: 20px; }\n\t.big_features .cta { display:  inline-block; border: 1px solid #212121; color: #212127; padding: 13px 25px; border-radius: 40px; text-decoration: none; font-size: 14px; }\n\t.big_features .cta:hover { background: #212127; color:#FFF; text-decoration:none; }\n\n\t.perfect_fit { background: #AA5641; color: #FFF; font-size: 16px; line-height: 24px; display: flex; height: 800px; align-items: center; padding: 0 20px; position: relative; overflow: hidden; }\n\t.woman .perfect_fit { background: #E8458B; }\n\t.perfect_fit .title {  font-size: 32px; line-height: 32px; margin-bottom: 25px; }\n\t.perfect_fit .intro {  margin-bottom: 25px; }\n\t.perfect_fit .cta { color: #FFF; border-radius: 40px; text-decoration: underline; }\n \t.perfect_fit  img, .perfect_fit  amp-img { position: absolute; }\n \t.perfect_fit  .b-loaded { width: auto; height: auto; }\n\t@media (min-width: 801px) {\n\t\t.clone_desktop { display:none; }\n\t\t.separator hr { margin: 0 35px; }\n\t\t.separator.mobile { display:none; }\n\t\t.hero .text  { padding: 30px 50px 60px 50px; text-align: left;}\n\t\t.hero h1 { font-size: 70px; line-height: 60px; }\n\t\t.hero img.elbuenfin{width:180px;}\n\t\t.hero h2 { font-size: 20px;  }\n\n\t\t.hero .text.blackfriday{text-align:center;}\n\t\t.hero .text.blackfriday h1 { font-size: 105px;line-height: 90px; font-weight:bold;margin-bottom:30px }\n\t\t.hero .text.blackfriday h2 { font-size: 66px; text-transform: uppercase; font-weight: lighter; margin-bottom:12px}\n\t\t.hero .text.blackfriday div { font-size: 32px; text-transform: uppercase; font-weight: lighter; }\n\n\t\t.hero .scroll { display: none; }\n\n\t\t.designer { display:flex; justify-content: space-around; align-items:center;  }\n\t\t.designer .title { font-size:60px; font-weight: normal; }\n\t\t.designer .title_content { width: 410px; }\n\t\t.designer .image { max-width: 750px; padding: 0;  }\n\t\t.designer .mobile { display:none; }\n\n\t\t.big_features { padding: 80px 40px 40px 40px; }\n\t\t.big_features .feature { margin-bottom: 40px; }\n\t\t.big_features .image { width: 45%; }\n\t\t.big_features .title { font-size: 50px; line-height: 50px;  }\n\t\t.big_features .text { width: 45%;  }\n\n\t\t.perfect_fit .text { width: 40%; margin-left: auto; box-sizing: border-box; padding-right: 10%; }\n\t\t.perfect_fit .title {  font-size: 50px; line-height: 50px; }\n\n\t\t.perfect_fit .f1 { left: 15%; top: 0; width: 25%; }\n\t\t.perfect_fit .f2 { top: 0; right: 0; }\n\t\t.perfect_fit .f3 { right: 50%; top: 50%; transform: translateY(-50%); }\n\t\t.perfect_fit .f4 { top: 50%; left: 25%; }\n\t\t.perfect_fit .f5 { bottom: 0; left: 0; }\n\t\t.perfect_fit .f6 { bottom: 0; right: 0; }\n\t}\n\n\t@media (max-width: 800px) {\n\t\t.desktop { display:none; }\n\t\t.hero { height: 90vh; }\n\n\t\t.hero .cta_bf{    display: block;max-width: fit-content; margin: 20px auto;}\n\n\t\t#main_products.mobile h3.title { font-size: 22px; }\n\n\t\t.big_features .feature { flex-direction: column-reverse; }\n\t\t.big_features .feature.last { flex-direction: column; }\n\t\t.big_features .text { padding-bottom: 50px; }\n\t\t.big_features .last .text { padding-top: 50px; }\n\n\t\t.designer .desktop { display:none; }\n\n\t\t.perfect_fit { padding: 141vw 20px 59vw 20px; height: auto; }\n\t\t.perfect_fit .text { z-index: 10; }\n\t\t.perfect_fit .title { padding-right: 80px; }\n\t\t.perfect_fit .f1 { left: 5%; top: 0; width: 70%; }\n\t\t.perfect_fit .f2 { top: 49vw; right: 0; width: 40%; }\n\t\t.perfect_fit .f3 { left: 55%; top: 107vw; width: 30%; }\n\t\t.perfect_fit .f4 { left: 27%; top: 72vw; width: 30%; }\n\t\t.perfect_fit .f5 { bottom: 0; left: 0; width: 30%; }\n\t\t.perfect_fit .f6 { bottom: 0; right: 0; width: 66.5%; }\n\n\n\t}\n",
              }}
            />
            <div className="hero white">
              <div className="images">
                <div className="main_img img" id="hero_img" />
              </div>
              <div className="text " id="hero_text">
                <div className="text_pad">
                  <h1>Dress the real you</h1>
                  <h2>Clothes made to fit you, not the other way around</h2>
                  <div className="cta_row">
                    <span className="scroll">
                      Scroll for more
                      <br />
                      <img
                        src="https://d1fufvy4xao6k9.cloudfront.net/images/menu/caretdown.svg"
                        width={11}
                        height={6}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainblock" id="main_products">
              <h3 className="title">Bespoke from head to toe</h3>
              <div className="slider_wrap">
                <div className="slider_controll button_left">
                  <div className="arrow arrow_left">f</div>
                </div>
                <div className="list_wrap">
                  <div className="list">
                    <div className="element suits">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-suits/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/suit_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/suit_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Custom Suits"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/suit_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Custom Suits</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element shirts">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-dress-shirts/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shirt_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shirt_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Custom Shirts"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shirt_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Custom Shirts</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element blazers">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-jackets/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/blazer_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/blazer_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Blazers"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/blazer_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Blazers</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element wedding">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/wedding-suit/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/wedding_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/wedding_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Wedding"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/wedding_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Wedding</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element field_jackets">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/field-jacket/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/field_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/field_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Field Jackets"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/field_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Field Jackets</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element jeans">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-jeans/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/jeans_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/jeans_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Jeans"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/jeans_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Jeans</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element tuxedos">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-tuxedos/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/tuxedo_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/tuxedo_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Tuxedos"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/tuxedo_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Tuxedos</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element shoes">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-dress-shoes/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shoes_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shoes_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Shoes"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/shoes_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Shoes</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element vests">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-waistcoats/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/vest_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/vest_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Vests"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/vest_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Vests</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element polo_shirts">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/custom-polo-shirts/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/polo_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/polo_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Polo shirts"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/polo_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Polo shirts</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element trenchcoats">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/trench-coat/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/trench_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/trench_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Trenchcoats"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/trench_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Trenchcoats</h2>
                        </div>
                      </a>
                    </div>
                    <div className="element wool_coats">
                      <a
                        className="element_link"
                        href="https://www.hockerty.com/en-us/men/overcoat/"
                      >
                        <div className="image">
                          <picture>
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/coat_1.webp"
                              type="image/webp"
                            />
                            <source
                              srcSet="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/coat_1.jpg"
                              type="image/jpg"
                            />
                            <img
                              className="main other review_lazy_img b-lazy"
                              alt="Wool Coats"
                              loading="lazy"
                              data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/hockerty/home/main_products_block_firma/coat_1.jpg"
                            />
                          </picture>
                        </div>
                        <div className="title_wrap">
                          <h2 className="title">Wool Coats</h2>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="slider_controll button_right">
                  <div className="arrow arrow_right">f</div>
                </div>
              </div>
            </div>
            <div className="designer">
              <div className="title_content">
                <p className="title">Tech for a perfect fit</p>
                <div id="designer_desktop" />
              </div>
              <div className="image">
                <video
                  className="b-lazy desktop"
                  autoPlay=""
                  loop=""
                  muted=""
                  playsInline=""
                  data-amp-remove={1}
                >
                  <source
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer/desktop.mp4"
                    type="video/mp4"
                  />
                  <source
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer/desktop.mp4"
                    type="video/mp4"
                  />
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer_desktop.jpg"
                    className="blazy"
                    alt=""
                  />
                </video>
                <video
                  className="b-lazy mobile"
                  autoPlay=""
                  loop=""
                  muted=""
                  playsInline=""
                  data-width={205}
                  data-height={410}
                  layout="responsive"
                >
                  <source
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer/mobile.mp4"
                    type="video/mp4"
                  />
                  <source
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer/mobile.mp4"
                    type="video/mp4"
                  />
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/designer_mobile.jpg"
                    data-width={205}
                    data-height={410}
                    className="blazy"
                    alt=""
                  />
                </video>
              </div>
              <div className="clone_desktop" data-target="designer_desktop">
                <div className="text">
                  When your clothes are made with care, you can feel it. Before
                  our tailors handcraft your piece, our algorithm uses a
                  decade’s worth of sizing data to make sure it fits you right.
                  Hard to believe, easy to prove.
                </div>
                <div className="cta_row">
                  <a className="cta" href="/en-us/info/our-values#technology">
                    Know more
                  </a>
                </div>
              </div>
            </div>
            <div className="looks">
              <div className="title_row">
                <p className="title">Outfit Ideas</p>
                <div className="text" id="looks_text">
                  <p>
                    Get inspired by our community. Real customers like you
                    styling great outfits based on Hockerty garments
                  </p>
                </div>
              </div>
              <div className="wrap_container">
                <div className="slider_controll button_left">
                  <div className="arrow arrow_left">f</div>
                </div>
                <div className="slider_container">
                  <div className="slider">
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1472-sophisticated-graphite-suit-black-overcoat/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1472/image00006-min.jpeg"
                        alt="sophisticated-graphite-suit-black-overcoat"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1470-sapphire-velvet-tuxedo-loafers/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1470/afae (34).jpg"
                        alt="sapphire-velvet-tuxedo-loafers"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1469-orange-peak-lapel-suit-summer-time/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1469/afae (24).jpg"
                        alt="orange-peak-lapel-suit-summer-time"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1468-red-cotton-shawl-lapel-evening-suit/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1468/afae (37).jpg"
                        alt="red-cotton-shawl-lapel-evening-suit"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1456-cinnamon-elegant-suit-summer-outfit/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1456/afae (22).jpg"
                        alt="cinnamon-elegant-suit-summer-outfit"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1455-sandstone-urban-look-sunglasses/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1455/hrsge (12).jpg"
                        alt="sandstone-urban-look-sunglasses"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1454-white-suit-dapper-outfit-beach/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1454/hrsge (11).jpg"
                        alt="white-suit-dapper-outfit-beach"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1453-cobalt-suit-white-tee/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1453/hrsge (8).jpg"
                        alt="cobalt-suit-white-tee"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1452-beige-summer-suit-sunglasses/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1452/hrsge (10).jpg"
                        alt="beige-summer-suit-sunglasses"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                    <a
                      className="slide look"
                      href="/en-us/mens-outfits/1450-black-suit-jacket-black-jeans/"
                    >
                      <img
                        className="look-image b-lazy"
                        data-src="https://dqp736wsu6w3m.cloudfront.net/s3bucket/w300/looks/1450/hrsge (6).jpg"
                        alt="black-suit-jacket-black-jeans"
                        width={280}
                        height={350}
                      />
                      <span className="hover">
                        <span className="hcta">SHOP LOOK</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="slider_controll button_right">
                  <div className="arrow arrow_right">f</div>
                </div>
              </div>
              <div className="cta_row clone_desktop" data-target="looks_text">
                <a className="cta" href="/en-us/mens-outfits/">
                  Check them all
                </a>
              </div>
            </div>
            <div className="big_features">
              <div className="feature planet">
                <div className="image">
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/environment.jpg"
                    width={375}
                    height={419}
                    className="b-lazy"
                    alt=""
                  />
                </div>
                <div className="text">
                  <p className="title">
                    Our planet
                    <br />
                    appreciates it
                  </p>
                  <p className="intro">
                    Feel great about your clothes and your environmental impact.
                    There’s no waste when you wear one-of-a-kind.
                  </p>
                  <p className="cta_row">
                    <a
                      href="/en-us/info/our-values#sustainability"
                      className="cta"
                    >
                      Learn how it's made
                    </a>
                  </p>
                </div>
              </div>
              <div className="feature last">
                <div className="image">
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/looks-that-last.jpg"
                    width={630}
                    height={703}
                    className="b-lazy"
                    alt=""
                  />
                </div>
                <div className="text">
                  <p className="title">Looks that last</p>
                  <p className="intro">
                    We know you pay attention to detail, and so do we. From
                    durable fabrics to our quality-controlled tailoring process.
                    Get samples of any fabric in our 150+ range, and be assured
                    that your garments are timeless.
                  </p>
                  <p className="cta_row">
                    <a
                      href="/en-us/fabrics-collection/order-fabric-samples/"
                      className="cta"
                    >
                      Order samples
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="perfect_fit">
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_bestmen.jpg"
                className="f1 b-lazy"
                data-width={263}
                data-height={142}
                alt=""
              />
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_sand.jpg"
                className="f2 b-lazy"
                data-width={150}
                data-height={205}
                alt=""
              />
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_suit.jpg"
                className="f3 b-lazy"
                data-width={113}
                data-height={149}
                alt=""
              />
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_tweed.jpg"
                className="f4 b-lazy"
                data-width={113}
                data-height={142}
                alt=""
              />
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_wedding.jpg"
                className="f5 b-lazy"
                data-width={113}
                data-height={176}
                alt=""
              />
              <img
                data-src="https://d1fufvy4xao6k9.cloudfront.net/images/home/hockerty/pf_pitti.jpg"
                className="f6 b-lazy"
                data-width={249}
                data-height={176}
                alt=""
              />
              <div className="text">
                <p className="title">
                  Perfect fit garments, to your specifications
                </p>
                <p className="intro">
                  From fabrics and buttons to pocket styles and lining colors,
                  personalize your handcrafted look. Take control and feel
                  confident with our Perfect Fit Guarantee.{" "}
                </p>
                <p className="cta_row">
                  <a href="/en-us/info/how-it-works" className="cta">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div className="featured" data-amp-remove={1}>
              <span className="title_featured">Featured in</span>
              <div id="logos_desktop" />
              {/*
  <div class="logos">
                                                                                                                                  </div>
  */}
              <div className="logos">
                <div className="logo" data-logo_name="esquire">
                  <img
                    className="esquire clone_inline active b-lazy"
                    data-target="logos_desktop"
                    alt=""
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/mentioned/esquire.jpg"
                    width={660}
                    height={97}
                  />
                  <span className="text">
                    "With its design system, you can fully customize your shoes,
                    getting super original or classic pieces, as you wish, in a
                    super intuitive way."
                  </span>
                </div>
                <div className="logo" data-logo_name="gq">
                  <img
                    className="gq clone_inline b-lazy"
                    data-target="logos_desktop"
                    alt=""
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/mentioned/gq.jpg"
                    width={324}
                    height={162}
                  />
                  <span className="text">
                    "These made-to-measure, customizable, and sustainable jeans
                    are the investment you should make now to always enjoy."
                  </span>
                </div>
                <div className="logo" data-logo_name="forbes">
                  <img
                    className="forbes clone_inline b-lazy"
                    data-target="logos_desktop"
                    alt=""
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/mentioned/forbes.jpg"
                    width={521}
                    height={132}
                  />
                  <span className="text">
                    "Hockerty: The Made-To-Measure Clothing That's Accessible To
                    All"
                  </span>
                </div>
                <div className="logo" data-logo_name="vogue">
                  <img
                    className="vogue clone_inline b-lazy"
                    data-target="logos_desktop"
                    alt=""
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/mentioned/vogue.jpg"
                    width={453}
                    height={120}
                  />
                  <span className="text">
                    "Perhaps the Ceremony Calls for a Morning Suit? Check
                    Hockerty made to measure morning suits"
                  </span>
                </div>
                <div className="logo" data-logo_name="gearpatrol">
                  <img
                    className="gearpatrol clone_inline b-lazy"
                    data-target="logos_desktop"
                    alt=""
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/mentioned/gearpatrol.jpg"
                    width={694}
                    height={101}
                  />
                  <span className="text">
                    "They've put the entire made-to-measure process online, and
                    use a proprietary system to estimate your measurements. That
                    way, if you really can't measure yourself, you don't have
                    to."
                  </span>
                </div>
              </div>
            </div>
            <div className="separator">
              <hr />
            </div>
            <div className="reviews">
              <div className="title_row">
                <p className="title">Reviewed by you</p>
                <div className="trustpilot">
                  <div
                    className="trustpilot-widget"
                    data-locale="en-us"
                    data-template-id="5419b6ffb0d04a076446a9af"
                    data-businessunit-id="58a313520000ff00059cacc9"
                    data-style-height="25px"
                    data-style-width="100%"
                    data-theme="light"
                  >
                    <a
                      href="https://www.trustpilot.com/review/hockerty.com"
                      target="_blank"
                      rel="noopener"
                    >
                      Trustpilot
                    </a>
                  </div>
                </div>
              </div>
              <div className="slider_container">
                <div className="slider">
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">Dress classy, but act less cheesy</p>
                    <div className="text">
                      <p />
                    </div>
                    <p className="author">
                      <span>Jerome</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">Customer for life now</p>
                    <div className="text">
                      <p>
                        Fitst time with online tailoring. Strated with two
                        shirts to test the waters. They are by far my favorite
                        shirts. The feel the fit, excellent. The fact that you
                        can customize everything is great. I decided to get a
                        suit next. Unfortunately it did not fit, whether I just
                        did the measurements wrong or they did I was quite
                        concerned. I went to the tailor and got a receipt for
                        $85. They replied back quickly to me and let me know
                        they will be getting me the $85 back. Customer for life
                        now. A company that delivers what they promise is a
                        company I stay loyal to!
                      </p>
                    </div>
                    <p className="author">
                      <span>Jason Laughead</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">
                      My experience with Hockerty was great.
                    </p>
                    <div className="text">
                      <p>
                        {" "}
                        The product was a perfect fit and great quality, I will
                        definitely buy from them again!
                      </p>
                    </div>
                    <p className="author">
                      <span> Harrison Ragnarsson </span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">This is my 4th shirt</p>
                    <div className="text">
                      <p>
                        This is my 4th shirt from Hockerty and I LOVE them all.
                        Great quality. @ a great price. Great customer service
                        too. This is a great way to have a custom fitted shirt.
                        Just take the time to go through the measuring step and
                        upload / establish your Hockerty account, Then simply
                        design a custom shirt and use your measurement details
                        to the custom shirt. In a few short days your Custom
                        shirt will arrive and bingo you will be impressed. Thank
                        you Hockerty, great job. :-){" "}
                      </p>
                    </div>
                    <p className="author">
                      <span>Dennis Bress</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">One of my best fitting suits!</p>
                    <div className="text">
                      <p>One of my best fitting suits!</p>
                    </div>
                    <p className="author">
                      <span>Navery Moore</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">Better than could imagine</p>
                    <div className="text">
                      <p>
                        I planned my wedding 4 weeks ago. As me and my partner
                        quickly came up with the style and look, I was left
                        hopelessly trying to find a tweed suit. I then came
                        across Hockerty and just like that, I was beyond happy
                        with the whole customization process. Then came the
                        wait, with an estimated delivery of 22 days, I got it in
                        15 days! Thank you, with the customization process being
                        so easy to use, everything fit better than could
                        imagine.
                      </p>
                    </div>
                    <p className="author">
                      <span>Mr Bradly</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                        <span className="next">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="→"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">I graduated!</p>
                    <div className="text">
                      <p>Happy with my new order</p>
                    </div>
                    <p className="author">
                      <span>Lourens</span> - United States
                    </p>
                  </div>
                  <div className="slide review">
                    <div className="stars_row">
                      <div className="stars">
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                        <img
                          data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/yellow-star.png"
                          className="b-lazy"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="navigate">
                        <span className="prev">
                          <img
                            data-src="https://d1fufvy4xao6k9.cloudfront.net/images/landing/arrow-left.svg"
                            className="b-lazy"
                            alt="←"
                            width={22}
                            height={22}
                          />
                        </span>
                      </div>
                    </div>
                    <p className="title">Perfect Blazer, perfect fit, </p>
                    <div className="text">
                      <p>
                        Perfect Blazer, perfect fit, excellent quality of
                        materials, delivery on time. This is the second time
                        I\'ve bought from Hockerty. In the photo I am wearing a
                        blazer and a Hockerty shirt. I am Completely satisfied I
                        recommend Hockerty.
                      </p>
                    </div>
                    <p className="author">
                      <span>Simon</span> - United States
                    </p>
                  </div>{" "}
                </div>
              </div>
              <div className="cta_row">
                <a
                  className="cta"
                  href="https://www.hockerty.com/en-us/customers-reviews"
                >
                  See them all
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
        {/*googleoff: all*/}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t#footer { font-size:15px; color: #212727;  }\n\t#footer a { color: #646262; text-decoration:none; letter-spacing:0.5px; line-height:18px; }\n\t#footer .body_box { display:flex; width:auto; flex-wrap: wrap }\n\t#footer .white { background: #FBFBF9; padding: 60px 40px;  }\n\t#footer .title { font-weight:bold; margin-bottom:14px; }\n\t#footer li { margin-bottom: 9px; }\n\t#footer .email { border:0; border-bottom:1px solid #000; background: none; font-size:19px; padding: 15px 0; margin-bottom:20px; outline:0; }\n\t#footer .email:focus { border-bottom: 1px solid #FF7A00; }\n\t#footer .error { color:red; font-size:90%; font-style:italic; margin-top: 5px; display:none; }\n\t#footer .send-newsletter { position: absolute; margin-left: -20px; font-size: 20px;line-height: 53px; cursor:pointer; }\n\t#privacy_label { display:none; font-size: 80%; line-height: 130%; }\n\t#privacy_label a { text-decoration:underline; }\n\n\n\t#footer .gray { background:#F5F4EF; padding:15px 40px; color: #7A7D7D; font-size: 90%; } \n\t#footer .gray a { color: #212727; }\n\t#footer .social span { display:inline-block; margin-right: 10px; }\n\t#footer .send { font-size: 16px;  color: #4F8A10; background-color: #DFF2BF; padding: 20px 10px;  }\n\t#footer .impressum { flex-basis:100%; }\n\t#footer .all-products {max-width: 100%;width: 100%;}\n\t#footer .all-products .col{width: 50%;}\n\t#footer .all-products .all-products-title{margin-bottom: 20px;}\n\t#footer .all-products strong{font-weight: unset!important;}\n\t@media (min-width: 801px) {\n\t\t#footer ul li a { font-size: 13px; }\n\t\t.woman #footer ul li a { font-size: 13px !important; }\n\t\t#footer .newsletter { width: 49%; }\n\t\t#footer .col { width: 17%; }\n\t\t#footer .email {  width:400px;  }\n\t\t#footer .links { margin-left:auto; text-align:right; } \n\t\t#footer .impressum {  margin-bottom: 5px; }\n\t\t#footer .send {  margin-right: 40px; }\n\t\t#footer .all-products .col{width: 20%;}\n\t\t#footer .newsletter.col4 { width: 42%; }\n\t\t#footer .col.col4 { width: 14%; }\n\t}\n\t@media (max-width: 800px) {\n\t\t#footer .newsletter { flex-basis: 100%; margin-bottom:50px; }\n\t\t#footer .col { width: 50%; margin-bottom:45px; }\n\t\t#footer .email { width: 100%; box-sizing:border-box; }\n\t\t#footer .white { padding: 65px 22px; }\n\t\t.common_landing  #footer .white { background:#FFF; }\n\t\t#footer .gray { text-align: center; padding:25px 20px; }\n\t\t#footer .gray .body_box { flex-direction: column-reverse;  }\n\t\t#footer .links { margin-bottom: 12px;  }\n\t\t#footer .social  { flex-basis:100%; }\n\t\t#footer .impressum {  margin-top: 20px; }\n\t}\n\n",
          }}
        />
        <div id="footer" className="">
          <div className="white">
            <div className="body_box">
              <div className="newsletter col4" data-amp-remove={1}>
                <form
                  method="post"
                  id="form_register_newsletter"
                  action="/en-us/subscribe_newsletter"
                >
                  <input type="hidden" name="src" defaultValue="newsletter" />
                  <input
                    type="hidden"
                    name="callback"
                    defaultValue="www.hockerty.com/en-us/"
                  />
                  <p className="title">
                    Subscribe to our newsletter to get updates
                  </p>
                  <input
                    rel={1}
                    id="register_input_footer"
                    required="required"
                    className="required email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email Address"
                  />
                  <span id="register_newsletter" className="send-newsletter">
                    <span className="ico-newsletter">→</span>
                  </span>
                  <label id="privacy_label" className="">
                    <input
                      id="privacy"
                      type="checkbox"
                      name="privacy"
                      required_check="required_check"
                    />
                    I agree to let my email to be processed in accordance with
                    the{" "}
                    <a target="_blank" href="/en-us/info/privacy">
                      Privacy Notice
                    </a>
                    <p className="error">This field is required</p>
                  </label>
                </form>
              </div>
              <div className="products col col4">
                <ul>
                  <li className="title">Men's Store</li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-suits/">
                      Custom Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/wedding-suit/">
                      Wedding Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/3-pieces-suit/">
                      3 Piece Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/double-breasted-suit/">
                      Double Breasted Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/big-and-tall-suits/">
                      Big and Tall Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-tuxedos/">
                      Custom Tuxedos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/tweed-suit/">
                      Tweed Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/linen-suits/">
                      Linen Suits
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-jackets/">
                      Custom Blazers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-dress-shirts/">
                      Custom Dress Shirts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-pants/">
                      Custom Pants
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-jeans/">
                      Custom Jeans
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-chinos/">
                      Chinos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-waistcoats/">
                      Men's Vests
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/overcoat/">
                      Overcoats
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/peacoat/">
                      Pea Coats
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/trench-coat/">
                      Men's Trench Coats
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-polo-shirts/">
                      Polo Shirts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-dress-shoes/">
                      Custom Dress Shoes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-sneakers/">
                      Custom Sneakers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/loafers/">
                      Custom Loafers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/men/custom-boots/">
                      Custom Boots
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hockerty.com/en-us/services/gift_card/">
                      Gift Card
                    </a>
                  </li>{" "}
                </ul>
              </div>
              <div className="products col col4">
                <ul>
                  <li className="title">Women</li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/women-suits/"
                      rel="nofollow"
                    >
                      Women's Suits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/wedding-suits-women/"
                      rel="nofollow"
                    >
                      Women's Wedding Suits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/women-tuxedo/"
                      rel="nofollow"
                    >
                      Women's Tuxedo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/pantsuits/"
                      rel="nofollow"
                    >
                      Pantsuits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/skirt-suit/"
                      rel="nofollow"
                    >
                      Skirt Suits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/womens-blazers/"
                      rel="nofollow"
                    >
                      Women's Blazers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/dress-shirts-women/"
                      rel="nofollow"
                    >
                      Women's Dress Shirt
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-blouses/"
                      rel="nofollow"
                    >
                      Custom Blouses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-dress-pants/"
                      rel="nofollow"
                    >
                      Women's Dress Pants
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-jeans/"
                      rel="nofollow"
                    >
                      Women's Jeans
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-skirt/"
                      rel="nofollow"
                    >
                      Custom Skirts
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/plus-size-suits/"
                      rel="nofollow"
                    >
                      Plus Size Suits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/petite-suits/"
                      rel="nofollow"
                    >
                      Petite Suits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-dresses/"
                      rel="nofollow"
                    >
                      Custom Dresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/bridesmaid-dresses/"
                      rel="nofollow"
                    >
                      Bridesmaid Dresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/sheath-dress/"
                      rel="nofollow"
                    >
                      Sheath Dresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/wool-coat/"
                      rel="nofollow"
                    >
                      Women's Wool Coats
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/trench-coat/"
                      rel="nofollow"
                    >
                      Women's Trench Coats
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-made-womens-shoes/"
                      rel="nofollow"
                    >
                      Women's Dress Shoes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/womens-loafers/"
                      rel="nofollow"
                    >
                      Women's Loafers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/custom-boots/"
                      rel="nofollow"
                    >
                      Women's Boots
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sumissura.com/en-us/women/chelsea-boots/"
                      rel="nofollow"
                    >
                      Women's Chelsea Boots
                    </a>
                  </li>
                </ul>
              </div>
              <div className="company col col4">
                <p className="title">Company</p>
                <ul>
                  <li>
                    <a href="/en-us/info/aboutus">About us</a>
                  </li>
                  <li>
                    <a href="/en-us/info/how-it-works">How it works</a>
                  </li>
                  <li>
                    <a href="/en-us/info/perfect-fit/">Perfect Fit Guarantee</a>
                  </li>
                  <li>
                    <a href="/en-us/blog/" className="blog" target="_blank">
                      Hockerty Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="support col col4">
                <p className="title">Support</p>
                <ul>
                  <li>
                    <a href="/en-us/info/contact">Contact us</a>
                  </li>
                  <li>
                    <a href="/en-us/fabrics-collection/">
                      Order fabric samples
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/en-us/customer/orders" rel="nofollow">
                      Track order
                    </a>
                  </li>
                  <li>
                    <a href="/en-us/info">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="social" data-amp-remove={1}>
                <span
                  rel="https://www.instagram.com/hockerty_official"
                  className="instagram ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/instagram.svg"
                    width={23}
                    height={23}
                    className="b-lazy"
                    alt="Instagram"
                  />
                </span>
                <span
                  rel="https://www.facebook.com/hockerty"
                  className="facebook ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/facebook.svg"
                    width={23}
                    height={23}
                    className="b-lazy"
                    alt="Facebook"
                  />
                </span>
                <span
                  rel="https://twitter.com/hockerty_"
                  className="twitter ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/twitter.svg"
                    width={23}
                    height={23}
                    className="b-lazy"
                    alt="Twitter"
                  />
                </span>
                <span
                  rel="https://www.pinterest.com/hockerty/"
                  className="pinterest ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/pinterest.svg"
                    width={23}
                    height={23}
                    className="b-lazy"
                    alt="Pinterest"
                  />
                </span>
                <span
                  rel="https://www.tiktok.com/@hockerty"
                  className="tiktok ds_link"
                  target="_blank"
                >
                  <img
                    data-src="https://d1fufvy4xao6k9.cloudfront.net/images/footer/tiktok.svg"
                    width={23}
                    height={23}
                    className="b-lazy"
                    alt="TikTok"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="gray">
            <div className="body_box">
              <div className="copy">Copyright 2024 Hockerty</div>
              <div className="links">
                <a href="/en-us/info/legal" className="copy">
                  Terms and Conditions
                </a>{" "}
                |
                <a href="/en-us/info/privacy" className="copy">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*googleon: all*/}
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n                    .chat_invitation{display:none;position:fixed;right:100px;bottom:44px;width:300px;font-size:14px;background-color:#fff;border-radius:.625rem;-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.4);box-shadow:0 2px 6px 0 rgba(0,0,0,.4);-ms-overflow-style:-ms-autohiding-scrollbar;cursor:pointer;max-width:260px;z-index:28001}@media (max-width:370px){.chat_invitation{right:82px;bottom:20px}}@media (max-width:320px){.chat_invitation{right:82px;bottom:20px;left:20px;width:auto}}@media (min-width:381px) and (max-width:460px){.chat_invitation{max-width:260px}}@media (min-width:375px) and (max-width:380px){.chat_invitation{max-width:260px}}@media (min-width:360px) and (max-width:374px){.chat_invitation{max-width:260px}}@media (min-width:320px) and (max-width:359px){.chat_invitation{max-width:260px}}.chat_invitation_text{position:relative;overflow:hidden;text-overflow:ellipsis;padding:1rem;max-width:100%;font-size:.8rem;white-space:normal}.chat_invitation_close,.chat_invitation_count{position:absolute;font-size:15px;color:#fff;opacity:1;font-weight:700;line-height:25px;text-align:center}.chat_invitation_arrow{display:block;position:absolute;content:"";width:10px;height:10px;right:-10px;bottom:10px;background-color:inherit;-webkit-transform:translateX(-6px) rotate(45deg);-ms-transform:translateX(-6px) rotate(45deg);transform:translateX(-6px) rotate(45deg);pointer-events:none;-webkit-box-shadow:2px -2px 2px 0 rgba(0,0,0,.2);box-shadow:2px -2px 2px 0 rgba(0,0,0,.2)}.chat_invitation_close{display:none;font-family:nc-nav;top:-25px;border:1px solid #fff;border-radius:20px;left:0;width:20px;height:20px;background:rgba(0,0,0,.2)}.chat_invitation_count{bottom:25px;background:#B8513A;border-radius:20px;right:-80px;width:25px;height:25px;z-index:50001}.chat_invitation_close.show{display:block}\n    \n        .chat_invitation { transition: all .5s;  }\n    \n    \n        .ladesk_chat{position:fixed;bottom:0;left:2%;z-index:999999;width:247px}\n        .ladesk_chat .chatbar{background:#b79552;border-top-left-radius:5px;border-top-right-radius:5px;padding:9px 10px}\n        .ladesk_chat .chatbar_text{color:#fff;font-size:14px}\n        @-webkit-keyframes fadeIn { 0%{opacity:0} 90%{opacity:0} 100%{opacity:1} }\n        @-moz-keyframes fadeIn { 0%{opacity:0} 90%{opacity:0} 100%{opacity:1} }\n        @-ms-keyframes fadeIn { 0%{opacity:0} 90%{opacity:0} 100%{opacity:1} }\n        @keyframes fadeIn { 0%{opacity:0} 90%{opacity:0} 100%{opacity:1} }\n        .ladesk_chat .hey{-webkit-animation:fadeIn 10s;-moz-animation:fadeIn 10s;-ms-animation:fadeIn 10s;-o-animation:fadeIn 10s;animation:fadeIn 10s}\n        .ladesk_chat .hey_close{cursor:pointer;position:absolute;right:0;top:0;color:#000;font-size:10px}\n    \n    ',
          }}
        />
      </div>
    </>
  );
};

export default Login;
