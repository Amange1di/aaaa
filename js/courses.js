document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.data_btns button');
    const contents = document.querySelectorAll('.data_info_content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс со всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный класс нажатой кнопке
            button.classList.add('active');

            // Скрываем все контенты
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Показываем нужный контент
            const categoryId = button.getAttribute('data-category');
            const targetContent = document.getElementById(categoryId);
            targetContent.style.display = 'flex';
        });
    });
});

// Модальное окно
const modalButtons = document.querySelectorAll('.detailed');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('button');

modalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    });
});

function closeModal() {
    const content = modal.querySelector('.modal_content');
    content.style.transform = 'translateY(100%)';

    setTimeout(() => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        content.style.transform = '';
    }, 300);
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Обработчики для модального окна записи
const signupButtons = document.querySelectorAll('.signup');
const modalSign = document.querySelector('.modalSign');
const modalSignClose = document.querySelector('.modalSign_close');

signupButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalSign.style.display = 'flex';
        document.body.classList.add('modal-open');
    });
});

modalSignClose.addEventListener('click', () => {
    modalSign.style.display = 'none';
    document.body.classList.remove('modal-open');
});

// Закрытие по клику вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === modalSign) {
        modalSign.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});
