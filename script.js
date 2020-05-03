let gridelement = document.getElementById('grid');
let jsondatabasefacts = [

  {
    "image" :"",
    "caption" :"'I got the shit kicked out of me. I was told before the video – and they said this very proudly, mind you – that in this line most of the girls start crying because they’re hurting so bad . . . I couldn’t breathe. I was being hit and choked. I was really upset, and they didn’t stop. They kept filming. You can hear me say, ‘Turn the f*cking camera off’, and they kept going.'-Regan Starr"
  },
  {
    "image" :"",
    "caption" : "'As for myself, I ended up paying the price from working in the porn industry. In 2006, not even 9 months in, I caught a moderate form of dysplasia of the cervix (which is a form of HPV, a sexually transmitted disease) and later that day, I also found out I was pregnant. I had only 1 choice which was to abort the baby during my first month. It was extremely painful emotionally and physically. When it was all over, I cried my eyes out.' -Tamra Toryn "
  },
  {
    "image" :"",
    "caption" : "'The first shoot I did was with a man who was probably 40 and he was as thick as a soda can. He held me down and shoved it in me with no lube tearing my vagina. When I started to tear up and cry he flipped me over and continued from behind be so they wouldn’t get me crying on film. He pulled my hair and choked me over and over again even when I told him it hurt and I could barely breathe.' -Alexa James"
  },
  {
    "image" :"",
    "caption" :"'After a year or so of that so-called ‘glamorous life,’ I sadly discovered that drugs and drinking were part of the lifestyle. I began to drink and party of out control—cocaine, alcohol, and ecstasy were my favorites. Before long, I turned into a person I did not want to be. After doing so many hardcore scenes, I couldn’t do it anymore. I just remember being in horrible situations and experiencing extreme depression and being alone and sad.' -Andi"
  },
  {
    "image" : "",
    "caption" : "'Amateurs come across better on screen. Our customers feel that. Especially by women you can see it. They still feel strong pain.' – Carlo Scalisi, Owner of 21 Sexury Video"
  },
  {
    "image" :"",
    "caption" :"'I became horribly addicted to heroin and crack. I overdosed at least 3 times, had tricks pull knives on me, have been beaten half to death.' -Becca Brat"
  },
  {
    "image":"",
    "caption" :"'He said something along the lines of ‘I’m old enough to be your father, you do as I say.’ Completely traumatized, I laid there crying into the pillow while he continued [to rape me].-Adams'"
  },
  {
    "image" :"",
    "caption" :"'I was crying and crying, which was not against their shooting rules. There was a male dominant and a male videographer and a female photographer. I kept looking to her to save me.'-Princess Donna"
  },
  {
    "image" : "",
    "caption" :"'My first movie I was treated very rough by 3 guys. They pounded on me, gagged me with their penises, and tossed me around like I was a ball! I was sore, hurting and could barely walk.' - Alexa Milano"
  },
  {
    "image" :"",
    "caption" :"'Guys punching you in the face. You have semen from many guys all over your face, in your eyes. You get ripped. Your insides can come out of you. It’s never ending.' -Jersey Jaxin"
  },
  {
    "image" :"",
    "caption" :"'I had bodily fluids all over my face that had to stay on my face for ten minutes. The abuse and degradation was rough. I sweated and was in deep pain. On top of the horrifying experience, my whole body ached, and I was irritable the whole day. The director didn’t really care how I felt; he only wanted to finish the video.' -Genevieve"
  },
  {
    "image" :"",
    "caption" :" 'I also did a scene where I was put with male talent that was on my no list. I wanted to please them so I did it. He put his foot on my head and stepped on it while he was doing me from behind. I freaked out and started balling; they stopped filming and sent me home with reduced pay since they got some shot but not the whole scene.' -Jessi Summers"
  },
  {
    "image" :"",
    "caption" :"'I had to do whatever the producer pleased and I had to accept it or else no pay. Sometimes you would get to a gig and the producer would change what the scene was supposed to be to something more intense and again if you didn’t like it, too bad, you did it or no pay.' -Jan"
  },
  {
    "image" :"",
    "caption" :"'The abuse and degradation was rough. I sweated and was in deep pain. On top of the horrifying experience, my whole body ached, and I was irritable the whole day. The director didn’t really care how I felt; he only wanted to finish the video.' -Genevieve"
  },
  {
    "image" :"",
    "caption" :"'it was torture for seven years. I was miserable, I was lonely. I eventually turned to drugs and alcohol…to numb my pain and get me through…and attempted suicide. I knew I wanted out, but I didn’t know how to get out.' -Jenna Presley"
  },
  {
    "image" :"",
    "caption" :"(After being whipped and caned for 35 minutes) 'I’ve never received a beating like that before in my life. I have permanent scars up and down the backs of my thighs. It was all things that I had consented to, but I didn’t know quite the brutality of what was about to happen to me until I was in it.'- Alexander"
  },
  {
    "image" : "",
    "caption" :"'After only 30 movies I caught two sexually transmitted diseases. Herpes, a non-curable disease and HPV, which led to cervical cancer where I had to have half of my cervix removed. Porn destroyed my life.'- Roxy"
  },

  {
    "image" : "",
    "caption" :"'I’m not happy… I don’t like myself at all… My whole entire body feels it when I’m doing it and… I feel so — so gross. I hung out with a lot of people in the Adult industry, everybody from contract girls to gonzo actresses. Everybody has the same problems. Everybody is on drugs. It’s an empty lifestyle trying to fill up a void.' – Belladonna"
  },
  {
    "image" : "",
    "caption" : "'When I arrived to the set I expected to do a vaginal girl boy scene. But during the scene with a male porn star, he forced himself anally into me and would not stop. I yelled at him to stop and screamed ‘No’ over and over but he would not stop. The pain became too much and I was in shock and my body went limp.' -Corina Taylor"
  },

  {
    "image" :"",
    "caption" :"'My initiation into prostitution was a gang rape by five men, arranged by Mr. Traynor. It was the turning point in my life. He threatened to shoot me with the pistol if I didn’t go through with it. I had never experienced anal sex before and it ripped me apart. They treated me like an inflatable plastic doll, picking me up and moving me here and there. They spread my legs this way and that, shoving their things at me and into me, they were playing musical chairs with parts of my body. I have never been so frightened and disgraced and humiliated in my life. I felt like garbage. I engaged in sex acts for pornography against my will to avoid being killed. The lives of my family were threatened.' -Linda Lovelace"
  },
  {
    "image" :"",
    "caption" :"'Sometimes we do a **** line, where the girl’s giving ****, and she’s gagging so much she vomits. … It’s repugnant. It is, Yes. We’ve got tons of stuff they technically could arrest us for. And when this happened, I put on our website—I made a big speech: ‘I welcome the LAPD to come on down.’ I said, ‘Come and get me,’ I said, ‘Because we won’t go down without a fight. We will fight this. Regardless of the cost, we will fight it. We will take it to the airwaves.'' -Rob Black (Director/Producer)"
  },
  {
    "image" :"",
    "caption" :"'[One particular film] was the most brutal, depressing, scary scene that I have ever done. I have tried to block it out from my memory due to the severe abuse that I received during the filming. The [male performer] has a natural hatred towards women, in the sense that he has always been known to be more brutal than ever needed. I agreed to do the scene, thinking it was less beating except a punch in the head. If you noticed, [he] had worn his solid gold ring the entire time and continued to punch me with it. I actually stopped the scene while it was being filmed because I was in too much pain.' -Alex"
  },
  {
    "image" :"",
    "caption" :"'I have been a performer now for 14 years in the adult film industry in many countries, states…all over the place. I have worked for most of these companies, and I was around for the once-a-month HIV-positive outbreak in ’98. Yes, I was, and I got to see those performers that nobody knows about—that nobody claims that got HIV, that are not a part of the statistics—walk out the door as non-performers, not to be counted. Yeah, there are a lot of cover-ups going on. There is a lot of tragedy. There are a lot of horrible things.' -Anita"
  },
  {
    "image" :"",
    "caption" :"'I’d like to show what I believe the men want to see: violence against women. I firmly believe that we serve a purpose by showing that.  The most violent we can get is the **** in the face. Men get off behind that, because they get even with the women they can’t have. We try to inundate the world with **** in the face.'-Marigold"
  }

]

for (var i = 0; i < jsondatabasefacts.length; i++) {
  element_create(jsondatabasefacts[i]);
}

function element_create(incoming_info) {

  let newcontentelement = document.createElement("DIV");
  newcontentelement.classList.add('grid_item');

  let newimage = document.createElement("IMG");
  newimage.classList.add("image");
  newimage.src = incoming_info['image'];
  newcontentelement.appendChild(newimage);

  let newparagraph = document.createElement("P");
  newparagraph.innerHTML = incoming_info['caption'];
  newcontentelement.appendChild(newparagraph);

  gridelement.appendChild(newcontentelement)
}
