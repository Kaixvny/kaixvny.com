const container = document.getElementById('container');
const initialBackgroundImage = container.style.backgroundImage;

function openParappa() {
    window.location.href = "https://parappa.kaixvny.com/";
}

document.addEventListener("click", function (event) {
    if (
        !event.target.classList.contains('icon') &&
        !event.target.classList.contains('iconrow2') &&
        !event.target.classList.contains('iconsecret')
    ) {
        const clickSound = document.getElementById("clickSound");
        clickSound.play();
    }
});

function playSelectSound() {
    const selectSound = document.getElementById('selectSound');
    selectSound.play();
}

const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 0.1;

function openPopupAboutMe() {
    const popupURL = 'aboutme';
    const popupName = 'About Me!!!';
    const popupFeatures = 'width=550,height=600,scrollbars=no';

    window.open(popupURL, popupName, popupFeatures);
}

function openPopupSpotify() {
    const popupURL = 'spotify';
    const popupName = 'Spotify';
    const popupFeatures = 'width=460,height=195,scrollbars=no,left=280,top=210';

    window.open(popupURL, popupName, popupFeatures);
}

function openPopupSocials() {
    const popupURL = 'socials/index.html';
    const popupFeatures = 'width=195,height=195,scrollbars=no';
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const popupWidth = 195;
    const popupHeight = 195;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;
    const offsetPos = 150;
    const floatDistance = 5;
    const floatSpeed = 20;

    const positions = {
        top: { x: centerX - popupWidth / 2, y: centerY - popupHeight - offsetPos },
        bottom: { x: centerX - popupWidth / 2, y: centerY + offsetPos },
        left: { x: centerX - popupWidth - offsetPos, y: centerY - popupHeight / 2 },
        right: { x: centerX + offsetPos, y: centerY - popupHeight / 2 }
    };

    const popups = [
        window.open(`${popupURL}?social=twitter`, 'social1', `${popupFeatures},left=${positions.top.x},top=${positions.top.y}`),
        window.open(`${popupURL}?social=youtube`, 'social2', `${popupFeatures},left=${positions.bottom.x},top=${positions.bottom.y}`),
        window.open(`${popupURL}?social=github`, 'social3', `${popupFeatures},left=${positions.left.x},top=${positions.left.y}`),
        window.open(`${popupURL}?social=bluesky`, 'social4', `${popupFeatures},left=${positions.right.x},top=${positions.right.y}`)
    ];

    let startTime = Date.now();

    const floatInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const angle = (elapsedTime / 1000) * Math.PI;

        popups.forEach((popup, i) => {
            if (popup && !popup.closed) {
                const sineOffset = Math.sin(angle + (i * Math.PI) / 2) * floatDistance;
                const newTop = positions[Object.keys(positions)[i]].y + sineOffset;
                const newLeft = positions[Object.keys(positions)[i]].x;

                popup.moveTo(newLeft, newTop);
            }
        });

        if (popups.some(popup => popup && popup.closed)) {
            popups.forEach(popup => {
                if (popup && !popup.closed) popup.close();
            });
            clearInterval(floatInterval);
        }
    }, floatSpeed);
}

function openPopupStart() {
    const popupURL = 'startmenu';
    const popupName = 'start menu';
    const popupFeatures = 'width=380,height=478,scrollbars=no';

    const startPopupWindow = window.open(popupURL, popupName, popupFeatures);
    document.getElementById('start-button').style.backgroundImage = 'url("images/startclick.png")';

    const checkPopupClosed = setInterval(() => {
        if (startPopupWindow.closed) {
            document.getElementById('start-button').style.backgroundImage = 'url("images/start.png")';
            clearInterval(checkPopupClosed);
        }
    }, 1000);
}

function openRandomLink() {
    const links = [
        "trash/amelia.mp3",
        "trash/average kaixvny song.mp3",
        "trash/FOX SZN ILY.mp3",
        "trash/gave bro a perc and told him it was a smartie.mp3",
        "trash/in a far away universe.mp3",
        "trash/simon cowel.mp3",
        "trash/VITAL.mp3",
        "trash/VOCALS MISSING.mp3",
        "trash/whatsapp.html",
        "trash/donkeykong"
    ];

    const randomIndex = Math.floor(Math.random() * links.length);
    window.location.href = links[randomIndex];
}

function changeContainerImage() {
    container.style.backgroundImage = "url('images/home.jpg')";
}

function handleIconSecretClick() {
    changeContainerImage();
    setTimeout(checkPassword, 1);
}

async function checkPassword() {
    const password = prompt('Enter password:');
    const correctPassword = 'HOME';

    if (password === correctPassword) {
        alert('woohoo');
    } else {
        alert('denied.');
        container.style.backgroundImage = initialBackgroundImage;
    }
}
