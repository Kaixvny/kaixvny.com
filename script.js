const container = document.getElementById('container');
//SETTINGS
let popupMode = 'true';

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
        if (popupMode === 'true') {
        const popupName = 'About Me!!!';
        const popupFeatures = 'width=550,height=600,scrollbars=no';

        window.open(popupURL, popupName, popupFeatures);
    } else {
        window.open(popupURL, '_blank').focus();
    }
}

function openPopupSpotify() {
    const popupURL = 'spotify';
        if (popupMode === 'true') {
        const popupName = 'Spotify';
        const popupFeatures = 'width=460,height=195,scrollbars=no,left=280,top=210';

        window.open(popupURL, popupName, popupFeatures);
    } else {
        window.open(popupURL, '_blank').focus();
    }
}

function openPopupSocials() {
    const popupURL = 'socials/index.html';
    if (popupMode === 'true') {
        const popupWidth = 190;
        const popupHeight = 250; // WHAT THE FUCK
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
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

        const popupFeatures = (x, y) =>
            `width=${popupWidth},height=${popupHeight},scrollbars=no,resizable=no,left=${x},top=${y}`;

        const popups = [
            window.open(`${popupURL}?social=twitter`, 'social1', popupFeatures(positions.top.x, positions.top.y)),
            window.open(`${popupURL}?social=youtube`, 'social2', popupFeatures(positions.bottom.x, positions.bottom.y)),
            window.open(`${popupURL}?social=github`, 'social3', popupFeatures(positions.left.x, positions.left.y)),
            window.open(`${popupURL}?social=bluesky`, 'social4', popupFeatures(positions.right.x, positions.right.y))
        ];

        let startTime = Date.now();

        const floatInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const angle = (elapsedTime / 1000) * Math.PI;

            popups.forEach((popup, i) => {
                if (popup && !popup.closed) {
                    const sineOffset = Math.sin(angle + (i * Math.PI) / 2) * floatDistance;
                    const basePosition = positions[Object.keys(positions)[i]];
                    const newTop = Math.round(basePosition.y + sineOffset);
                    const newLeft = Math.round(basePosition.x);

                    try {
                        popup.resizeTo(popupWidth + 20, popupHeight + 20); // what the fuck
                        popup.moveTo(newLeft, newTop);
                    } catch (error) {
                        console.warn('FUCK');
                    }
                }
            });

            if (popups.some(popup => popup && popup.closed)) {
                popups.forEach(popup => {
                    if (popup && !popup.closed) popup.close();
                });
                clearInterval(floatInterval);
            }
        }, floatSpeed);
    } else {
        alert("no popup mode for this is not supported yet")
    }
}



function openPopupStart() {
    const popupURL = 'startmenu';
    if (popupMode === 'true') {
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
    } else {
        window.open(popupURL, '_blank').focus();
    }
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

function handleIconSecretClick() {
    setTimeout(checkPassword, 1);
}

async function checkPassword() {
    const password = prompt('> PASSWORD:');
    const correctPassword = 'HOME'; // kill your shelf

    if (password === correctPassword) {
        //SILLY SHIT
        const thump = new Audio('sounds/thesound.mp3');
        thump.play();
        const darkred = "#080000";
        const diamond = document.querySelector(".diamond-pattern");
        container.style.backgroundImage = "url('images/home.jpg')";
        diamond.style.backgroundImage = `
        linear-gradient(45deg, ${darkred} 25%, transparent 25%, transparent 75%, ${darkred} 75%, ${darkred}),
        linear-gradient(45deg, ${darkred} 25%, transparent 25%, transparent 75%, ${darkred} 75%, ${darkred})`

        const taskbar = document.querySelector(".taskbar");
        const start = document.querySelector(".start-button");
        const icon1 = document.querySelector(".icon1");
        taskbar.style.filter = "grayscale(1)";
        start.style.filter = "grayscale(1)";
        icon1.style.filter = "grayscale(1)";
        document.querySelectorAll("#\\32-1, #\\32, #\\33, #\\34, #\\35, #parappa, #secret").forEach(element => element.remove());
        icon1.style.backgroundImage = "url('images/console.png')";
        icon1.onclick = function () {
            playSelectSound();
            cmd();
        };
        const iconContainer = document.getElementById("1");
        const iconText = iconContainer.querySelector(".icon-text");
        iconText.textContent = "cmd.exe";

        const static = new Audio('sounds/static.mp3');
        static.loop = true;
        static.play();
        
        const leftSound = new Audio('sounds/mouseleft.mp3');
        const rightSound = new Audio('sounds/mouseright.mp3');
    
        let prevX = 0;
        let canPlay = true;
    
        const resetPlayAbility = () => {
          canPlay = true;
        };
    
        window.addEventListener('mousemove', (event) => {
          const currentX = event.clientX;
    
          if (canPlay) {
            if (currentX < prevX) {
              leftSound.play();
              console.log("left")
            } else if (currentX > prevX) {
              rightSound.play();
            }
            canPlay = false;
            setTimeout(resetPlayAbility, 200);
          }

          prevX = currentX;
        });

        container.style.boxShadow = '0 0 240px rgba(196, 196, 196, 0.4)'
    } else {
        alert('> WRONG PASSWORD');
    }
}

function cmd() {
    alert("come back later loser im not done")
}

//POPUPS

function handleAgree() {
    checkPopupPermission();
  }

  function handleClose() {
    popupMode = 'false';
    closePopup();
  }

  function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").remove();
  }

  document.getElementById("agree").addEventListener("click", handleAgree);
  document.getElementById("close").addEventListener("click", handleClose);


  function checkPopupPermission() {
    let popup;
    let popup2;
    try {
        popup = window.open('popupdebug/index.html', '_blank', 'width=100,height=100');
        popup2 = window.open('popupdebug/index.html', '_blank', 'width=100,height=100');

        if (popup && popup2) {
            setTimeout(() => {
            popup2.close();
            popup.close();
            console.log('enabled');
            popupMode = 'true';
            closePopup();
        }, 1000);
        } else {
            console.log('need to enable');
            popup.close(); //making sure its closed
            document.getElementById('popupmessage').innerHTML = "your browser should've just prompted you<br>with a <b>[ pop-up blocked ]</b> message around<br> your browser's toolbar!<br><br>please allow permissions then press the<br>check permissions button!";
            document.getElementById('agree').innerHTML = "check permissions"
            document.getElementById("close").remove();
        }
    } catch (e) {
        console.error('FUCK ERROR:', e);
    }
}
document.getElementById('settings').addEventListener('click', () => {
document.getElementById('overlay').style.display = 'block';
});