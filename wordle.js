var currentWordleGame = null;

var wordHints = {
    "DEVOTION": "A feeling of strong love and loyalty",
    "PASSION": "An intense emotion or strong feeling",
    "TENDERNESS": "Gentleness and kindness in expressing love",
    "ADORATION": "Deep love and respect for someone",
    "ROMANCE": "A feeling of excitement associated with love",
    "AFFECTION": "A gentle feeling of fondness or liking",
    "INTIMACY": "Close familiarity or closeness between people",
    "DESIRE": "A strong feeling of wanting something or someone",
    "COMFORT": "A state of physical ease and freedom from worry",
    "TRUST": "Firm belief in the reliability of someone",
    "LONGING": "A yearning desire for something or someone",
    "JOY": "A feeling of great pleasure and happiness",
    "SPIRIT": "The origin or the existance of a person",
    "HOPE": "A feeling of expectation for something positive",
    "SERENITY": "The state of being calm and peaceful",
    "BELONGING": "The feeling of being accepted and fitting in",
    "CHERISH": "To hold someone dear and protect lovingly",
    "ENCHANTMENT": "A feeling of being delighted or captivated",
    "WHISPER": "A soft spoken word or secret message",
    "PROMISE": "A declaration that something will happen",
    "DREAM": "A cherished aspiration or vision of the future",
    "HEARTBEAT": "The rhythm of the heart, symbolizing life and love",
    "SURRENDER": "To give oneself over completely to something",
    "ETERNITY": "Infinite or unending time",
    "SACRIFICE": "Giving up something precious for another",
    "FIDELITY": "Faithfulness to a person or commitment",
    "PASSIONATE": "Showing or caused by strong feelings",
    "TENDER": "Showing gentleness and concern",
    "DEVOTED": "Very loving and loyal",
    "ENAMORED": "Filled with love and admiration",
    "YEARNING": "A deep longing for something",
    "RAPTURE": "A feeling of intense pleasure or joy",
    "ADMIRE": "To regard with respect and warm approval",
    "CARING": "Displaying kindness and concern for others",
    "ENDEARMENT": "A word or phrase expressing affection",
    "FONDNESS": "Affection or liking for someone",
    "INFATUATION": "An intense but short-lived passion",
    "LOYALTY": "A strong feeling of support or allegiance",
    "ARDOR": "Enthusiasm or passion",
    "AFFINITY": "A natural liking or attraction to someone",
    "ROMANTIC": "Conducive to or characterized by romance",
    "SINCERITY": "The quality of being genuine and honest",
    "ATTRACTION": "The action or power of drawing someone closer",
    "COMPANIONSHIP": "The state of having a companion or friend",
    "EMPATHY": "The ability to understand another's feelings",
    "KINDNESS": "The quality of being friendly and considerate",
    "RESPECT": "A feeling of admiration for someone",
    "SUPPORT": "To give assistance and encouragement",
    "UNDERSTANDING": "Sympathetic awareness of others' feelings",
    "PATIENCE": "The capacity to accept delay without frustration",
    "COMPASSION": "Sympathetic concern for others' suffering",
    "ENCOURAGEMENT": "Words or actions that give support and confidence",
    "GRATITUDE": "The quality of being thankful",
    "HOPEFULNESS": "A feeling of optimism about the future",
    "CONTENTMENT": "A state of happiness and satisfaction",
    "JOYFULNESS": "The quality of being full of joy",
    "REASSURANCE": "Words that remove doubts and fears",
    "SOLACE": "Comfort in a time of distress",
    "TRANQUILITY": "A state of peace and calm",
    "WARMTH": "A feeling of affection and friendliness",
    "ACCEPTANCE": "The act of receiving someone willingly",
    "ADMIRATION": "Respect and warm approval",
    "AFFECTIONATE": "Readily feeling or showing fondness",
    "AMITY": "A friendly relationship between people",
    "BOND": "A connection or tie between people",
    "CHARITY": "Kindness and tolerance toward others",
    "CLOSENESS": "The state of being near in relationship",
    "COMFORTING": "Serving to alleviate grief or distress",
    "CONNECTION": "A relationship between people",
    "DELIGHT": "Great pleasure and enjoyment",
    "ENDEARING": "Inspiring affection",
    "FOND": "Having affection for someone",
    "GENTLE": "Mild and kind in manner",
    "HARMONY": "Agreement and peaceful coexistence",
    "INSPIRATION": "The process of being mentally stimulated",
    "KINDRED": "Similar in spirit or character",
    "LOYAL": "Giving constant support to someone",
    "NURTURING": "Caring for and encouraging growth",
    "REVERENCE": "Deep respect for someone",
    "SECURITY": "The state of feeling safe and protected",
    "SYMPATHY": "Feelings of pity for someone's misfortune",
    "TRUSTING": "Having faith in someone's reliability",
    "UNITY": "The state of being united as a whole",
    "STRENGTH": "The quality of being strong",
    "RESILIENCE": "The ability to recover from difficulties",
    "LIGHT": "Something that illuminates darkness",
    "COURAGE": "The ability to face fear or difficulty",
    "REST": "A period of relaxation",
    "GROWTH": "The process of developing",
    "BREATHE": "To take air into the lungs",
    "PERSPECTIVE": "A particular way of viewing things",
    "PROGRESS": "Forward movement toward a goal",
    "WORTH": "The value or quality of something",
    "HEALING": "The process of becoming healthy again",
    "PRESENCE": "The state of being in a place",
    "RELEASE": "To let go of something",
    "PERMISSION": "Authorization to do something",
    "LIGHTNESS": "The quality of being light or carefree",
    "SPACE": "Room to exist or move freely",
    "GROUNDED": "Stable and sensible",
    "POSSIBILITY": "A thing that may happen",
    "VOICE": "The sound produced in speaking",
    "RESTORATION": "The act of bringing back to original state",
    "GENTLENESS": "The quality of being kind and tender",
    "FAITH": "Complete trust or confidence",
    "CLARITY": "The quality of being clear",
    "REFUGE": "A place of shelter and safety",
    "PURPOSE": "The reason for which something exists",
    "CALM": "A peaceful state free from disturbance",
    "JOURNEY": "An act of traveling from one place to another",
    "NURTURE": "To care for and encourage growth",
    "BELIEF": "Trust or confidence in something",
    "STILLNESS": "The absence of movement or sound",
    "RENEWAL": "The act of making something new again",
    "SAFE": "Protected from danger or harm",
    "BRAVE": "Ready to face danger or pain",
    "PEACE": "Freedom from disturbance",
    "FEARLESS": "Lacking fear in the face of danger",
    "FIERCE": "Having a powerful and intense quality",
    "DEFIANT": "Showing bold resistance",
    "VULNERABLE": "Open to emotional exposure",
    "CONSUME": "To absorb or take in completely",
    "UNWORTHY": "Not deserving of something",
    "OBSESSION": "An idea that constantly occupies the mind",
    "CHAOS": "Complete disorder and confusion",
    "TORMENT": "Severe physical or mental suffering",
    "REDEMPTION": "The act of being saved from sin or error",
    "INEVITABLE": "Certain to happen; unavoidable",
    "CONQUER": "To overcome and take control",
    "BETRAYAL": "The act of being disloyal",
    "VENGEANCE": "Punishment inflicted for a wrong",
    "THRONE": "A ceremonial seat of power",
    "WICKED": "Evil or morally wrong",
    "ACHE": "A continuous dull pain",
    "ETERNAL": "Lasting forever; infinite",
    "DARKNESS": "The absence of light",
    "SALVATION": "Deliverance from harm or ruin",
    "WINGS": "Appendages used for flying; freedom",
    "STARLIGHT": "The light from the stars",
    "MATE": "A partner or companion",
    "WORTHY": "Deserving respect or attention",
    "FREEDOM": "The state of being free",
    "REBIRTH": "A new beginning or revival",
    "NIGHT": "The period of darkness between days",
    "COURT": "A place where justice is administered",
    "DREAMS": "A series of images during sleep; aspirations",
    "IMMORTAL": "Living forever; never dying",
    "POWER": "The ability to do something",
    "SHIELD": "A protective barrier",
    "STARS": "Luminous points in the night sky",
    "SURVIVE": "To continue to live despite hardship",
    "VELARIS": "A hidden city of dreams",
    "CROWN": "A circular ornament worn on the head",
    "WARRIOR": "A brave fighter",
    "CROWS": "Black birds; symbols of mystery",
    "SAINTS": "Holy or virtuous people",
    "GLOVES": "Hand coverings; barriers to touch",
    "WRAITH": "A ghost or spirit",
    "KNIVES": "Sharp cutting instruments",
    "HARBOR": "A place of shelter",
    "BARREL": "A cylindrical container",
    "CROW": "A black bird",
    "TOUCH": "Physical contact between people",
    "SPIDER": "An eight-legged creature that weaves webs",
    "MIRACLE": "An extraordinary event",
    "KETTERDAM": "A city of thieves and dreamers",
    "LOCK": "A device for securing something",
    "SHIPS": "Large vessels for water travel",
    "REVENGE": "Retaliation for a wrong",
    "DREGS": "The least valuable part of something",
    "SILENCE": "Complete absence of sound",
    "GHOST": "The spirit of a dead person",
    "PATROCLUS": "A beloved companion from Greek mythology",
    "GLORY": "High renown or honor",
    "PHTHIA": "A homeland in Greek mythology",
    "LYRE": "A stringed musical instrument",
    "TROY": "An ancient city of legend",
    "GOLDEN": "Made of or resembling gold",
    "PROPHECY": "A prediction of the future",
    "BELOVED": "Dearly loved",
    "TOGETHER": "In the same place or at the same time",
    "HERO": "A person admired for courage",
    "MORTAL": "Subject to death",
    "ASHES": "The remains after burning",
    "SWIFT": "Moving or capable of moving quickly",
    "FATE": "The development of events beyond control",
    "MUSIC": "Vocal or instrumental sounds",
    "SEA": "The expanse of salt water",
    "MEMORY": "The faculty of remembering",
    "PRIDE": "A feeling of deep pleasure from achievements",
    "PREJUDICE": "Preconceived opinion not based on reason",
    "PEMBERLEY": "A grand estate; symbol of love",
    "ARDENTLY": "With intense feeling or passion",
    "TOLERABLE": "Able to be endured",
    "STUBBORN": "Refusing to change one's mind",
    "BENNETT": "A family name; symbol of sisterhood",
    "DANCING": "Moving rhythmically to music",
    "WALK": "To move at a regular pace",
    "LETTERS": "Written messages",
    "ESTATE": "An extensive area of land",
    "RAIN": "Water falling from clouds",
    "SISTER": "A female sibling",
    "EYES": "Organs of sight",
    "NETHERFIELD": "An estate; a place of encounter",
    "PLAIN": "Simple and unadorned",
    "EQUAL": "Being the same in value or status",
    "SOUL": "The spiritual part of a person",
    "FIRE": "Combustion producing heat and light",
    "READER": "One who reads",
    "THORNFIELD": "A place of secrets and love",
    "MAD": "Mentally ill or extremely foolish",
    "RETURN": "To come or go back",
    "STRANGE": "Unusual or surprising",
    "INDEPENDENT": "Free from outside control",
    "MOOR": "An open area of wild land",
    "SIMPLE": "Easily understood or done",
    "HEART": "The organ that pumps blood; center of emotion",
    "TRUTH": "The quality of being true",
    "CIRCUS": "A traveling show with performers",
    "MAGIC": "The power of influencing events",
    "GAME": "A form of play or competition",
    "TENT": "A portable shelter",
    "MIDNIGHT": "Twelve o'clock at night",
    "TIME": "The indefinite continued progress of existence",
    "WONDER": "A feeling of amazement",
    "BLACK": "The darkest color",
    "WHITE": "The lightest color",
    "BONFIRE": "A large outdoor fire",
    "REVERIE": "A state of dreamy meditation",
    "HEATHCLIFF": "A passionate soul from the moors",
    "MOORS": "Wild open lands",
    "HAUNTED": "Visited by ghosts; troubled",
    "WILD": "Uncontrolled or unrestrained",
    "STORM": "A violent weather disturbance",
    "WINDOW": "An opening in a wall",
    "HEATH": "An area of open uncultivated land",
    "SUMMER": "The warmest season",
    "BOAT": "A small vessel for water travel",
    "HOUSE": "A building for living in",
    "REMEMBER": "To recall to mind",
    "FOREVER": "For all future time",
    "DANCE": "To move rhythmically",
    "ALZHEIMER": "A disease affecting memory",
    "TOMORROW": "The day after today",
    "ANCHOR": "A device to secure a ship; stability",
    "RAINBOW": "An arc of colors in the sky",
    "PHOENIX": "A bird reborn from ashes",
    "BLOOM": "To produce flowers; to flourish",
    "MOUNTAIN": "A large natural elevation",
    "OCEAN": "A vast body of salt water",
    "BUTTERFLY": "An insect with colorful wings",
    "SUNRISE": "The time when the sun rises",
    "MOONLIGHT": "The light from the moon",
    "GARDEN": "A piece of ground for growing plants",
    "RIVER": "A large natural stream of water",
    "TREE": "A woody perennial plant",
    "HOME": "A place where one lives",
    "TREASURE": "A quantity of precious things",
    "SPARK": "A small fiery particle",
    "MELODY": "A sequence of musical notes",
    "CANVAS": "A surface for painting",
    "SUNSHINE": "Direct sunlight",
    "DIAMOND": "A precious gemstone",
    "SEED": "A plant's unit of reproduction",
    "BRIDGE": "A structure spanning an obstacle",
    "CASTLE": "A large fortified building",
    "LIGHTHOUSE": "A tower with a light for ships",
    "PUZZLE": "A game testing ingenuity",
    "DAWN": "The first appearance of light",
    "PATH": "A way or track",
    "FEATHER": "A bird's plumage",
    "ECHO": "A repeated sound",
    "WIND": "Moving air",
    "FOREST": "A large area of trees",
    "FLAME": "A hot glowing body of ignited gas",
    "NARNIA": "A magical land of wonder",
    "HOBBIT": "A small fictional creature",
    "POTTER": "A maker of pottery; a famous wizard",
    "WIZARD": "A person with magical powers",
    "GANDALF": "A wise wizard guide",
    "FRODO": "A brave hobbit on a quest",
    "ASLAN": "A noble lion; symbol of goodness",
    "HERMIONE": "A clever and brave witch",
    "DOBBY": "A loyal house-elf",
    "LUNA": "The moon; a dreamy person",
    "SNAPE": "A complex character with hidden love",
    "PATRONUS": "A guardian of light against darkness",
    "MARAUDER": "One who raids and plunders",
    "ELDERFLOWER": "A fragrant flowering plant",
    "MIRROR": "A reflective surface",
    "QUIDDITCH": "A magical sport on broomsticks",
    "PLATFORM": "A raised surface; a starting point",
    "WAND": "A thin stick used for magic",
    "CLOAK": "A loose outer garment",
    "BOSOM": "The breast; close friendship",
    "SCOPE": "The extent of one's perception",
    "GILBERT": "A devoted admirer",
    "CRICKET": "An insect; a sport",
    "FAIRY": "A small magical being",
    "NEVERLAND": "A place where you never grow old",
    "WENDY": "A caring and adventurous spirit",
    "LOST": "Unable to find one's way",
    "VELVET": "A soft luxurious fabric",
    "RABBIT": "A small furry mammal",
    "NURSERY": "A room for young children",
    "SKIN": "The outer covering of the body",
    "HATE": "A feeling the opposite of love",
    "LOVE": "A deep affection for someone",
    "HAPPY": "Feeling pleasure and contentment",
    "SMILE": "A pleased expression on the face",
    "KISS": "A touch with the lips as a sign of love",
    "HUG": "To hold someone tightly in your arms",
    "CARE": "To feel concern or interest",
    "SWEET": "Pleasing and kind in nature",
    "DEAR": "Regarded with deep affection",
    "PURE": "Not mixed with anything else; innocent",
    "TRUE": "In accordance with fact; genuine",
    "REAL": "Actually existing; authentic",
    "SOFT": "Easy to mold; gentle",
    "WARM": "Having moderate heat; friendly",
    "GLOW": "To emit light and warmth",
    "SHINE": "To give out bright light",
    "BLISS": "Perfect happiness",
    "GRACE": "Elegance and beauty of movement"
};

var WordleGame = {
    show: function() {
        var today = new Date().toISOString().split('T')[0];
        var alreadyPlayed = localStorage.getItem('wordlePlayed_' + today);
        var storedWord = localStorage.getItem('wordleWord_' + today);
        var storedMessage = localStorage.getItem('wordleMessage_' + today);
        var wordleOverlay = document.getElementById('wordleOverlay');
        
        if (!wordleOverlay) return;
        
        if (alreadyPlayed && storedWord && storedMessage) {
            showWordleResultOnly(storedWord, storedMessage);
        } else {
            wordleOverlay.classList.remove('hidden');
            
            var wordleResult = document.getElementById('wordleResult');
            if (wordleResult) wordleResult.classList.remove('show');
            
            var wordleBoard = document.getElementById('wordleBoard');
            if (wordleBoard) wordleBoard.style.display = '';
            
            var wordleKeyboard = document.getElementById('wordleKeyboard');
            if (wordleKeyboard) wordleKeyboard.style.display = '';
            
            var wordleControls = document.querySelector('.wordle-controls');
            if (wordleControls) wordleControls.style.display = '';
            
            var wordleHints = document.getElementById('wordleHints');
            if (wordleHints) wordleHints.style.display = '';
            
            var messagePreview = document.getElementById('wordleMessagePreview');
            if (messagePreview) messagePreview.style.display = 'none';
            
            var subtitle = document.querySelector('.wordle-subtitle');
            if (subtitle) subtitle.textContent = 'Guess the word that describes the message below';
            
            new LoveWordle();
        }
    },
    
    hide: function() {
        var wordleOverlay = document.getElementById('wordleOverlay');
        if (wordleOverlay) {
            wordleOverlay.classList.add('hidden');
        }
    },
    
    checkAndShow: function() {
        var today = new Date().toISOString().split('T')[0];
        var alreadyPlayed = localStorage.getItem('wordlePlayed_' + today);
        
        if (!alreadyPlayed) {
            this.show();
            return true;
        }
        return false;
    }
};

function LoveWordle(resumeState) {
    this.wordleOverlay = document.getElementById('wordleOverlay');
    this.wordleBoard = document.getElementById('wordleBoard');
    this.wordleKeyboard = document.getElementById('wordleKeyboard');
    this.previewText = document.getElementById('previewText');
    this.wordleHints = document.getElementById('wordleHints');
    this.wordleResult = document.getElementById('wordleResult');
    this.resultTitle = document.getElementById('resultTitle');
    this.resultWord = document.getElementById('resultWord');
    this.resultMessage = document.getElementById('resultMessage');
    this.messagePreview = document.getElementById('wordleMessagePreview');
    
    this.currentWord = '';
    this.currentMessage = '';
    this.currentRow = 0;
    this.currentTile = 0;
    this.maxAttempts = 6;
    this.wordLength = 0;
    this.gameOver = false;
    this.guesses = [];
    this.hintsUsed = 0;
    this.maxHints = 3;
    this.keyboardState = {};
    
    currentWordleGame = this;
    
    this.init(resumeState);
}

LoveWordle.prototype.init = function(resumeState) {
    this.selectRandomWord();
    this.createBoard();
    this.createKeyboard();
    this.setupEventListeners();
    this.hideMessagePreview();
    this.resetHintButton();
    this.displayStreak();
    
    if (resumeState) {
        this.restoreGameState(resumeState);
    } else {
        var savedState = this.loadGameState();
        if (savedState && !savedState.gameOver) {
            this.restoreGameState(savedState);
        }
    }
};

LoveWordle.prototype.hideMessagePreview = function() {
    if (this.messagePreview) {
        this.messagePreview.style.display = 'none';
    }
};

LoveWordle.prototype.resetHintButton = function() {
    var hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        hintBtn.disabled = false;
        hintBtn.style.opacity = '1';
    }
    if (this.wordleHints) {
        this.wordleHints.innerHTML = '';
    }
};

LoveWordle.prototype.displayStreak = function() {
    var streak = getStreak();
    var streakDisplay = document.getElementById('streakDisplay');
    
    if (!streakDisplay) {
        streakDisplay = document.createElement('div');
        streakDisplay.id = 'streakDisplay';
        streakDisplay.className = 'streak-display';
        
        var header = document.querySelector('.wordle-header');
        if (header) {
            header.appendChild(streakDisplay);
        }
    }
    
    if (streak > 0) {
        streakDisplay.innerHTML = '🔥 ' + streak + ' day' + (streak > 1 ? 's' : '') + ' streak';
        streakDisplay.style.display = 'block';
        if (streak >= 7) {
            streakDisplay.classList.add('high-streak');
        } else {
            streakDisplay.classList.remove('high-streak');
        }
    } else {
        streakDisplay.innerHTML = '🔥 Start your streak!';
        streakDisplay.style.display = 'block';
    }
};

LoveWordle.prototype.selectRandomWord = function() {
    var today = new Date().toISOString().split('T')[0];
    var storedWord = localStorage.getItem('wordleWord_' + today);
    var storedMessage = localStorage.getItem('wordleMessage_' + today);
    
    if (storedWord && storedMessage) {
        this.currentWord = storedWord;
        this.currentMessage = storedMessage;
    } else {
        var suitableWords = [];
        for (var i = 0; i < allLoveWords.length; i++) {
            var item = allLoveWords[i];
            if (item.word.length >= 4 && item.word.length <= 8 && /^[a-zA-Z]+$/.test(item.word)) {
                suitableWords.push(item);
            }
        }
        
        var randomIndex = Math.floor(Math.random() * suitableWords.length);
        var selected = suitableWords[randomIndex];
        
        this.currentWord = selected.word.toUpperCase();
        this.currentMessage = selected.message;
        
        localStorage.setItem('wordleWord_' + today, this.currentWord);
        localStorage.setItem('wordleMessage_' + today, this.currentMessage);
    }
    
    this.wordLength = this.currentWord.length;
};

LoveWordle.prototype.createBoard = function() {
    this.wordleBoard.innerHTML = '';
    
    for (var i = 0; i < this.maxAttempts; i++) {
        var row = document.createElement('div');
        row.className = 'wordle-row';
        row.dataset.row = i;
        
        for (var j = 0; j < this.wordLength; j++) {
            var tile = document.createElement('div');
            tile.className = 'wordle-tile';
            tile.dataset.row = i;
            tile.dataset.col = j;
            row.appendChild(tile);
        }
        
        this.wordleBoard.appendChild(row);
    }
};

LoveWordle.prototype.createKeyboard = function() {
    var rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
    ];
    
    var self = this;
    this.wordleKeyboard.innerHTML = '';
    
    for (var r = 0; r < rows.length; r++) {
        var row = rows[r];
        var rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        
        for (var k = 0; k < row.length; k++) {
            var key = row[k];
            var button = document.createElement('button');
            button.className = 'key';
            button.textContent = key;
            button.dataset.key = key;
            
            if (key === 'ENTER' || key === '⌫') {
                button.classList.add('wide');
            }
            
            (function(keyValue) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    self.handleKeyPress(keyValue);
                });
            })(key);
            
            rowDiv.appendChild(button);
        }
        
        this.wordleKeyboard.appendChild(rowDiv);
    }
};

LoveWordle.prototype.setupEventListeners = function() {
    var self = this;
    
    var hintBtn = document.getElementById('hintBtn');
    if (hintBtn) {
        var newHintBtn = hintBtn.cloneNode(true);
        hintBtn.parentNode.replaceChild(newHintBtn, hintBtn);
        newHintBtn.addEventListener('click', function() {
            self.showHint();
        });
    }
    
    var skipBtn = document.getElementById('skipBtn');
    if (skipBtn) {
        var newSkipBtn = skipBtn.cloneNode(true);
        skipBtn.parentNode.replaceChild(newSkipBtn, skipBtn);
        newSkipBtn.addEventListener('click', function() {
            self.pauseGame();
        });
    }
};

LoveWordle.prototype.handleKeyPress = function(key) {
    if (this.gameOver) return;
    
    if (key === 'ENTER') {
        this.submitGuess();
    } else if (key === '⌫') {
        this.deleteLetter();
    } else if (this.currentTile < this.wordLength) {
        this.addLetter(key);
    }
};

LoveWordle.prototype.addLetter = function(letter) {
    var tile = document.querySelector('.wordle-tile[data-row="' + this.currentRow + '"][data-col="' + this.currentTile + '"]');
    if (tile) {
        tile.textContent = letter;
        tile.classList.add('filled');
        this.currentTile++;
        this.saveGameState();
    }
};

LoveWordle.prototype.deleteLetter = function() {
    if (this.currentTile > 0) {
        this.currentTile--;
        var tile = document.querySelector('.wordle-tile[data-row="' + this.currentRow + '"][data-col="' + this.currentTile + '"]');
        if (tile) {
            tile.textContent = '';
            tile.classList.remove('filled');
            this.saveGameState();
        }
    }
};

LoveWordle.prototype.submitGuess = function() {
    if (this.currentTile !== this.wordLength) {
        this.shakeRow();
        return;
    }
    
    var guess = this.getCurrentGuess();
    this.guesses.push(guess);
    
    this.checkGuess(guess);
    
    var self = this;
    
    if (guess === this.currentWord) {
        this.gameOver = true;
        this.clearGameState();
        setTimeout(function() {
            self.showResult(true);
        }, 1500);
    } else if (this.currentRow >= this.maxAttempts - 1) {
        this.gameOver = true;
        this.clearGameState();
        setTimeout(function() {
            self.showResult(false);
        }, 1500);
    } else {
        this.currentRow++;
        this.currentTile = 0;
        this.saveGameState();
    }
};

LoveWordle.prototype.getCurrentGuess = function() {
    var guess = '';
    for (var i = 0; i < this.wordLength; i++) {
        var tile = document.querySelector('.wordle-tile[data-row="' + this.currentRow + '"][data-col="' + i + '"]');
        guess += tile.textContent;
    }
    return guess;
};

LoveWordle.prototype.checkGuess = function(guess) {
    var wordArray = this.currentWord.split('');
    var guessArray = guess.split('');
    var result = [];
    var self = this;
    
    for (var i = 0; i < this.wordLength; i++) {
        result.push('absent');
    }
    
    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] === wordArray[i]) {
            result[i] = 'correct';
            wordArray[i] = null;
        }
    }
    
    for (var i = 0; i < guessArray.length; i++) {
        if (result[i] === 'absent') {
            var index = wordArray.indexOf(guessArray[i]);
            if (index !== -1) {
                result[i] = 'present';
                wordArray[index] = null;
            }
        }
    }
    
    for (var i = 0; i < result.length; i++) {
        (function(index, status, letter) {
            setTimeout(function() {
                var tile = document.querySelector('.wordle-tile[data-row="' + self.currentRow + '"][data-col="' + index + '"]');
                if (tile) {
                    tile.classList.add(status);
                }
                
                var key = document.querySelector('.key[data-key="' + letter + '"]');
                if (key) {
                    self.keyboardState[letter] = status;
                    
                    if (status === 'correct') {
                        key.classList.remove('present', 'absent');
                        key.classList.add('correct');
                    } else if (status === 'present' && !key.classList.contains('correct')) {
                        key.classList.remove('absent');
                        key.classList.add('present');
                    } else if (status === 'absent' && !key.classList.contains('correct') && !key.classList.contains('present')) {
                        key.classList.add('absent');
                    }
                }
            }, index * 200);
        })(i, result[i], guessArray[i]);
    }
};

LoveWordle.prototype.shakeRow = function() {
    var row = document.querySelector('.wordle-row[data-row="' + this.currentRow + '"]');
    if (row) {
        row.classList.add('shake');
        setTimeout(function() {
            row.classList.remove('shake');
        }, 500);
    }
};

LoveWordle.prototype.getWordDescription = function() {
    if (wordHints[this.currentWord]) {
        return wordHints[this.currentWord];
    }
    
    var word = this.currentWord.toLowerCase();
    
    if (word.indexOf('love') !== -1 || word.indexOf('heart') !== -1) {
        return "Related to feelings of deep affection";
    } else if (word.indexOf('hope') !== -1 || word.indexOf('dream') !== -1) {
        return "Related to wishes and aspirations";
    } else if (word.indexOf('peace') !== -1 || word.indexOf('calm') !== -1) {
        return "Related to tranquility and serenity";
    } else if (word.indexOf('strong') !== -1 || word.indexOf('brave') !== -1) {
        return "Related to courage and strength";
    } else {
        return "A word connected to love or comfort";
    }
};

LoveWordle.prototype.showHint = function() {
    if (this.hintsUsed >= this.maxHints || this.gameOver) return;
    
    this.hintsUsed++;
    var hintsRemaining = this.maxHints - this.hintsUsed;
    
    var hint = '';
    
    switch (this.hintsUsed) {
        case 1:
            var description = this.getWordDescription();
            hint = '💡 ' + description;
            break;
        case 2:
            hint = '💡 The word starts with "' + this.currentWord[0] + '"';
            break;
        case 3:
            hint = '💡 The word ends with "' + this.currentWord[this.wordLength - 1] + '"';
            break;
    }
    
    if (hintsRemaining === 0) {
        hint += ' (No more hints)';
        var hintBtn = document.getElementById('hintBtn');
        if (hintBtn) {
            hintBtn.disabled = true;
            hintBtn.style.opacity = '0.5';
        }
    } else {
        hint += ' (' + hintsRemaining + ' hints left)';
    }
    
    if (this.wordleHints) {
        this.wordleHints.innerHTML = '<span class="hint-text">' + hint + '</span>';
    }
    this.saveGameState();
};

LoveWordle.prototype.showResult = function(won) {
    this.resultTitle.textContent = won ? '🎉 Wonderful! 🎉' : '💕 The word was... 💕';
    this.resultTitle.className = won ? 'win' : 'lose';
    this.resultWord.textContent = this.currentWord;
    this.resultMessage.textContent = this.currentMessage;
    this.wordleResult.classList.add('show');
    
    var streak = updateStreak();
    this.displayStreak();
    
    var today = new Date().toISOString().split('T')[0];
    localStorage.setItem('wordlePlayed_' + today, 'true');
    
    if (typeof ProfileManager !== 'undefined') {
        ProfileManager.incrementWordlesPlayed();
        ProfileManager.syncStreak();
        ProfileManager.updateProfileDisplay();
    }
};

LoveWordle.prototype.pauseGame = function() {
    this.saveGameState();
    this.wordleOverlay.classList.add('hidden');
    
    var mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.style.display = 'block';
    }
};

LoveWordle.prototype.saveGameState = function() {
    var today = new Date().toISOString().split('T')[0];
    
    var tiles = [];
    for (var i = 0; i <= this.currentRow; i++) {
        var rowTiles = [];
        for (var j = 0; j < this.wordLength; j++) {
            var tile = document.querySelector('.wordle-tile[data-row="' + i + '"][data-col="' + j + '"]');
            if (tile) {
                var status = '';
                if (tile.classList.contains('correct')) status = 'correct';
                else if (tile.classList.contains('present')) status = 'present';
                else if (tile.classList.contains('absent')) status = 'absent';
                
                rowTiles.push({
                    letter: tile.textContent,
                    status: status
                });
            }
        }
        tiles.push(rowTiles);
    }
    
    var state = {
        currentRow: this.currentRow,
        currentTile: this.currentTile,
        guesses: this.guesses,
        hintsUsed: this.hintsUsed,
        keyboardState: this.keyboardState,
        tiles: tiles,
        gameOver: this.gameOver
    };
    
    localStorage.setItem('wordleGameState_' + today, JSON.stringify(state));
};

LoveWordle.prototype.loadGameState = function() {
    var today = new Date().toISOString().split('T')[0];
    var saved = localStorage.getItem('wordleGameState_' + today);
    
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
};

LoveWordle.prototype.clearGameState = function() {
    var today = new Date().toISOString().split('T')[0];
    localStorage.removeItem('wordleGameState_' + today);
};

LoveWordle.prototype.restoreGameState = function(state) {
    if (state.gameOver) {
        return;
    }
    
    this.currentRow = state.currentRow;
    this.currentTile = state.currentTile;
    this.guesses = state.guesses || [];
    this.hintsUsed = state.hintsUsed || 0;
    this.keyboardState = state.keyboardState || {};
    
    if (state.tiles) {
        for (var rowIndex = 0; rowIndex < state.tiles.length; rowIndex++) {
            var row = state.tiles[rowIndex];
            for (var colIndex = 0; colIndex < row.length; colIndex++) {
                var tileData = row[colIndex];
                var tile = document.querySelector('.wordle-tile[data-row="' + rowIndex + '"][data-col="' + colIndex + '"]');
                if (tile && tileData.letter) {
                    tile.textContent = tileData.letter;
                    tile.classList.add('filled');
                    if (tileData.status) {
                        tile.classList.add(tileData.status);
                    }
                }
            }
        }
    }
    
    var self = this;
    Object.keys(this.keyboardState).forEach(function(letter) {
        var key = document.querySelector('.key[data-key="' + letter + '"]');
        if (key) {
            key.classList.add(self.keyboardState[letter]);
        }
    });
    
    if (this.hintsUsed >= this.maxHints) {
        var hintBtn = document.getElementById('hintBtn');
        if (hintBtn) {
            hintBtn.disabled = true;
            hintBtn.style.opacity = '0.5';
        }
    }
};

function getStreak() {
    var streak = parseInt(localStorage.getItem('wordleStreak') || '0');
    
    if (typeof ProfileManager !== 'undefined' && ProfileManager.profile && ProfileManager.profile.stats) {
        var profileStreak = ProfileManager.profile.stats.streak || 0;
        if (profileStreak > streak) {
            streak = profileStreak;
        }
    }
    
    return streak;
}

function getLastStreakDate() {
    return localStorage.getItem('wordleLastStreakDate') || '';
}

function updateStreak() {
    var today = new Date().toISOString().split('T')[0];
    var lastDate = getLastStreakDate();
    var streak = parseInt(localStorage.getItem('wordleStreak') || '0');
    
    if (lastDate === today) {
        return streak;
    }
    
    if (lastDate) {
        var lastDateObj = new Date(lastDate);
        var todayObj = new Date(today);
        var diffTime = todayObj - lastDateObj;
        var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            streak++;
        } else if (diffDays > 1) {
            streak = 1;
        }
    } else {
        streak = 1;
    }
    
    localStorage.setItem('wordleStreak', streak.toString());
    localStorage.setItem('wordleLastStreakDate', today);
    
    if (typeof ProfileManager !== 'undefined') {
        ProfileManager.setStreak(streak);
    }
    
    return streak;
}

function handleGlobalKeydown(e) {
    var wordleOverlay = document.getElementById('wordleOverlay');
    
    if (!wordleOverlay || wordleOverlay.classList.contains('hidden')) return;
    if (!currentWordleGame || currentWordleGame.gameOver) return;
    
    var wordleResult = document.getElementById('wordleResult');
    if (wordleResult && wordleResult.classList.contains('show')) return;
    
    if (e.key === 'Enter' || e.key === 'Backspace' || /^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
    }
    
    if (e.key === 'Enter') {
        currentWordleGame.handleKeyPress('ENTER');
    } else if (e.key === 'Backspace') {
        currentWordleGame.handleKeyPress('⌫');
    } else if (/^[a-zA-Z]$/.test(e.key)) {
        currentWordleGame.handleKeyPress(e.key.toUpperCase());
    }
}

function showWordleResultOnly(word, message) {
    var wordleOverlay = document.getElementById('wordleOverlay');
    var wordleResult = document.getElementById('wordleResult');
    var resultTitle = document.getElementById('resultTitle');
    var resultWord = document.getElementById('resultWord');
    var resultMessage = document.getElementById('resultMessage');
    
    var wordleBoard = document.getElementById('wordleBoard');
    if (wordleBoard) wordleBoard.style.display = 'none';
    
    var wordleKeyboard = document.getElementById('wordleKeyboard');
    if (wordleKeyboard) wordleKeyboard.style.display = 'none';
    
    var wordleControls = document.querySelector('.wordle-controls');
    if (wordleControls) wordleControls.style.display = 'none';
    
    var wordleHints = document.getElementById('wordleHints');
    if (wordleHints) wordleHints.style.display = 'none';
    
    var messagePreview = document.getElementById('wordleMessagePreview');
    if (messagePreview) messagePreview.style.display = 'none';
    
    var subtitle = document.querySelector('.wordle-subtitle');
    if (subtitle) subtitle.textContent = "Today's word was...";
    
    var streak = getStreak();
    resultTitle.textContent = "💕 Today's Love Word 💕";
    resultTitle.className = '';
    resultWord.textContent = word;
    resultMessage.innerHTML = message + '<br><br>🔥 Current streak: ' + streak + ' day' + (streak !== 1 ? 's' : '');
    
    wordleOverlay.classList.remove('hidden');
    wordleResult.classList.add('show');
}

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', handleGlobalKeydown);
    
    var continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            var wordleOverlay = document.getElementById('wordleOverlay');
            var mainContent = document.getElementById('mainContent');
            
            wordleOverlay.classList.add('hidden');
            mainContent.style.display = 'block';
            
            var wordleBoard = document.getElementById('wordleBoard');
            if (wordleBoard) wordleBoard.style.display = '';
            
            var wordleKeyboard = document.getElementById('wordleKeyboard');
            if (wordleKeyboard) wordleKeyboard.style.display = '';
            
            var wordleControls = document.querySelector('.wordle-controls');
            if (wordleControls) wordleControls.style.display = '';
            
            var wordleHints = document.getElementById('wordleHints');
            if (wordleHints) wordleHints.style.display = '';
            
            var messagePreview = document.getElementById('wordleMessagePreview');
            if (messagePreview) messagePreview.style.display = 'none';
            
            var subtitle = document.querySelector('.wordle-subtitle');
            if (subtitle) subtitle.textContent = 'Guess the word that describes the message below';
            
            var wordleResult = document.getElementById('wordleResult');
            if (wordleResult) wordleResult.classList.remove('show');
            
            var today = new Date().toISOString().split('T')[0];
            localStorage.setItem('wordlePlayed_' + today, 'true');
            
            if (typeof ProfileManager !== 'undefined') {
                ProfileManager.syncStreak();
                ProfileManager.updateProfileDisplay();
            }
        });
    }
    
    var replayBtn = document.getElementById('wordleReplayButton');
    if (replayBtn) {
        replayBtn.addEventListener('click', function() {
            WordleGame.show();
        });
    }
    
    setTimeout(function() {
        var today = new Date().toISOString().split('T')[0];
        var alreadyPlayed = localStorage.getItem('wordlePlayed_' + today);
        var mainContent = document.getElementById('mainContent');
        
        if (!alreadyPlayed && mainContent && mainContent.style.display !== 'none') {
            WordleGame.show();
        }
    }, 500);
});
