/** Open/close `<dialog class="project-modal">` from project cards. */
export function initProjectModals(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-project-modal-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project-modal-open');
      if (!projectId) return;
      const dialog = document.getElementById(`project-modal-${projectId}`);
      if (!(dialog instanceof HTMLDialogElement)) return;
      dialog.showModal();
      document.body.classList.add('project-modal-open');
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-project-modal-close]').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      if (!(dialog instanceof HTMLDialogElement)) return;
      dialog.close();
    });
  });

  document.querySelectorAll<HTMLDialogElement>('dialog.project-modal').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', () => {
      if (!document.querySelector('dialog.project-modal[open]')) {
        document.body.classList.remove('project-modal-open');
      }
    });

    dialog.addEventListener('cancel', () => {
      document.body.classList.remove('project-modal-open');
    });
  });
}
