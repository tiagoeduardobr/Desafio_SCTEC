/**
 * BytePets - Scripts de Interatividade
 * Lida com o comportamento do menu mobile e validação do formulário.
 */

// Seletores principais
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const form = document.querySelector('[data-form]');
const feedback = document.querySelector('[data-form-feedback]');

// ==========================================
// Menu Mobile (Acessibilidade e Interação)
// ==========================================
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// ==========================================
// Validação de Formulário de Contato
// ==========================================

/**
 * Limpa os erros visuais de todos os campos do formulário.
 * @param {Array} fields - Lista de elementos (inputs, selects, textareas).
 */
const clearErrors = (fields) => {
  fields.forEach((field) => {
    field.classList.remove('is-invalid');
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
    const error = field.parentElement.querySelector('.form-error');
    if (error) error.textContent = '';
  });
};

const setError = (field, message) => {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');
  const error = field.parentElement.querySelector('.form-error');
  if (error) {
    error.textContent = message;
    if (error.id) field.setAttribute('aria-describedby', error.id);
  }
};

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = Array.from(form.querySelectorAll('input, select, textarea'));
    clearErrors(fields);

    let valid = true;

    const nome = form.nome;
    const email = form.email;
    const pet = form.pet;
    const servico = form.servico;
    const mensagem = form.mensagem;

    if (!nome.value.trim()) {
      setError(nome, 'Informe o nome do tutor.');
      valid = false;
    }

    if (!email.value.trim()) {
      setError(email, 'Informe um e-mail.');
      valid = false;
    } else if (!email.validity.valid) {
      setError(email, 'Informe um e-mail válido.');
      valid = false;
    }

    if (!pet.value.trim()) {
      setError(pet, 'Informe o nome do pet.');
      valid = false;
    }

    if (!servico.value) {
      setError(servico, 'Selecione um serviço.');
      valid = false;
    }

    if (!mensagem.value.trim()) {
      setError(mensagem, 'Escreva uma mensagem.');
      valid = false;
    }

    if (!valid) {
      feedback.textContent = 'Revise os campos destacados antes de enviar.';
      feedback.style.color = 'var(--danger)';
      return;
    }

    feedback.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
    feedback.style.color = 'var(--accent)';
    form.reset();
  });
}