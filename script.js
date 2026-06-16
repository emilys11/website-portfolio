/* hi traveler!

                                        \       ,
                                        |\.--._/|
                                        /\ )  )\\/
                                      /(   \  / \
                                      /(   J `(   \
                                    / ) | _\     /
                                    /|)  \  eJ    L
                                  |  \ L \   L   L
                                  /  \  J  `. J   L
                                  |  )   L   \/   \
                                /  \    J   (\   /
              _....___         |  \      \   \```
        ,.._.-'        '''--...-||\     -. \   \
      .'.=.'                    `         `.\ [ Y
    /   /                                  \]  J
    Y / Y                                    Y   L
    | | |          \                         |   L
    | | |           Y                        A  J
    |   I           |                       /I\ /
    |    \          I             \        ( |]/|
    J     \         /._           /        -tI/ |
    L     )       /   /'-------'J           `'-:.
    J   .'      ,'  ,' ,     \   `'-.__          \
      \ T      ,'  ,'   )\    /|        ';'---7   /
      \|    ,'L  Y...-' / _.' /         \   /   /
        J   Y  |  J    .'-'   /         ,--.(   /
        L  |  J   L -'     .'         /  |    /\
        |  J.  L  J     .-;.-/       |    \ .' /
        J   L`-J   L____,.-'`        |  _.-'   |
          L  J   L  J                  ``  J    |
          J   L  |   L                     J    |
          L  J  L    \                    L    \
          |   L  ) _.'\                    ) _.'\
          L    \('`    \                  ('`    \
            ) _.'\`-....'                   `-....'
          ('`    \
            `-.___/   
*/

const firebaseConfig = {
    //oh nooo you found my api key please don't do anything malicious with it! (jk it's safe to show to the public)
    apiKey: "AIzaSyCzTk-m6SNfqM2EC1p2VeN-LlYs7ZVm8qg",
    authDomain: "emily-website-2cd48.firebaseapp.com",
    databaseURL: "https://emily-website-2cd48-default-rtdb.firebaseio.com",
    projectId: "emily-website-2cd48",
    storageBucket: "emily-website-2cd48.firebasestorage.app",
    messagingSenderId: "441020032477",
    appId: "1:441020032477:web:08b9aa41d1dbb8f9810234"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();


/*
                _         _
    __   ___.--'_`.     .'_`--.___   __
  ( _`.'. -   'o` )   ( 'o`   - .`.'_ )
  _\.'_'      _.-'     `-._      `_`./_
  ( \`. )    //\`         '/\\    ( .'/ )
  \_`-'`---'\\__,       ,__//`---'`-'_/
    \`        `-\         /-'        '/
    `                               '   
*/
(function(){
  const counterEl = document.getElementById('visitorCounter');

  const counterRef = db.ref('visitorCount');

  if (!localStorage.getItem('counted')) {
    localStorage.setItem('counted', '1');
    counterRef.transaction(current => (current || 0) + 1);
  }

  counterRef.on('value', snap => {
    const v = snap.val() || 0;
    const j = v % 10;
    const k = v % 100;
    if(j == 1 && k != 11)
    {
      counterEl.textContent = 'Welcome! You are the ' + String(v) +'st visitor.';
    }
    else if(j == 2 && k != 12)
    {
      counterEl.textContent = 'Welcome! You are the ' + String(v) +'nd visitor.';
    }
    else if(j==3 && k!= 13)
    {
      counterEl.textContent = 'Welcome! You are the ' + String(v) +'rd visitor.';
    }
    else
    {
      counterEl.textContent = 'Welcome! You are the ' + String(v) +'th visitor.';
    }
    
  });
})();

(function() {
  const navLinks = [
    { href: '#about',     icon: 'imgs/navbar.gif',  label: 'About'     },
    { href: '#projects',  icon: 'imgs/navbar1.gif', label: 'Projects'  },
    { href: '#gallery',   icon: 'imgs/navbar3.gif', label: 'Gallery'   },
    { href: '#pet',       icon: 'imgs/navbar2.gif', label: 'My Pet'    },
    { href: '#guestbook', icon: 'imgs/navbar4.gif', label: 'Guestbook' },
    { href: '#contact',   icon: 'imgs/navbar5.gif', label: 'Contact'   },
  ];

  function makeLinkHTML() {
    return navLinks.map(l =>
    `<a href="${l.href}">
      <img src="${l.icon}" height="20" alt="">
      ${l.label}
    </a>`
    ).join('');
  }

  const inner = document.getElementById('stickyNavInner');
  inner.innerHTML = makeLinkHTML();

  const stickyNav = document.getElementById('stickyNav');
  const mainNav   = document.getElementById('mainNav');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        stickyNav.classList.remove('visible');
      } else {
        stickyNav.classList.add('visible');
      }
    },
    { threshold: 0 }
  );
  observer.observe(mainNav);
})();

const preload = new Image();
preload.src = 'imgs/aboutme4.png';

function wigglePic() {
  const pic = document.getElementById('profilePic');
  pic.src = 'imgs/aboutme4.png';
  pic.style.transform = 'rotate(5deg)';

  setTimeout(() => {
    pic.src = 'imgs/aboutme3.png';
    pic.style.transform = 'rotate(0deg)';
  }, 600);
}

const tracks = [
  //instrumentals
  { title: "Golf - Course Intro OST", artist: "Wii Sports", src: "audio/golf.mp3" },
  { title: "Lease (Slowed)", artist: "Takeshi Abo", src: "audio/lease.mp3" },
  { title: "distant ocean", artist: "alyzea", src: "audio/distantocean.mp3" },
  { title: "Fishing", artist: "Wii Play", src: "audio/fishing.mp3" },
  { title: "Virus Buster", artist: "Brain Age 2", src: "audio/virusbuster.mp3" },
  { title: "The Spa", artist: "Fantage", src: "audio/fantage.mp3" },
  { title: "Shopping Theme", artist: "Nintendogs", src: "audio/nintendogs.mp3" },
  { title: "Timely", artist: "MeepCity", src: "audio/timely.mp3" },
  { title: "Almost Closing Time", artist: "Work at a Pizza Place", src: "audio/almostclosingtime.mp3" },
  { title: "Relaxed Scene", artist: "James Clarke", src: "audio/relaxedscene.mp3" },

  //has a singer
  { title: "Try, Try, Try", artist: "The Smashing Pumpkins", src: "audio/trytrytry.mp3" },
  { title: "Futile Devices", artist: "Sufjan Stevens (Doveman Remix)", src: "audio/futiledevices.mp3" }, 
  { title: "Back To The Old House", artist: "The Smiths", src: "audio/backtotheoldhouse.mp3" },
  { title: "I'll Change For You", artist: "Mitski", src: "audio/illchangeforyou.mp3" },
  { title: "How I Get", artist: "Laufey", src: "audio/howiget.mp3" },
  { title: "Love", artist: "Lana Del Rey", src: "audio/love.mp3" },
  { title: "To All of You", artist: "Syd Matters", src: "audio/toallofyou.mp3" },
  { title: "Still Beating", artist: "Mac DeMarco", src: "audio/stillbeating.mp3" },
  { title: "3 Libras", artist: "A Perfect Circle", src: "audio/3libras.mp3" },
  { title: "Heart To Heart", artist: "Mac DeMarco", src: "audio/hearttoheart.mp3" },
  { title: "In The Rain", artist: "Addison Rae", src: "audio/intherain.mp3" },
  { title: "Moonlight On The River", artist: "Mac DeMarco", src: "audio/moonlightontheriver.mp3" },
  { title: "Mrs Magic (Strings Version)", artist: "Strawberry Guy", src: "audio/mrsmagic.mp3" },
  
  { title: "My Dahlia", artist: "The Smashing Pumpkins", src: "audio/mydahlia.mp3" },
  { title: "Take A Picture", artist: "FILTER", src: "audio/takeapicture.mp3" },
  { title: "World, Hold On (Children of the Sky)", artist: "Bob Sinclair", src: "audio/worldholdon.mp3" },
  { title: "we never dated", artist: "sombr", src: "audio/weneverdated.mp3" }
];

const audio        = document.getElementById('audioPlayer');
const playBtn      = document.getElementById('playBtn');
const vinyl        = document.getElementById('vinyl');
const trackTitle   = document.getElementById('trackTitle');
const trackArtist  = document.getElementById('trackArtist');
const progressFill = document.getElementById('progressFill');
const progressBar  = document.getElementById('progressBar');
const timeDisplay  = document.getElementById('timeDisplay');
const playerStatus = document.getElementById('playerStatus');

let currentIdx = -1;
let isPlaying  = false;

function fmtTime(s) {
  if (!isFinite(s) || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ':' + String(sec).padStart(2, '0');
}
function setStatus(msg, cls) {
  playerStatus.textContent = msg;
  playerStatus.className = 'player-status' + (cls ? ' ' + cls : '');
}
function updatePlayBtn() {
  playBtn.textContent = isPlaying ? '⏸' : '▶';
}
function updateVinyl() {
  vinyl.style.animationPlayState = isPlaying ? 'running' : 'paused';
}
function highlightPlaylistItem() {
  document.querySelectorAll('#playlist li').forEach((li, i) => {
    li.className = i === currentIdx ? 'active' : '';
  });
}

function loadTrack(idx, autoplay) {
  currentIdx = ((idx % tracks.length) + tracks.length) % tracks.length;
  const t = tracks[currentIdx];
  audio.src = t.src;
  audio.load();
  trackTitle.textContent  = t.title;
  trackArtist.textContent = t.artist;
  progressFill.style.width = '0%';
  timeDisplay.textContent  = '0:00 / 0:00';
  setStatus('loading...', 'loading');
  highlightPlaylistItem();

  if (autoplay) {
    audio.play().then(() => {
      isPlaying = true;
      setStatus('');
      updateVinyl();
    }).catch(() => {
      isPlaying = false;
      setStatus('click ▶ to play', '');
    });
  } else {
    isPlaying = false;
  }
  updatePlayBtn();
  updateVinyl();
}

function togglePlay() {
  if (currentIdx < 0) { loadTrack(0, true); return; }
  if (audio.paused) {
    audio.play().then(() => {
      isPlaying = true;
      updatePlayBtn(); setStatus('');
    }).catch(() => setStatus('playback blocked! click again', 'error'));
  } else {
    audio.pause();
    isPlaying = false;
    updatePlayBtn(); updateVinyl();
  }
}
function nextTrack() { loadTrack(currentIdx + 1, isPlaying); }
function prevTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    loadTrack(currentIdx - 1, isPlaying);
  }
}
function seekTrack(e) {
  if (!audio.duration || currentIdx < 0) return;
  const rect = progressBar.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.currentTime = pct * audio.duration;
}
function setVol(v) {
  audio.volume = v / 100;
  document.getElementById('volDisplay').textContent = v + '%';
}
audio.volume = 0.7;

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';
  progressBar.style.setProperty('--scrub', pct + '%');
  timeDisplay.textContent = fmtTime(audio.currentTime) + ' / ' + fmtTime(audio.duration);
});
audio.addEventListener('canplay',  () => setStatus(''));
audio.addEventListener('playing',  () => { isPlaying = true;  updatePlayBtn(); updateVinyl(); setStatus(''); });
audio.addEventListener('pause',    () => { isPlaying = false; updatePlayBtn(); updateVinyl(); });
audio.addEventListener('ended',    () => loadTrack(currentIdx + 1, true));
audio.addEventListener('error',    () => {
  const codes = { 1:'aborted', 2:'network error', 3:'decode error', 4:'src not found' };
  const msg = audio.error ? (codes[audio.error.code] || 'unknown error') : 'load error';
  setStatus('⚠ ' + msg + '! check the file path', 'error');
  isPlaying = false; updatePlayBtn(); updateVinyl();
});
audio.addEventListener('waiting', () => setStatus('buffering...', 'loading'));
audio.addEventListener('stalled', () => setStatus('stalled! check connection', 'loading'));

function buildPlaylist() {
  const ul = document.getElementById('playlist');
  ul.innerHTML = '';
  tracks.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="pnum">${i + 1}</span>
      <span class="ptitle">${t.title}</span>
      <span class="partist">${t.artist}</span>
    `;
    li.onclick = () => loadTrack(i, true);
    ul.appendChild(li);
  });
}
buildPlaylist();
loadTrack(0, false);


const petMsgs = {
  normal:   [':3','*blinks at you*','*jiggles*','...','*is having a good time*'],
  happy:    ['(≧◡≦) !!','*hugs you*','yippee!!','i love you so much!'],
  eating:   ['*nom nom nom*','mmmph!','*eats*','yum dot com'],
  sleeping: ['zzZzzZz','*dreams about you*','*snores*','zzZzzZz'],
  playful:  ['weeeee!!','*is excited*','PLAY WITH ME','*bounces everywhere*'],
  hungry:   ['*stares at empty bowl*','so um...where is my food?','*needs fuel*','feed me...please'],
};
let pet = { state:'normal', hunger:70, happy:85, energy:90, wakeTimer:null };

function updatePetUI() {
  const msgs = petMsgs[pet.state] || petMsgs.normal;
  document.getElementById('petMsg').textContent = msgs[Math.floor(Math.random() * msgs.length)];
  document.getElementById('hungerBar').style.width = pet.hunger + '%';
  document.getElementById('happyBar').style.width  = pet.happy  + '%';
  document.getElementById('energyBar').style.width = pet.energy + '%';
}
function petDecide() {
  if (pet.state === 'sleeping') return;
  if (pet.energy < 20)   { goSleep(); return; }
  if (pet.hunger < 20)   { pet.state = 'hungry'; }
  else if (pet.happy > 80) { pet.state = 'happy'; }
  else                   { pet.state = 'normal'; }
  updatePetUI();
}
function feedPet() {
  if (pet.state === 'sleeping') { document.getElementById('petMsg').textContent='zzZzz...'; return; }
  document.getElementById('petDisplay').className = 'pet-display eating';
  setTimeout(() => document.getElementById('petDisplay').className = 'pet-display', 900);
  pet.hunger = Math.min(100, pet.hunger + 25);
  pet.happy  = Math.min(100, pet.happy  + 5);
  pet.state  = 'eating';
  updatePetUI();
  setTimeout(petDecide, 1200);
}
function petAnimal() {
  if (pet.state === 'sleeping') { document.getElementById('petMsg').textContent='*wakes up annoyed* ...zzz'; return; }
  document.getElementById('petDisplay').className = 'pet-display petting';
  setTimeout(() => document.getElementById('petDisplay').className = 'pet-display', 900);
  pet.happy = Math.min(100, pet.happy + 20);
  pet.state = 'happy';
  updatePetUI();
  setTimeout(petDecide, 1200);
}
function playPet() {
  if (pet.state === 'sleeping') { document.getElementById('petMsg').textContent='zzZZzzz'; return; }
  pet.happy  = Math.min(100, pet.happy  + 15);
  pet.energy = Math.max(0,   pet.energy - 20);
  pet.state  = 'playful';
  updatePetUI();
  clearTimeout(pet.decideTimer);
  pet.decideTimer = setTimeout(petDecide, 1500);
}
function goSleep() {
  if (pet.state === 'sleeping') return;
  pet.state = 'sleeping';
  updatePetUI();
  if (pet.wakeTimer) clearTimeout(pet.wakeTimer);
  pet.wakeTimer = setTimeout(() => { pet.energy = 100; pet.state = 'normal'; updatePetUI(); }, 15000);
}
setInterval(() => {
  if (pet.state !== 'sleeping') {
    pet.hunger = Math.max(0, pet.hunger - 1);
    pet.happy  = Math.max(0, pet.happy  - 0.5);
    pet.energy = Math.max(0, pet.energy - 0.5);
  }
  petDecide();
}, 8000);
setInterval(() => { if (pet.state !== 'sleeping' && Math.random() < 0.3) goSleep(); }, 90000);
updatePetUI();


const artworks = [
  { title: "2026/11/21", src: "imgs/art/robloxavatar.jpg"},
  { title: "2023/01/12", src: "imgs/art/ballora.jpg"},
  { title: "2023/01/22", src: "imgs/art/chess.jpg"},
  { title: "2026/05/27", src: "imgs/art/peaCOCKS.png"},
  { title: "2026/05/28", src: "imgs/art/snail.png"},
  { title: "2025/07/31", src: "imgs/art/samsungmusic.png"},
  { title: "2026/03/11", src: "imgs/art/amalgemation.png" },
  { title: "2022/11/04", src: "imgs/art/doomergirl.jpg" },
  { title: "2026/03/23", src: "imgs/art/totenbergalbum.jpg"},
  { title: "2026/03/11", src: "imgs/art/alllamps.png"},
  { title: "2026/03/11", src: "imgs/art/alicemadness.jpg"},
  
];

function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  artworks.forEach((art) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = art.src;
    img.alt = art.title;
    img.style.cssText = 'width:100%;height:auto;display:block;';
    const ov = document.createElement('div');
    ov.className = 'gallery-overlay';
    ov.textContent = art.title;
    div.appendChild(img);
    div.appendChild(ov);
    div.onclick = () => openLightbox(art);
    grid.appendChild(div);
  });
}

function openLightboxImg(src) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxTitle').textContent = '';
  document.getElementById('lightbox').classList.add('open');
}

function openLightbox(art) {
  document.getElementById('lightboxImg').src = art.src;
  document.getElementById('lightboxTitle').textContent = art.title;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || e.target.className === 'lightbox-close')
    document.getElementById('lightbox').classList.remove('open');
}
buildGallery();

function makeProjectScreenshotsClickable() {
  document.querySelectorAll('.project-ss').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = () => openLightboxImg(img.src);
  });
}
makeProjectScreenshotsClickable();

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const gbRef = db.ref('guestbook');


gbRef.orderByChild('timestamp').on('value', snap => {
  const div = document.getElementById('gbEntries');
  div.innerHTML = '';

  const entries = [];

  snap.forEach(child => {
    entries.push(child.val());
  });

  entries.sort((a, b) => b.timestamp - a.timestamp);

  entries.forEach(entry => {
    const d = document.createElement('div');
    d.className = 'gb-entry';

    d.innerHTML = `
      <div class="gb-entry-header">
        <span class="gb-name">✦ ${escapeHTML(entry.name)}</span>
        <span class="gb-date">${escapeHTML(entry.date)}</span>
      </div>
      <div class="gb-text">${entry.msg}</div>
    `;

    div.appendChild(d);
  });
});

const oldEmojis = [
  //people
  'imgs/emojis/emoji.gif',
  'imgs/emojis/emoji1.gif',
  'imgs/emojis/emoji2.gif',
  'imgs/emojis/emoji3.gif',
  'imgs/emojis/emoji4.gif',
  'imgs/emojis/emoji5.gif',
  'imgs/emojis/emoji6.gif',
  'imgs/emojis/emoji7.gif',
  'imgs/emojis/emoji8.gif',
  'imgs/emojis/emoji9.gif',
  'imgs/emojis/emoji10.gif',
  'imgs/emojis/emoji11.gif',
  'imgs/emojis/emoji12.gif',
  'imgs/emojis/emoji13.gif',
  'imgs/emojis/emoji14.gif',
  'imgs/emojis/emoji15.gif',
  'imgs/emojis/emoji16.gif',
  'imgs/emojis/emoji17.gif',
  'imgs/emojis/emoji18.gif',
  'imgs/emojis/emoji19.gif',
  'imgs/emojis/emoji20.gif',
  'imgs/emojis/emoji21.gif',
  'imgs/emojis/emoji22.gif',
  'imgs/emojis/emoji23.gif',
  'imgs/emojis/emoji24.gif',
  'imgs/emojis/emoji25.gif',
  'imgs/emojis/emoji26.gif',
  'imgs/emojis/emoji27.gif',
  'imgs/emojis/emoji28.gif',
  'imgs/emojis/emoji29.gif',
  'imgs/emojis/emoji30.gif',
  'imgs/emojis/emoji31.gif',
  'imgs/emojis/emoji32.gif',
  'imgs/emojis/emoji33.gif',
  'imgs/emojis/emoji34.gif',
  'imgs/emojis/emoji35.gif',
  'imgs/emojis/emoji42.gif',

  //hearts
  'imgs/emojis/emoji36.gif',
  'imgs/emojis/emoji43.gif',
  'imgs/emojis/emoji41.gif',

  //animals
  'imgs/emojis/emoji37.gif',
  'imgs/emojis/emoji38.gif',
  'imgs/emojis/emoji39.gif',
  'imgs/emojis/emoji40.gif',

  //other
  'imgs/emojis/emoji44.gif',
];

function submitGuestbook() {
  const nameEl = document.getElementById('gbName');
  const msgEl  = document.getElementById('gbMsg');
  const name   = nameEl.value.trim();
  const msg = msgEl.innerHTML;
  msgEl.innerHTML = '';

  if (!name || !msg) {
    alert('please fill in your name and message!! (◕‿◕✿)');
    return;
  }

  if (name.length > 30 || msg.length > 2000) {
    alert('message too long!! keep name ≤30 chars and message ≤2000 chars');
    return;
  }

  const now  = new Date();
  const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;

  gbRef.push({ name, msg, date, timestamp: now.getTime() })
    .then(() => {
      nameEl.value = '';
      msgEl.value  = '';
      alert('Your message has been posted. Thanks for signing :-D');
    })
    .catch(err => alert('Something went wrong: ' + err.message));
}

function buildEmojiPicker() {
  const picker = document.getElementById('emojiPicker');
  const msgBox = document.getElementById('gbMsg');

  if (!picker) {
    console.error('emojiPicker element not found');
    return;
  }

  picker.innerHTML = '';

  oldEmojis.forEach(gif => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'emoji-btn';
    btn.innerHTML = `<img src="${gif}" height="18px">`;

    btn.onclick = () => {
      msgBox.focus();

      const img = document.createElement('img');
      img.src = gif;
      img.className = 'guestbook-emoji';

      const sel = window.getSelection();

      if (sel.rangeCount && msgBox.contains(sel.anchorNode)) {
        const range = sel.getRangeAt(0);
        range.insertNode(img);
        range.setStartAfter(img);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      } else {
        msgBox.appendChild(img);
      }
    };

    picker.appendChild(btn);
  });
}

function checkGbEditorEmpty() {
  const msgEl = document.getElementById('gbMsg');
  const isEmpty = msgEl.textContent.trim() == '' && msgEl.querySelectorAll('img').length === 0;
  msgEl.classList.toggle('is-empty', isEmpty);
}



buildEmojiPicker();

document.getElementById('gbMsg').addEventListener('input', checkGbEditorEmpty);
checkGbEditorEmpty();

(function() {
  const btn  = document.getElementById('darkToggle');
  const body = document.body;
  const KEY  = 'darkMode';

  function apply(dark) {
    body.classList.toggle('dark-mode', dark);
    btn.innerHTML = dark ? '<img src="imgs/darktoggle.gif" height="32px" style="transform: scaleX(-1);" />' : '<img src="imgs/suntoggle.gif" />';
    localStorage.setItem(KEY, dark ? '1' : '0');
  }

  apply(localStorage.getItem(KEY) === '1');

  btn.addEventListener('click', () => {
    apply(!body.classList.contains('dark-mode'));
  });
})();

document.getElementById("fishMode").addEventListener("click", function(e) {
  e.preventDefault();
  document.body.classList.toggle('fish-mode');
});

(function() {
  const TRAIL_LENGTH = 15;
  const dots = [];

  for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      z-index: 99999;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(dot);
    dots.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = 0;
  let mouseY = 0;

  const OFFSET_X = 10;
  const OFFSET_Y = 17;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const confetti = [];
const CONFETTI_COUNT = 80;

document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === '4') {
    spawnConfetti();
  }
});

function spawnConfetti() {
  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const el = document.createElement('div');

    const x = Math.random() * window.innerWidth;
    const y = window.innerHeight - 10;

    el.style.position = 'fixed';
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = '8px';
    el.style.height = '12px';
    el.style.borderRadius = '2px';
    el.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
    el.style.zIndex = 99999;
    el.style.pointerEvents = 'none';

    document.body.appendChild(el);

    confetti.push({
      el,
      x,
      y,
      vx: (Math.random() - 0.5) * 6,
      vy: -(Math.random() * 10 + 6),
      gravity: 0.35
    });
  }
}


  function update() {
    dots[0].x += (mouseX + OFFSET_X - dots[0].x) * 0.99;
    dots[0].y += (mouseY + OFFSET_Y - dots[0].y) * 0.99;

    for (let i = 1; i < TRAIL_LENGTH; i++) {
      dots[i].x += (dots[i - 1].x - dots[i].x) * 0.45;
      dots[i].y += (dots[i - 1].y - dots[i].y) * 0.45;
    }

    dots.forEach((dot, i) => {
      const progress = i / TRAIL_LENGTH;
      const size = Math.max(1, 12 * (1 - progress));
      const opacity = (1 - progress) * 0.6;

      const r = Math.round(progress * 80);
      const g = Math.round(100 + progress * 155);
      const b = 255;

      dot.el.style.left = `${dot.x}px`;
      dot.el.style.top = `${dot.y}px`;
      dot.el.style.width = `${size}px`;
      dot.el.style.height = `${size}px`;
      dot.el.style.background = `rgb(${r}, ${g}, ${b})`;
      dot.el.style.opacity = opacity;
      dot.el.style.boxShadow = `0 0 ${size * 1.5}px rgb(${r}, ${g}, ${b})`;
    });

    for (let i = confetti.length - 1; i >= 0; i--) {
      const p = confetti[i];

      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;

      p.el.style.left = `${p.x}px`;
      p.el.style.top = `${p.y}px`;

      if (p.y > window.innerHeight + 50) {
        p.el.remove();
        confetti.splice(i, 1);
      }
    }

    requestAnimationFrame(update);
  }

  update();
})();

