let lastScrollTop = 0;
        const popup = document.getElementById("popup");
        const btn = document.getElementById("toggleBtn");
        const closeBtn = document.getElementById("closeBtn");

        let bottomOffset = -50; // Начальная позиция (наполовину скрыт)
        let isVisible = false;  // Флаг для отслеживания состояния

        // Показать / скрыть блок при нажатии на кнопку
        btn.addEventListener("click", () => {
            if (!isVisible) {
                popup.classList.add("half-show");
                isVisible = true;
                bottomOffset = -50;
                popup.style.bottom = bottomOffset + "px";
            }
        });

        // Закрыть блок при нажатии на крестик
        closeBtn.addEventListener("click", () => {
            popup.classList.remove("half-show", "visible");
            isVisible = false;
        });

        // Обработчик скролла
        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (isVisible) {
                if (scrollTop < lastScrollTop) {
                    // Скролл вверх – поднимаем блок постепенно, но не выше 50px
                    bottomOffset += 5;
                    if (bottomOffset > 50) bottomOffset = 50;
                    popup.style.bottom = bottomOffset + "px";
                } else {
                    // Скролл вниз – опускаем обратно, но не ниже -50px
                    bottomOffset -= 5;
                    if (bottomOffset < -50) bottomOffset = -50;
                    popup.style.bottom = bottomOffset + "px";
                }
            }

            lastScrollTop = scrollTop;
        });