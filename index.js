// ==UserScript==
// @name     НЕНАВИДЕТЬ!
// @version  1
// @grant    none
// @match	https://pikabu.ru/*
// ==/UserScript==

// обходит страницу каждые 4 секунды и ищет, что ненавидеть

setInterval(async () => {

// кликает на все минусы найденные на странице, посты и комменты
    [...document.querySelectorAll('.comment__rating-down:not(.comment__rating-down_active), .story__rating-down:not(.story__rating-down_active)')].forEach((minusButton) => minusButton.click());

    // ищет все эмоции постов и добавляем ЯРОСТИ!
    for (const postEmotionButton of document.querySelectorAll('.story__emotions.emotions')) {
        await (new Promise((resolve, reject) => {
            // открываем выбор эмоции
            postEmotionButton.click();
            setTimeout(() => {
                const angry = document.querySelector('.emotions__popup-item:not(.emotions__popup-item_active) .icon.icon--emotions__angry');
                // если есть невыбранная ярость - кликаем её!
                if (angry) {
                    angry.parentElement.click();
                } else {
                    postEmotionButton.click();
                }
                setTimeout(() => {
                    resolve();
                });
            }, 0);
        }))
    }
}, 4000);
