var horoscopes = [
  // horoscopes with image and description
  {
    name: 'aries',
    img: 'img/aries.jpg',
    description: 'This is a ram March 21st-April 19th Aries are creative adaptive and insightful. They can be strong-willed and spontaneous. Aries people can be driven and are verw ambitious often making them over-achievers in anything they set their mind to tackle. Aries are fire signs, and so too is their personality. They may be quick to anger, but dont take it personally its just their firey passionate personalities showing through. Aries signs have excellent sense of humor, and they get along with almost everyone at the party. Aries can be impatient, but we love them anyways because they are devoted friends, lover and family members - they are loyal to the end and will fight for their causes.'
  },
  {
    name: 'scorpio',
    img: 'img/scorpio.jpg',
    description: 'The scorpion October 23rd - Novemeber 21st The scorpio is often misunderstood. These personalities are bold and are capable of executing massive enterprises with cool control and confidence. They can surmont seemingly all obstacles when they out their mind to the task and they have unshakable focus when the situation calls for it. Regardless of their bold nature,they are often secretive, but they are always observing behind their withdrawn manner.'
  },
  {
    name: 'libra',
    img: 'img/libra.jpg',
    description: 'The Scales September 23rd- October 22nd As their zodiac signs and meanings would indicate, Libras are all about balance justice equanimity and stability. They easily surround themselves with harmony and beauty, but sometimes go to extremes to do so if their goals are unreasonable or unhealthy. With Venus as their ruling planet, Libras are very understanding, caring and often the champion of underdogs. They have keen intuitions, but often dont give themselves enough credit for their perceptions. They can be quiet and shy if not persuaded to come out of their shell. Ironically and in spite of their introverted nature they make excellent debaters, often proving a point from out of seemingly nowhere.'
  },
  {
    name: 'capricorn',
    img: 'img/capricorn.jpg',
    description: 'The Goat December 22nd - January 19th Capricorns are also philosophical signs and are highly intelligent too. They apply their knowledge to practical matters, and strive to maintain stability and order. They are good organizers, and they achieve their goals by purposeful, systematic means. They are very intuitive, although they dont share this trait with others freely. They do not deal well with opposition or criticism but a healthy Capricorn will often shrug off negative comments towards their character. They are patient and persevering - they know they can accomplish any task as long as they follow a their plan step-by-step. Capricorns have broad shoulders, and typically take on others problems with aplomb. Ironically, they rarely share their own problems and tend to go through bouts of inner gloom after a spell of dwelling on these problems.'
  },
  {
    name: 'virgo',
    img: 'img/virgo.jpg',
    description: 'The virgin August 23rd - September 22nd Virgos have keen minds, and are delightful to chat with, often convincing others of outlandish tales with ease and charm. Virgos are inquisitive and are very skilled at drawing information from people. This trait also makes them naturally intuitive. Combine this with their remarkable memories, and we see an advanced, analytical personality. However the Virgo needs balance in their lives otherwise they may become short-tempered, impatient and self-serving. Virgos are excellent teammates in work and social activities. They work well with others, although they freely express their opinions (even when unwarranted).'
  },
  {
    name: 'gemini',
    img: 'img/gemini.jpg',
    description: 'The Twins May 21st - June 20th Flexibility, balance and adaptability are the keywords for the Gemini. They are quick to grasp the meaning of a situation and act on it, often with positive effects. They tend to have a duality to their nature, and can sometimes be tough to predict how they will react. They can turn from hot to cold and may be prone to noticeable mood swings. However, they are generous signs with tendencies of being affectionate, and imaginative. They also inspire others easily as they seem to naturally motivate themselves - their charisma and accomplishments are infectious. Geminians are very supportive, and are especially good at promotions, sales, and driving hard bargains.'
  },
  {
    name: 'cancer',
    img: 'img/cancer.jpg',
    description: 'The Crab June 21st - July 22nd Cancerians love home-life, family and domestic settings. They are traditionalists, and enjoy operating on a fundamental level. They love history, and are fascinated with the beginnings of things (heraldry, ancestry, etc.). The moon is their ruler, so they can be a bit of a contradiction and sometimes moody. However, they are conservative, so theyll be apt to hide their moods from others altogether. They have a reputation for being fickle, but theyll tell you that isnt true, and its not. Cancerians make loyal, sympathetic friends. However Cancerians need alone time, and when they retreat, let them do so on their terms.'
  },
  {
    name: 'sagittarius',
    img: 'img/sagittarius.jpg',
    description: 'The Centaur Novemeber 22nd - December 21st Here we have the philosopher among the zodiac signs and meanings. Like the Scorpio, they have great ability for focus, and can be very intense. However, they must channel their energy or they will waste time and wear themselves out going in too many directions at once. They are not very patient and expect quick results. However, when encountered with failure they make extreme comebacks often against incredible odds. They make loyal friends and lovers, but they do not handle commitment well as they refuse to be tied down while chasing philosophical pursuits.'

  },
  {
    name: 'taurus',
    img: 'img/taurus.jpg',
    description: 'The Bull April 20th - May 20th Here we have the philosopher among the zodiac signs and meanings. Like the Scorpio, they have great ability for focus, and can be very intense. However, they must channel their energy or they will waste time and wear themselves out going in too many directions at once. They are not very patient and expect quick results. However, when encountered with failure they make extreme comebacks often against incredible odds. They make loyal friends and lovers, but they do not handle commitment well as they refuse to be tied down while chasing philosophical pursuits.'
  },
  {
    name: 'pisces',
    img: 'img/pisces.jpg',
    description: 'The Fish February 19th - March 20th Also unassuming, the Pisces zodiac signs and meanings deal with acquiring vast amounts of knowledge, but you would never know it. They keep an extremely low profile compared to others in the zodiac. They are honest, unselfish, trustworthy and often have quiet dispositions. They can be overcautious and sometimes gullible. These qualities can cause the Pisces to be taken advantage of, which is unfortunate as this sign is beautifully gentle, and generous. In the end, however, the Pisces is often the victor of ill circumstance because of his/her intense determination. They become passionately devoted to a cause - particularly if they are championing for friends or family.'
  },
  {
    name: 'leo',
    img: 'img/leo.jpg',
    description: 'The Lion July 23rd - August 22nd The zodiac signs and meanings of Leo is about expanse, power and exuberance. Leos are natural born leaders, and they will let you know it as they have a tendency to be high-minded and vocal about their opinions. Thats okay, because if you observe, the Leo is usually correct in his/her statements. Leos have a savvy way of analyzing a situation and executing swift judgment with a beneficial outcome. It comes from being a leader. They are brave, intuitive, and also head-strong and willful. Beneath their dynamic persona lies a generous, loving, sensitive nature that they do not easily share with others. They might be a bit bossy, but those who know them understand this comes from a source need to do good, not (usually) from an inflated ego.'
  },
  {
    name: 'aquarius',
    img: 'img/aquarius.jpg',
    description: 'The Water Bearer January 20th - February 18th Often simple and unassuming, the Aquarian goes about accomplishing goals in quiet, often unorthodox ways. Although their methods may be unorthodox, the results for achievement are surprisingly effective. Aquarians will take up any cause, and are humanitarians of the zodiac. They are honest, loyal and highly intelligent. They are also easy going and make natural friendships. If not kept in check, the Aquarian can be prone to sloth and laziness. However, they know this about themselves, and try their best to motivate themselves to action. They are also prone to philosophical thoughts, and are often quite artistic and poetic.'
  },
]
// creating elements
var body = document.getElementById('body');
var newDiv = document.createElement('div');
newDiv.className = 'container text-center';
newDiv.setAttribute('id', 'newDiv');
body.appendChild(newDiv);
var header = document.createElement('h1');
var p = document.createElement('p')
// creating the elements for images
var img = document.createElement('img');
newDiv.appendChild(header);
newDiv.appendChild(img);
newDiv.appendChild(p);
// calling function to get the signs
function getHoroscope() {
  var input = document.getElementById('input');
  console.log(input.value);


// for loop for each of our signs
  for(var i = 0; i < horoscopes.length; i++) {
    if(input.value == horoscopes[i].name){
      console.log('You typed in ' + horoscopes[i].name)
      img.src = horoscopes[i].img;
      header.textContent = horoscopes[i].name
      p.textContent = horoscopes[i].description

    }
  }
// for sizing purposes
  // img.style.height = '500px';
  // img.style.width = '500px';
}



  var input = document.getElementById('input');
  console.log(input.value);
