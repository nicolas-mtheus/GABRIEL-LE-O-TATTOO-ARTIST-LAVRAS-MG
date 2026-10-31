/**
 * Gabriel Leão Tattoo - Interatividade & Script de Orçamento WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // 2. Header shadow on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Portfolio Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.parentElement;
      const isActive = parent.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // 5. Interactive WhatsApp Quote Form
  const quoteForm = document.getElementById('tattooQuoteForm');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const phone = document.getElementById('clientPhone').value.trim();
      const style = document.getElementById('tattooStyle').value;
      const bodyPart = document.getElementById('bodyPart').value;
      const size = document.getElementById('approxSize').value;
      const firstTattoo = document.getElementById('isFirstTattoo').value;
      const idea = document.getElementById('tattooIdea').value.trim();

      const phoneNumber = '5537998424506'; // WhatsApp do Gabriel Leão

      let message = `*SOLICITAÇÃO DE ORÇAMENTO - GABRIEL LEÃO TATTOO*\n\n`;
      message += `👤 *Nome:* ${name}\n`;
      message += `📱 *Telefone/WhatsApp:* ${phone}\n`;
      message += `🎨 *Estilo Desejado:* ${style}\n`;
      message += `📍 *Local do Corpo:* ${bodyPart}\n`;
      message += `📐 *Tamanho Estimado:* ${size}\n`;
      message += `✨ *Primeira Tattoo?* ${firstTattoo}\n`;
      if (idea) {
        message += `💭 *Detalhes/Ideia:* ${idea}\n`;
      }
      message += `\n_Vim pela Landing Page e aguardo o retorno com os valores e disponibilidade de datas!_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
    });
  }
});
