let gridelement = document.getElementById('content_pros_grid');
let jsondatabasefacts = [

  {
    "image" :"catagories/2.jpg",
    "caption" :"Self Esteem"
  },
  {
    "image" :"catagories/3.jpg",
    "caption" :"Body Positivity"
  },
  {
    "image" :"catagories/4.jpg",
    "caption" :"Increases Libido"
  },
  {
    "image" :"catagories/5.jpg",
    "caption" :"Relieves Stress"
  },
  {
    "image" : "catagories/6.jpg",
    "caption" :"Safely Discover Kinks"
  },
  {
    "image" :"catagories/7.jpg",
    "caption" :"Reboots Sex Lives"
  },
  {
    "image":"catagories/8.jpg",
    "caption" :"Ecourages Masturbation"
  },
  {
    "image" :"catagories/9.jpg",
    "caption" :"Increases Sexual Satisfation"
  },
  {
    "image" : "catagories/10.jpg",
    "caption" :"Dopamine"
  },
  {
    "image" :"catagories/11.jpg",
    "caption" :"Porn Is Considered Safe Sex"
  },
  {
    "image" :"catagories/12.jpg",
    "caption" :"Porn Makes You Better at Math"
  },
  {
    "image" :"catagories/13.jpg",
    "caption" :"Helps Normalize Desires"
  },
  {
    "image" :"catagories/14.jpg",
    "caption" :"Entertaining"
  },
  {
    "image" :"catagories/15.jpeg",
    "caption" :"Lowers Teen Pregnancy Rate"
  },
  {
    "image" :"catagories/16.jpg",
    "caption" :"Decreases the Rate of Forcible Rape"
  },
  {
    "image" :"catagories/17.jpeg",
    "caption" :"Makes You Feel Less Lonely"
  },
  {
    "image" :"catagories/18.jpg",
    "caption" :"It's Healthy"
  },
  {
    "image" :"catagories/19.jpg",
    "caption" :"Sometimes Better than the Real Thing"
  },
  {
    "image" :"catagories/20.jpg",
    "caption" :"May Decrease Aggressive Tendencies"
  },
  {
    "image" :"catagories/21.jpeg",
    "caption" :"Could Learn a Thing or Two"
  },
  {
    "image" :"catagories/22.jpeg",
    "caption" :"It's Affordable"
  },
  {
    "image" :"catagories/23.jpeg",
    "caption" :"Porn seen as Educational"
  },
  {
    "image" :"catagories/24.jpg",
    "caption" :"Targeted Towards Men (Good or Bad depending on sexuality)"
  }
]

for (var i = 0; i < jsondatabasefacts.length; i++) {
  element_create(jsondatabasefacts[i]);
}

function element_create(incoming_info) {

  let newcontentelement = document.createElement("DIV");
  newcontentelement.classList.add('grid_item_4');

  let newimage = document.createElement("IMG");
  newimage.classList.add("catagories");
  newimage.src = incoming_info['image'];
  newcontentelement.appendChild(newimage);

  let newparagraph = document.createElement("H3");
  newparagraph.innerHTML = incoming_info['caption'];
  newcontentelement.appendChild(newparagraph);

  gridelement.appendChild(newcontentelement)
}
