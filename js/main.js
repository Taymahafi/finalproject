// declaration du data
const products = [
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9544/248/302/9544248302_1_1_4.jpg?t=1654259180411",
      title: " lot 3 colliers papillon",
      price: "19.00Dt",
      color: "white",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/0783/719/305/0783719305_1_3_4.jpg?t=1656575426773",
      title: "robe midi encolure...",
      price: "150.00Dt",
      color: "yellow",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/5880/692/712/5880692712_2_7_4.jpg?t=1656494785215",
      title: "mini-robe bretelles lin...",
      price: "89.00Dt",
      color: " white",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/8026/583/902/8026583902_1_1_4.jpg?t=1654001559262",
      title: "T-shirt manches courtes...",
      price: " 58.00Dt",
      color: " pink",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/7600/443/250/7600443250_1_1_4.jpg?t=1656940910500",
      title: " T-shirt manches courtes",
      price: "29.00Dt",
      color: " white",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/7603/777/315//03/7603777315_2_4_4.jpg?t=1646647432569",
      title: "T-shirt sans manches",
      price: " 15.00Dt",
      color: "orange",
      type: "vetement",
    },
    {
      img: " https://static.bershka.net/4/photos2/2022/I/0/1/p/1083/187/615/1083187615_1_1_4.jpg?t=1657612351036",
      title: " Mini-robe bretelles rayée",
      price: "55.00Dt",
      color: "orange",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/2/p/0570/335/643//03/0570335643_1_1_4.jpg?t=1657182136299",
      title: " jean loose straight taille",
      price: "42.00Dt",
      color: "orange",
      type: "vetement",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9178/708/712/9178708712_2_3_4.jpg?t=1654258013193",
      title: "sac cabas tissu brodé",
      price: "55.00Dt",
      color: "white",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/1/1/p/4003/060/070/4003060070_2_1_4.jpg?t=1651505794275",
      title: "sac lil'kreets épong...",
      price: "159.00Dt",
      color: "orange",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/4268/668/250/4268668250_2_3_4.jpg?t=1650383342899",
      title: "sac matelassé chunky anse...",
      price: "49.00Dt",
      color: "white",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9167/852/902/9167852902_2_4_4.jpg?t=1656930044778",
      title: " sac matelassé anse chaine",
      price: " 39.00Dt",
      color: "pink",
      type: "accesoire",
    },
    {
      img: " https://static.bershka.net/4/photos2/2022/I/0/1/p/9433/668/612/9433668612_2_3_4.jpg?t=1657017634537",
      title: "chapeau bob crochet fleurs",
      price: "29.00Dt",
      color: "purple",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9436/423/047/9436423047_1_1_4.jpg?t=1657639698206",
      title: " casquette message",
      price: "15.00Dt",
      color: "yellow",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9550/678/808/9550678808_2_1_4.jpg?t=1657628429939",
      title: "lot 3 colliers coeur",
      price: " 18.00Dt",
      color: "purple",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9604/248/302/9604248302_2_2_4.jpg?t=1657630875138",
      title: " lot 7 bagues émail colorées",
      price: "39.00Dt",
      color: "gold",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/4657/486/302/4657486302_2_2_4.jpg?t=1649234911968",
      title: "lot 9 paires de boucles",
      price: "42.00Dt",
      color: "gold",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9643/678/500/9643678500_2_2_4.jpg?t=1654601866549",
      title: "lot 5 boucles d'oreilles",
      price: " 15.00Dt",
      color: " green",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9606/248/808/9606248808_2_3_3.jpg?t=1657629961258",
      title: "lot 8 bagues papillon",
      price: " 19.00Dt",
      color: " white",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9682/917/603/9682917603_2_1_4.jpg?t=1656328692928",
      title: "lot 4 pinces cheveux",
      price: " 19.00Dt",
      color: "green",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/9674/362/902/9674362902_2_1_4.jpg?t=1654076556545",
      title: "lot 3 chouchous paisley",
      price: " 14.00Dt",
      color: "green",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/4435/419/800/4435419800_2_7_4.jpg?t=1651754911249",
      title: "lunettes de soleil",
      price: "51.00Dt",
      color: "black",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/4444/419/250/4444419250_2_7_4.jpg?t=1654162485653",
      title: "lunettes de soleil",
      price: " 41.00Dt",
      color: "white",
      type: "accesoire",
    },
    {
      img: "https://static.bershka.net/4/photos2/2022/I/0/1/p/4435/419/902/4435419902_2_7_4.jpg?t=1657018879768",
      title: "lunettes de soleil",
      price: "32.00Dt",
      color: "pink",
      type: "accesoire",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5062/310/690/02/5062310690_2_1_4.jpg?t=1656517847022",
      title: " short cut-out dress",
      price: " 156.00Dt",
      color: "pink",
      type: "vetement",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5012/303/052/5012303052_2_1_4.jpg?t=1657874105814",
      title: "cropped piqué polo shirt",
      price: " 99.00Dt",
      color: "brown",
      type: "vetement",
    },
    {
      img: " https://static.lefties.com/9/photos2/2022/I/0/1/p/5012/303/607/5012303607_2_1_4.jpg?t=1657798732621",
      title: "cropped piqué polo shirt",
      price: " 99.00Dt",
      color: " orange",
      type: "vetement",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/V/0/1/p/1413/308/668/1413308668_2_1_4.jpg?t=1647937716825",
      title: "wide-leg cargo trousers",
      price: "199.00Dt",
      color: " pink",
      type: "vetement",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5062/301/094/5062301094_2_1_4.jpg?t=1657704997152",
      title: "short strappy dress",
      price: " 95.00Dt",
      color: " red",
      type: "vetement",
    },
    {
      img: "https://static.zara.net/photos///2022/V/0/1/p/2495/007/700/2/w/185/2495007700_15_11_1.jpg?ts=1644853342471",
      title: "ceinture bimatié",
      price: "149.90",
      color: "brown",
      type: "accesoire",
    },
    {
      img: "https://static.zara.net/photos///2022/V/0/1/p/4174/835/615/2/w/185/4174835615_6_1_1.jpg?ts=1639126767003",
      title: "T-shirt court",
      price: "59.90 Dt",
      color: "red",
      type: "vetement",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5332/321/250/5332321250_2_1_5.jpg?t=1652866200751",
      title: "CONTRAST RAFFIA HANDBAG",
      price: "79.90 Dt",
      color: " beige",
      type: "accesoire",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5322/324/015/02/5322324015_2_1_5.jpg?t=1652177251758",
      title: "paper sun hat",
      price: "59.00Dt",
      color: "black",
      type: "accesoire",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5332/302/300/5332302300_2_1_5.jpg?t=1652265417594",
      title: "picnic tote bag",
      price: "79.00Dt",
      color: "green",
      type: "accesoire",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/V/0/1/p/5041/304/800/5041304800_2_1_4.jpg?t=1631205248497",
      title: " basic leggings with buttons",
      price: "69.00Dt",
      color: "black",
      type: "vetement",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5047/305/701/01/5047305701_6_1_4.jpg?t=1655886020216",
      title: "folowing knit shorts",
      price: " 39.00Dt",
      color: " orange",
      type: "vetement",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5912/301/630/5912301630_2_1_4.jpg?t=1654096128908",
      title: "textured oversize shirt",
      price: "85.00Dt",
      color: "pink",
      type: "vetement",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5902/302/712/5902302712_2_1_4.jpg?t=1650527189322",
      title: "flowing sleeveless shirt",
      price: "94.00Dt",
      color: "white",
      type: "vetement",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/V/0/1/p/1943/303/800/1943303800_2_3_4.jpg?t=1643284603126",
      title: "long printed dungarees",
      price: " 128.00Dt",
      color: "black ",
      type: "vetement",
    },
  
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/1063/309/535/1063309535_2_5_4.jpg?t=1650883434991",
      title: "robe avec empiécements en denim",
      price: "185.00Dt",
      color: "green",
      type: "vetement",
    },
    {
      img: "https://static.lefties.com/9/photos2/2022/I/0/1/p/5062/307/630/5062307630_6_1_4.jpg?t=1655369843694",
      title: "robe courte imptimée",
      price: "98.00Dt",
      color: "pink",
      type: "vetement",
    },
    {img:"https://static.lefties.com/9/photos2/2022/I/0/1/p/5942/305/600/5942305600_2_1_4.jpg?t=1652974863089" ,
  title:"robe courte imptimée" ,
  price:"79.00Dt" ,
  color: "red",
  type: "vetement",},
  {img:"https://static.lefties.com/9/photos2/2022/I/0/1/p/5062/308/707/5062308707_2_1_4.jpg?t=1656934125787" ,
  title:"robe courte imptimée" ,
  price:"99.00Dt" ,
  color: "yellow",
  type:"vetement",},
  {img:"https://static.zara.net/photos///2022/V/0/1/p/3045/325/800/2/w/607/3045325800_2_1_1.jpg?ts=1647965701564" ,
  title:"robe combinaison contenant du lin" ,
  price:"129.00Dt" ,
  color: "black",
  type:"vetement",},
  {img:"https://static.zara.net/photos///2022/V/0/1/p/5216/043/615/2/w/607/5216043615_1_1_1.jpg?ts=1644585995114" ,
  title:"robe courte imptimée" ,
  price:"199.00Dt" ,
  color: "orange",
  type: "vetement",},
  {img:"https://static.zara.net/photos///2022/V/0/1/p/3155/963/712/2/w/607/3155963712_1_1_1.jpg?ts=1646992315938" ,
  title:"robe satinée à volant" ,
  price:"149.00Dt" ,
  color: "beige",
  type:"vetement",},
  {img:"https://static.zara.net/photos///2022/V/0/1/p/9006/054/406/2/w/607/9006054406_2_1_1.jpg?ts=1646915421426" ,
  title:"robe avec empiécements en denim" ,
  price:"149.00Dt" ,
  color: "blue",
  type: "vetement",},
  {img:" https://static.e-stradivarius.net/5/photos3//2022/I/0/1/p/8334/106/452/05/8334106452_1_1_4.jpg?t=1657786451667&impolicy=stradivarius-itxmediumhigh" ,
  title:"pantalon regular coupe cargo" ,
  price:"168.00Dt" ,
  color: "beige",
  type: "vetement",},
  ];
  
  console.log(products)
  const continer = document.getElementById("cont");
  for (let i of products) {
    let carta = document.createElement("div");
    carta.classList.add("cartaaa", i.type);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("card");
    let imagee = document.createElement("img");
    imagee.setAttribute("src", i.img);
    imgContainer.appendChild(imagee);
    carta.appendChild(imgContainer);
    continer.appendChild(carta);
    //add div in  div class cart
    let divText = document.createElement("div")
    divText.classList.add("text")
    imgContainer.appendChild(divText);
    //end of
    let name = document.createElement("h3");
    divText.appendChild(name);
    name.innerText = i.title;
    let price = document.createElement("h4");
    divText.appendChild(price);
    price.innerText = i.price;
   
  
    
  }
  // filter
  function filterProduct(value) {
    // btn de filter
    let elemetenss = document.querySelectorAll(".cartaaa");
    elemetenss.forEach((ele) => {
      if (value == "Home") {
        ele.classList.remove("hide");
      } else {
        if (ele.classList.contains(value)) {
          ele.classList.remove("hide");
        } else {
          ele.classList.add("hide");
        }
      }
    });
  }
  //initialition display all
  window.onload = () => {
    filterProduct("Home");
  };
  