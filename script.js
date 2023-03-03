let title = document.createElement('title');
title.innerHTML = '8 Д/з JS Долгий Сергей';
document.head.appendChild(title);

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let h2 = document.createElement('h2');
h2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(h2);

let div1 = document.createElement('div');
div1.classList.add('wrapper');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.classList.add('block');
div1.appendChild(div2);

let div3 = document.createElement('div');
div3.classList.add('block_left');
div2.appendChild(div3);

let h4 = document.createElement('h4');
h4.classList.add('-grey');
h4.innerHTML = 'FREELANCER';
div3.appendChild(h4);

let h3 = document.createElement('h3');
h3.innerHTML = 'Initially designed to';
div3.appendChild(h3);

let p = document.createElement('p');
p.classList.add('-grey');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div3.appendChild(p);

let button = document.createElement('button');
button.classList.add('button');
button.innerHTML = 'START HERE';
div3.appendChild(button);

let div4 = document.createElement('div');
div4.classList.add('block_right');
div2.appendChild(div4);

let h4_2 = document.createElement('h4');
h4_2.classList.add('-yellow');
h4_2.innerHTML = 'STUDIO';
div4.appendChild(h4_2);

let h3_2 = document.createElement('h3');
h3_2.classList.add('-white');
h3_2.innerHTML = 'Initially designed to';
div4.appendChild(h3_2);

let p_2 = document.createElement('p');
p_2.classList.add('-white');
p_2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div4.appendChild(p_2);

let button_2 = document.createElement('button');
button_2.classList.add('button');
button_2.classList.add('-violet');
button_2.classList.add('-white');
button_2.innerHTML = 'START HERE';
div4.appendChild(button_2);

let style = document.createElement('style');

style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');

::-webkit-scrollbar {
    width: 0;
  }
  * {
    margin: 0px;
    padding: 0px;
  }
body,
html {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.wrapper {
  padding: 0px 240px 240px 140px;
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  font-family: "Arvo";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  color: #212121;
  padding-bottom: 15px;
  padding-top: 120px;
}
h2 {
  font-family: "OpenSans";
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: #9fa3a7;
  padding-bottom: 60px;
}
h3 {
  font-family: "Arvo";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  padding-bottom: 25px;
}
h4 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 2.4px;
  padding-bottom: 19px;
}
p {
  font-family: "OpenSans";
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  padding-bottom: 50px;
}
.block {
  display: flex;
  justify-content: space-between;
}
.block_left {
  display: flex;
  padding: 80px 95px 95px 80px;
  flex-direction: column;
  border-radius: 5px 0px 0px 5px;
  align-items: center;
}
.block_right {
  display: flex;
  background: #8f75be;
  padding: 80px 95px 95px 80px;
  flex-direction: column;
  border-radius: 0px 5px 5px 0px;
  align-items: center;
}
.button {
    border: 3px solid #ffc80a;
    border-radius: 50px;
    padding: 15px 20px;
    background-color: none;
    color: #000;
    font-family: "Arvo";
    font-style: bold;
    font-weight: 600;
    display: inline-block;
  }
  .button:hover {
    cursor: pointer;
  }
  .-yellow {
    color: #ffc80a;
  }
  .-violet {
    background-color: #8f75be;
  }
  .-grey {
    color: #9fa3a7;
  }
  .-white {
    color: #fff;
  }
  `;
document.head.appendChild(style);