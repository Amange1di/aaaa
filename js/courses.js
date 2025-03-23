const buttons = document.querySelectorAll('.data_btns button');
const contents = document.querySelectorAll('.data_info_content');

function showContent(category) {
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(category).style.display = 'block';

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        showContent(button.dataset.category);
    });
});

showContent('english');

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
