let gridelement = document.getElementById('grid-3');
let jsondatabasefacts = [

  {
    "title" : "FightTheNewDrug",
    "image" :"FTND_logo_k.png",
    "caption" :"'It’s a shady and corrupt industry that doesn’t care to protect the very people who create their product, or worse, resort to tricking or coercing vulnerable people into work they don’t enthusiastically want to do. Film producers are at fault, as are the free websites that pirate the producers’ work, driving up the demand for more edgy content and continuing the vicious cycle of exploitation.[...]For many performers, it doesn’t get easier as they continue. Since the rise of the porn tube sites, both male and female actors are under pressure to perform increasingly hardcore scenes. This is not necessarily because work opportunities are slim (though less extreme content is becoming more passé). It’s because there is an endless amount of content to compete against.'"
  },
  {
    "title" : "PsychologyToday",
    "image" : "pt.png",
    "caption" : "'There is very little research available on the impact on performers within this poorly regulated industry. In the U.S., the government turns a blind eye to many of the issues surrounding the production of pornography, unless it involves performers under the age of 18. And despite laws prohibiting the employment of performers under the legal age, there are still issues involving consent among newly legal women in the 18-21 age range.[...]In the AOL BUILD discussion, Bernard explained how it was common for her to enter onto a set without previously being told the details of her performance and, eventually, she would be pressured to perform acts she was not comfortable with. In one instance, she was told to say a highly demeaning line. When she refused, the director responded by saying, “Well, it’s part of the script, so you have to.”'"
  },
  {
    "title" : "Fortune",
    "image" :"fortune.png",
    "caption" :"'Performances aside, workers have to contend with other expectations. Actors and actresses are expected to provide their own wardrobe. Women arrive on set with a suitcase full of lingerie, outfits, and whatever else the director requests. Reusing the same outfit for several scenes is frowned upon, though we’ve all done it. Bringing new wardrobe to set is strongly encouraged and almost always on the performer’s dime.[...]I’ve had more than a few directors and co-stars try to persuade me to disregard an expired test. I can’t tell you how many times I’ve heard, “You know me, we’ve worked together a dozen times, I’m good for it.” I once refused to work with a major studio’s contracted performer because his STD test had expired. The studio never hired me again.'"
  },
  {
    "title" : "theGaurdian",
    "image" : "unnamed.png",
    "caption" :"'She recently interviewed a number of men in prison who had committed rape against children. All were habitual users of child pornography. 'What they said to me was they got bored with 'regular' porn and wanted something fresh. They were horrified at the idea of sex with a prepubescent child initially but within six months they had all raped a child.'"
  },
  {
    "title" : "EndSexualExploitation",
    "image" :"nav-logo.png",
    "caption" :"'The official complaint says Hay “coerces some of his performers into ‘escorting’ and then, should they seek to terminate their (illegal) contracts, threatens to ‘out’ them for performing illegal sex work”.'"
  },
  {
    "title" : "MamaMia",
    "image" :"mama.png",
    "caption" :"'There is no point in having a safe word when you can’t talk,” Beau said. “I was clawing at their legs and slapping their thighs and they still wouldn’t let up.” Beau said, with blood running down her face, she was “done being abused”. “They told me that they had about enough footage that they could sell it if they got the pop shot so I sat on the floor and finished the scene. For all of that they paid me $200.'"
  },
  {
    "title" : "theDailyBeast",
    "image" : "beast.gif",
    "caption" : "'In a series of tweets last Tuesday, Nikki Benz described how she “went into shock on set and cried” for the first time in her 13-year career. The 35-year-old was shooting a sex scene for Brazzers, a popular porn production company, when she claims that the film’s director, Tony T, intervened and stomped on her head before violently choking her. Benz says that she begged him to “cut” and said “no,” adding that she was “not ok with this,” but her objections fell on deaf ears.'"
  },
  {
    "title" : "Mandatory",
    "image" : "mand.jpg",
    "caption" : " ' “The industry has never seen so many people interested in working in it,” Tibbals says. This could be because much of the stigma surrounding adult film has been banished, and that porn has become more of an entrepreneurship than anything else. From the outside looking in, doing something like webcam modeling on live sex website is a profitable cause. But the truth of the matter is, the porn “star” is much less a star now, and is much more of a porn “flavor of the week.” A woman’s career in the industry doesn’t last long on average.'"
  }
]

for (var i = 0; i < jsondatabasefacts.length; i++) {
  element_create(jsondatabasefacts[i]);
}

function element_create(incoming_info) {

  let newcontentelement = document.createElement("DIV");
  newcontentelement.classList.add('grid_item-3');

  let newimage = document.createElement("IMG");
  newimage.classList.add("image-3");
  newimage.src = incoming_info['image'];
  newcontentelement.appendChild(newimage);

  let newtitle = document.createElement("H3");
  newtitle.innerHTML = incoming_info['title'];
  newcontentelement.appendChild(newtitle);


  let newparagraph = document.createElement("P");
  newparagraph.innerHTML = incoming_info['caption'];
  newcontentelement.appendChild(newparagraph);

  gridelement.appendChild(newcontentelement)
}
