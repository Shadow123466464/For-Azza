function renderAvatar(containerId, config, size, animate) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var furColors = {
        orange: '#f4a460',
        brown: '#8B4513',
        black: '#2d2d2d',
        white: '#f5f5f5',
        gray: '#808080',
        cream: '#ffe4c4',
        golden: '#daa520',
        pink: '#ffb6c1',
        blue: '#87ceeb',
        purple: '#dda0dd'
    };

    var furColor = furColors[config.furColor] || furColors.orange;
    var innerEarColor = config.furColor === 'white' || config.furColor === 'cream' ? '#ffb6c1' : '#ffcccb';
    
    var sizeClass = '';
    if (size === 'mini') sizeClass = 'mini';
    else if (size === 'small') sizeClass = 'small';

    var avatar = document.createElement('div');
    avatar.className = 'animal-avatar ' + sizeClass;
    if (animate) {
        avatar.classList.add('animated');
    }

    var earsHTML = '';
    var muzzleHTML = '';
    var noseClass = config.animalType;
    var specialFeatures = '';

    switch (config.animalType) {
        case 'cat':
            earsHTML = '<div class="animal-ears cat">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle" style="background: ' + lightenColor(furColor, 30) + '"></div>';
            specialFeatures = '<div class="animal-whiskers">' +
                '<div class="whisker-group left">' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '</div>' +
                '<div class="whisker-group right">' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '</div>' +
                '</div>';
            break;
        case 'dog':
            earsHTML = '<div class="animal-ears dog">' +
                '<div class="ear left" style="background: ' + darkenColor(furColor, 20) + '"></div>' +
                '<div class="ear right" style="background: ' + darkenColor(furColor, 20) + '"></div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle" style="background: ' + lightenColor(furColor, 30) + '"></div>';
            break;
        case 'rabbit':
            earsHTML = '<div class="animal-ears rabbit">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle rabbit" style="background: ' + lightenColor(furColor, 30) + '"></div>';
            break;
        case 'bear':
            earsHTML = '<div class="animal-ears bear">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 15) + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 15) + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle bear" style="background: ' + lightenColor(furColor, 30) + '"></div>';
            break;
        case 'fox':
            earsHTML = '<div class="animal-ears fox">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + lightenColor(furColor, 30) + '"></div>' +
                '<div class="ear-tip" style="background: #2d2d2d"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + lightenColor(furColor, 30) + '"></div>' +
                '<div class="ear-tip" style="background: #2d2d2d"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle" style="background: ' + lightenColor(furColor, 40) + '"></div>';
            specialFeatures = '<div class="animal-whiskers">' +
                '<div class="whisker-group left">' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '</div>' +
                '<div class="whisker-group right">' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '<div class="whisker"></div>' +
                '</div>' +
                '</div>';
            break;
        case 'panda':
            earsHTML = '<div class="animal-ears panda">' +
                '<div class="ear left"></div>' +
                '<div class="ear right"></div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle panda" style="background: #f5f5f5"></div>';
            specialFeatures = '<div class="panda-eye-patches">' +
                '<div class="eye-patch left"></div>' +
                '<div class="eye-patch right"></div>' +
                '</div>';
            break;
        case 'lion':
            earsHTML = '<div class="animal-ears lion">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 15) + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 15) + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle lion" style="background: ' + lightenColor(furColor, 30) + '"></div>';
            specialFeatures = '<div class="lion-mane" style="background: ' + darkenColor(furColor, 20) + '"></div>';
            break;
        case 'wolf':
            earsHTML = '<div class="animal-ears wolf">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 20) + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + darkenColor(furColor, 20) + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle" style="background: ' + lightenColor(furColor, 25) + '"></div>';
            break;
        default:
            earsHTML = '<div class="animal-ears cat">' +
                '<div class="ear left" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '<div class="ear right" style="background: ' + furColor + '">' +
                '<div class="ear-inner" style="background: ' + innerEarColor + '"></div>' +
                '</div>' +
                '</div>';
            muzzleHTML = '<div class="face-muzzle" style="background: ' + lightenColor(furColor, 30) + '"></div>';
    }

    var glassesHTML = '';
    if (config.glasses && config.glasses !== 'none') {
        glassesHTML = '<div class="animal-glasses ' + config.glasses + '">' +
            '<div class="glasses-bridge"></div>' +
            '</div>';
    }

    var accessoryHTML = '';
    if (config.headAccessory && config.headAccessory !== 'none') {
        accessoryHTML = '<div class="animal-head-accessory ' + config.headAccessory + '"></div>';
    }

    var cheekHTML = '';
    if (config.cheekStyle && config.cheekStyle !== 'none') {
        switch (config.cheekStyle) {
            case 'blush':
                cheekHTML = '<div class="animal-blush-left"></div>' +
                    '<div class="animal-blush-right"></div>';
                avatar.classList.add('blushing');
                break;
            case 'freckles':
                cheekHTML = '<div class="animal-freckles"></div>';
                break;
            case 'whiskers':
                if (config.animalType !== 'cat' && config.animalType !== 'fox') {
                    cheekHTML = '<div class="animal-whiskers">' +
                        '<div class="whisker-group left">' +
                        '<div class="whisker"></div>' +
                        '<div class="whisker"></div>' +
                        '<div class="whisker"></div>' +
                        '</div>' +
                        '<div class="whisker-group right">' +
                        '<div class="whisker"></div>' +
                        '<div class="whisker"></div>' +
                        '<div class="whisker"></div>' +
                        '</div>' +
                        '</div>';
                }
                break;
        }
    }

    var eyelashesHTML = '';
    if (config.gender === 'girl') {
        eyelashesHTML = '<div class="animal-eyelashes left"></div>' +
            '<div class="animal-eyelashes right"></div>';
    }

    var faceColor = furColor;
    if (config.animalType === 'panda') {
        faceColor = '#f5f5f5';
    }

    var maneHTML = '';
    if (config.animalType === 'lion') {
        maneHTML = specialFeatures;
        specialFeatures = '';
    }

    avatar.innerHTML = '<div class="animal-head-container">' +
        maneHTML +
        earsHTML +
        accessoryHTML +
        '<div class="animal-face" style="background: ' + faceColor + '">' +
        (config.animalType === 'panda' ? specialFeatures : '') +
        muzzleHTML +
        '<div class="animal-eyes-container">' +
        '<div class="animal-eye">' +
        '<div class="animal-eye-pupil"></div>' +
        '<div class="animal-eye-lid" style="background: ' + faceColor + '"></div>' +
        '</div>' +
        '<div class="animal-eye">' +
        '<div class="animal-eye-pupil"></div>' +
        '<div class="animal-eye-lid" style="background: ' + faceColor + '"></div>' +
        '</div>' +
        '</div>' +
        eyelashesHTML +
        '<div class="animal-heart-eyes">' +
        '<span class="heart">❤️</span>' +
        '<span class="heart">❤️</span>' +
        '</div>' +
        '<div class="animal-sparkle-eyes">' +
        '<span class="sparkle">✨</span>' +
        '<span class="sparkle">✨</span>' +
        '</div>' +
        '<div class="animal-nose ' + noseClass + '"></div>' +
        '<div class="animal-mouth-container">' +
        '<div class="animal-mouth smile"></div>' +
        '</div>' +
        ((config.animalType === 'cat' || config.animalType === 'fox') ? specialFeatures : '') +
        cheekHTML +
        glassesHTML +
        '</div>' +
        '</div>' +
        '<div class="animal-body-container">' +
        '<div class="animal-neck" style="background: ' + furColor + '"></div>' +
        '<div class="animal-body ' + config.outfitStyle + ' ' + config.outfitColor + '"></div>' +
        '</div>';

    container.innerHTML = '';
    container.appendChild(avatar);

    if (animate) {
        startAvatarAnimations(avatar);
    }
}

function startAvatarAnimations(avatar) {
    function blink() {
        if (Math.random() > 0.5) {
            avatar.classList.add('blinking');
            setTimeout(function() {
                avatar.classList.remove('blinking');
            }, 150);
        }
        setTimeout(blink, 2000 + Math.random() * 2000);
    }
    
    function wiggleEars() {
        if (Math.random() > 0.6) {
            avatar.classList.add('ear-wiggle');
            setTimeout(function() {
                avatar.classList.remove('ear-wiggle');
            }, 500);
        }
        setTimeout(wiggleEars, 3000 + Math.random() * 3000);
    }
    
    setTimeout(blink, 1000);
    setTimeout(wiggleEars, 2000);
}

function lightenColor(color, percent) {
    if (color.startsWith('#')) {
        var num = parseInt(color.replace('#', ''), 16);
        var amt = Math.round(2.55 * percent);
        var R = Math.min(255, (num >> 16) + amt);
        var G = Math.min(255, (num >> 8 & 0x00FF) + amt);
        var B = Math.min(255, (num & 0x0000FF) + amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }
    return color;
}

function darkenColor(color, percent) {
    if (color.startsWith('#')) {
        var num = parseInt(color.replace('#', ''), 16);
        var amt = Math.round(2.55 * percent);
        var R = Math.max(0, (num >> 16) - amt);
        var G = Math.max(0, (num >> 8 & 0x00FF) - amt);
        var B = Math.max(0, (num & 0x0000FF) - amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }
    return color;
}

function checkIfAzza(firstName, lastName) {
    var first = (firstName || '').toLowerCase().trim();
    var last = (lastName || '').toLowerCase().trim();
    return first === 'azza' || (first === 'azza' && last === 'dahen');
}

function isChangingToAzza(oldFirst, oldLast, newFirst, newLast) {
    var wasAzza = checkIfAzza(oldFirst, oldLast);
    var isAzza = checkIfAzza(newFirst, newLast);
    return !wasAzza && isAzza;
}

function showSpecialAzzaPage(avatarConfig) {
    var overlay = document.getElementById('specialAzzaOverlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'specialAzzaOverlay';
        overlay.className = 'special-azza-overlay';
        
        overlay.innerHTML = '<div class="sparkles-bg" id="sparklesBg"></div>' +
            '<div class="flowers-container" id="flowersContainer"></div>' +
            '<div class="special-azza-content">' +
            '<div class="special-azza-avatar" id="azzaAvatarContainer"></div>' +
            '<h1 class="special-azza-title">Welcome, Azza! 💕</h1>' +
            '<div class="special-azza-hearts">' +
            '<span class="heart">💖</span>' +
            '<span class="heart">💕</span>' +
            '<span class="heart">💗</span>' +
            '<span class="heart">💕</span>' +
            '<span class="heart">💖</span>' +
            '</div>' +
            '<div class="special-azza-message">' +
            '<p>This entire page was created just for you. Every letter, every word, every animation - it\'s all a testament to how special you are.</p>' +
            '<p>You deserve all the love and happiness in the world. Never forget how amazing you are! ✨</p>' +
            '</div>' +
            '<button class="special-azza-close" id="closeAzzaPage">Enter Your Special Space 💕</button>' +
            '</div>';
        
        document.body.appendChild(overlay);
        
        document.getElementById('closeAzzaPage').addEventListener('click', function() {
            overlay.classList.add('hiding');
            setTimeout(function() {
                overlay.classList.remove('show', 'hiding');
                overlay.style.display = 'none';
            }, 500);
        });
    }
    
    overlay.style.display = 'flex';
    overlay.classList.add('show');
    
    setTimeout(function() {
        renderAvatar('azzaAvatarContainer', avatarConfig, 'normal', true);
        createFlowers(document.getElementById('flowersContainer'));
        createSparkles(document.getElementById('sparklesBg'));
    }, 100);
}

function createFlowers(container) {
    if (!container) return;
    container.innerHTML = '';
    
    var flowers = ['🌸', '🌺', '🌷', '💐', '🌹', '🏵️', '💮'];
    
    for (var i = 0; i < 30; i++) {
        var flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
        flower.style.animationDuration = (Math.random() * 5 + 5) + 's';
        flower.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(flower);
    }
}

function createSparkles(container) {
    if (!container) return;
    container.innerHTML = '';
    
    for (var i = 0; i < 50; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle-star';
        sparkle.textContent = '✨';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
        sparkle.style.animationDelay = (Math.random() * 3) + 's';
        container.appendChild(sparkle);
    }
}
