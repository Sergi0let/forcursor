// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
	// Initialize all functionality
	initMobileMenu();
	initRedirectToContacts();
	initRedirectToContactsNested();
	initCurrentYear();
	console.log('DOMContentLoaded');
});

function initRedirectToContacts() {
	const redirectToContacts = document.querySelectorAll('.redirect-to-contacts');
	if (redirectToContacts) {
		redirectToContacts.forEach((redirectToContact) => {
			redirectToContact.addEventListener('click', function () {
				window.location.href = './contacts/';
			});
		});
	}
}

function initRedirectToContactsNested() {
	const redirectToContacts = document.querySelectorAll(
		'.redirect-to-contacts-nested'
	);
	if (redirectToContacts) {
		redirectToContacts.forEach((redirectToContact) => {
			redirectToContact.addEventListener('click', function () {
				window.location.href = '../contacts/';
			});
		});
	}
}

// Mobile Menu Toggle
function initMobileMenu() {
	const mobileToggleOpen = document.querySelector(
		'.uthr-mobile-menu-toggle .toggle'
	);
	const mobileToggleClose = document.querySelector(
		'.uthr-mobile-menu-close .toggle'
	);
	const nav = document.querySelector('#uthr-site-main-mobile-menu');

	if (!mobileToggleOpen || !mobileToggleClose || !nav) {
		console.warn('Mobile menu elements not found');
		return;
	}

	const menuElements = nav.querySelectorAll('.menu-link.main-menu-link');

	console.log('Mobile menu initialized:', {
		mobileToggleOpen,
		mobileToggleClose,
		nav,
		menuElementsCount: menuElements.length,
		menuElements: menuElements,
	});

	// Function to open mobile menu
	function openMobileMenu() {
		document.body.classList.add('mobile-menu-open');
		document.body.style.overflow = 'hidden';
		nav.style.transform = 'translateX(0)';
	}

	// Function to close mobile menu
	function closeMobileMenu() {
		document.body.classList.remove('mobile-menu-open');
		document.body.style.overflow = '';
		nav.style.transform = 'translateX(100%)';
	}

	// Event listener for opening menu
	mobileToggleOpen.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		openMobileMenu();
	});

	// Event listener for closing menu
	mobileToggleClose.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		closeMobileMenu();
	});

	menuElements.forEach((element, index) => {
		console.log(`Adding click listener to menu element ${index}:`, element);
		element.addEventListener('click', function (e) {
			console.log('menu element clicked:', this);
			e.preventDefault();
			e.stopPropagation();
			closeMobileMenu();
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', function (e) {
		if (
			document.body.classList.contains('mobile-menu-open') &&
			!nav.contains(e.target) &&
			!mobileToggleOpen.contains(e.target)
		) {
			closeMobileMenu();
		}
	});

	// Close menu on escape key
	document.addEventListener('keydown', function (e) {
		if (
			e.key === 'Escape' &&
			document.body.classList.contains('mobile-menu-open')
		) {
			closeMobileMenu();
		}
	});
}

function initCurrentYear() {
	const currentYears = document.querySelectorAll('.current-year');
	if (!currentYears) {
		return;
	}
	currentYears.forEach((year) => {
		year.textContent = ` ${new Date().getFullYear()} `;
	});
}

// Smooth Scrolling for Anchor Links
// function initSmoothScrolling() {
// 	const links = document.querySelectorAll('a[href^="#"]');

// 	links.forEach((link) => {
// 		link.addEventListener('click', function (e) {
// 			e.preventDefault();

// 			const targetId = this.getAttribute('href');
// 			const targetElement = document.querySelector(targetId);

// 			if (targetElement) {
// 				const headerHeight = document.querySelector('.header').offsetHeight;
// 				const targetPosition = targetElement.offsetTop - headerHeight - 20;

// 				window.scrollTo({
// 					top: targetPosition,
// 					behavior: 'smooth',
// 				});
// 			}
// 		});
// 	});
// }

// Header Scroll Effect
// function initHeaderScroll() {
// 	const header = document.querySelector('.header');
// 	let lastScroll = 0;

// 	if (header) {
// 		window.addEventListener('scroll', function () {
// 			const currentScroll = window.pageYOffset;

// 			// Add/remove scrolled class
// 			if (currentScroll > 100) {
// 				header.classList.add('scrolled');
// 			} else {
// 				header.classList.remove('scrolled');
// 			}

// 			// Hide/show header on scroll
// 			if (currentScroll > lastScroll && currentScroll > 500) {
// 				header.style.transform = 'translateY(-100%)';
// 			} else {
// 				header.style.transform = 'translateY(0)';
// 			}

// 			lastScroll = currentScroll;
// 		});
// 	}
// }

// Intersection Observer for Animations
// function initAnimations() {
// 	const observerOptions = {
// 		threshold: 0.1,
// 		rootMargin: '0px 0px -50px 0px',
// 	};

// 	const observer = new IntersectionObserver(function (entries) {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				entry.target.classList.add('animate-in');
// 			}
// 		});
// 	}, observerOptions);

// 	// Elements to animate
// 	const animateElements = document.querySelectorAll(`
//         .section-title,
//         .hero__text,
//         .hero__visual,
//         .feature,
//         .skill-card,
//         .comparison__item,
//         .benefit-card
//     `);

// 	animateElements.forEach((el) => {
// 		el.classList.add('animate-element');
// 		observer.observe(el);
// 	});
// }

// CTA Button Actions
// function initCTAButtons() {
// 	const ctaButtons = document.querySelectorAll(`
//         .cta-btn,
//         .header__cta-btn
//     `);

// 	ctaButtons.forEach((button) => {
// 		button.addEventListener('click', function (e) {
// 			e.preventDefault();

// 			// Add click animation
// 			button.style.transform = 'scale(0.95)';
// 			setTimeout(() => {
// 				button.style.transform = '';
// 			}, 150);

// 			// Show modal or redirect to course page
// 			showCourseModal();
// 		});
// 	});
// }

// Course Registration Modal
// function showCourseModal() {
// 	// Create modal if it doesn't exist
// 	let modal = document.querySelector('.course-modal');

// 	if (!modal) {
// 		modal = createCourseModal();
// 		document.body.appendChild(modal);
// 	}

// 	modal.classList.add('active');
// 	document.body.style.overflow = 'hidden';

// 	// Close modal functionality
// 	const closeBtn = modal.querySelector('.modal__close');
// 	const modalOverlay = modal.querySelector('.modal__overlay');

// 	function closeModal() {
// 		modal.classList.remove('active');
// 		document.body.style.overflow = '';
// 	}

// 	closeBtn.addEventListener('click', closeModal);
// 	modalOverlay.addEventListener('click', closeModal);

// 	// Close on Escape key
// 	document.addEventListener('keydown', function (e) {
// 		if (e.key === 'Escape' && modal.classList.contains('active')) {
// 			closeModal();
// 		}
// 	});
// }

// function createCourseModal() {
// 	const modal = document.createElement('div');
// 	modal.className = 'course-modal';
// 	modal.innerHTML = `
//         <div class="modal__overlay"></div>
//         <div class="modal__content">
//             <button class="modal__close">&times;</button>
//             <div class="modal__header">
//                 <h2>Записаться на курс "5 DAYS 2 PROFIT"</h2>
//                 <p>Заполните форму и мы свяжемся с вами в ближайшее время</p>
//             </div>
//             <form class="modal__form" id="courseForm">
//                 <div class="form__group">
//                     <label for="name">Ваше имя *</label>
//                     <input type="text" id="name" name="name" required>
//                 </div>
//                 <div class="form__group">
//                     <label for="email">Email *</label>
//                     <input type="email" id="email" name="email" required>
//                 </div>
//                 <div class="form__group">
//                     <label for="phone">Телефон *</label>
//                     <input type="tel" id="phone" name="phone" required>
//                 </div>
//                 <div class="form__group">
//                     <label for="experience">Ваш опыт в социальных сетях</label>
//                     <select id="experience" name="experience">
//                         <option value="">Выберите уровень</option>
//                         <option value="beginner">Начинающий</option>
//                         <option value="intermediate">Есть опыт</option>
//                         <option value="advanced">Продвинутый</option>
//                     </select>
//                 </div>
//                 <div class="form__group">
//                     <label for="goals">Ваши цели (необязательно)</label>
//                     <textarea id="goals" name="goals" placeholder="Расскажите о ваших целях в бизнесе"></textarea>
//                 </div>
//                 <button type="submit" class="cta-btn cta-btn--primary cta-btn--large">
//                     Записаться на курс
//                 </button>
//             </form>
//         </div>
//     `;

// 	// Add modal styles
// 	addModalStyles();

// 	// Handle form submission
// 	const form = modal.querySelector('#courseForm');
// 	form.addEventListener('submit', handleFormSubmission);

// 	return modal;
// }

// function addModalStyles() {
// 	const style = document.createElement('style');
// 	style.textContent = `
//         .course-modal {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             z-index: 10000;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//         }

//         .course-modal.active {
//             opacity: 1;
//             visibility: visible;
//         }

//         .modal__overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 0, 0, 0.8);
//             backdrop-filter: blur(5px);
//         }

//         .modal__content {
//             position: relative;
//             background: white;
//             border-radius: 20px;
//             padding: 3rem;
//             max-width: 500px;
//             width: 90%;
//             max-height: 90vh;
//             overflow-y: auto;
//             transform: scale(0.7);
//             transition: transform 0.3s ease;
//         }

//         .course-modal.active .modal__content {
//             transform: scale(1);
//         }

//         .modal__close {
//             position: absolute;
//             top: 1rem;
//             right: 1rem;
//             background: none;
//             border: none;
//             font-size: 2rem;
//             cursor: pointer;
//             color: #999;
//             transition: color 0.3s ease;
//         }

//         .modal__close:hover {
//             color: #333;
//         }

//         .modal__header {
//             text-align: center;
//             margin-bottom: 2rem;
//         }

//         .modal__header h2 {
//             font-size: 1.8rem;
//             margin-bottom: 0.5rem;
//             color: #333;
//         }

//         .modal__header p {
//             color: #666;
//         }

//         .form__group {
//             margin-bottom: 1.5rem;
//         }

//         .form__group label {
//             display: block;
//             margin-bottom: 0.5rem;
//             font-weight: 600;
//             color: #333;
//         }

//         .form__group input,
//         .form__group select,
//         .form__group textarea {
//             width: 100%;
//             padding: 12px 15px;
//             border: 2px solid #e9ecef;
//             border-radius: 10px;
//             font-size: 1rem;
//             transition: border-color 0.3s ease;
//         }

//         .form__group input:focus,
//         .form__group select:focus,
//         .form__group textarea:focus {
//             outline: none;
//             border-color: #4facfe;
//         }

//         .form__group textarea {
//             resize: vertical;
//             min-height: 100px;
//         }

//         @media (max-width: 768px) {
//             .modal__content {
//                 padding: 2rem;
//                 margin: 1rem;
//             }
//         }
//     `;

// 	if (!document.querySelector('#modal-styles')) {
// 		style.id = 'modal-styles';
// 		document.head.appendChild(style);
// 	}
// }

// function handleFormSubmission(e) {
// 	e.preventDefault();

// 	const form = e.target;
// 	const formData = new FormData(form);
// 	const data = Object.fromEntries(formData);

// 	// Show loading state
// 	const submitButton = form.querySelector('button[type="submit"]');
// 	const originalText = submitButton.textContent;
// 	submitButton.textContent = 'Отправляем...';
// 	submitButton.disabled = true;

// 	// Simulate form submission (replace with actual API call)
// 	setTimeout(() => {
// 		// Show success message
// 		showSuccessMessage();

// 		// Reset form
// 		form.reset();

// 		// Close modal
// 		const modal = document.querySelector('.course-modal');
// 		modal.classList.remove('active');
// 		document.body.style.overflow = '';

// 		// Reset button
// 		submitButton.textContent = originalText;
// 		submitButton.disabled = false;

// 		console.log('Form submitted:', data);
// 	}, 2000);
// }

// function showSuccessMessage() {
// 	const message = document.createElement('div');
// 	message.className = 'success-message';
// 	message.innerHTML = `
//         <div class="success-message__content">
//             <div class="success-message__icon">✓</div>
//             <h3>Спасибо за регистрацию!</h3>
//             <p>Мы свяжемся с вами в ближайшее время</p>
//         </div>
//     `;

// 	// Add success message styles
// 	const style = document.createElement('style');
// 	style.textContent = `
//         .success-message {
//             position: fixed;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             background: white;
//             padding: 2rem;
//             border-radius: 15px;
//             box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//             z-index: 10001;
//             text-align: center;
//             animation: successSlideIn 0.5s ease-out;
//         }

//         .success-message__icon {
//             width: 60px;
//             height: 60px;
//             background: #4facfe;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin: 0 auto 1rem;
//             color: white;
//             font-size: 2rem;
//             font-weight: bold;
//         }

//         @keyframes successSlideIn {
//             from {
//                 opacity: 0;
//                 transform: translate(-50%, -50%) scale(0.7);
//             }
//             to {
//                 opacity: 1;
//                 transform: translate(-50%, -50%) scale(1);
//             }
//         }
//     `;

// 	document.head.appendChild(style);
// 	document.body.appendChild(message);

// 	// Remove message after 3 seconds
// 	setTimeout(() => {
// 		message.remove();
// 		style.remove();
// 	}, 3000);
// }

// // Add CSS for animations
// const animationStyles = document.createElement('style');
// animationStyles.textContent = `
//     .animate-element {
//         opacity: 0;
//         transform: translateY(30px);
//         transition: all 0.8s ease-out;
//     }

//     .animate-element.animate-in {
//         opacity: 1;
//         transform: translateY(0);
//     }

//     .header.scrolled {
//         background: rgba(255, 255, 255, 0.95);
//         box-shadow: 0 2px 30px rgba(0, 0, 0, 0.15);
//     }

//     @media (max-width: 768px) {
//         .header__nav {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             right: 0;
//             background: white;
//             box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
//             transform: translateY(-100%);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//         }

//         .header__nav.active {
//             transform: translateY(0);
//             opacity: 1;
//             visibility: visible;
//         }

//         .nav__list {
//             flex-direction: column;
//             padding: 2rem;
//             gap: 1rem;
//         }

//         .nav__link {
//             font-size: 1.1rem;
//             padding: 0.5rem 0;
//         }
//     }
// `;

// document.head.appendChild(animationStyles);

// Lazy loading for images
// function initLazyLoading() {
// 	const images = document.querySelectorAll('img[data-src]');

// 	const imageObserver = new IntersectionObserver((entries, observer) => {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				const img = entry.target;
// 				img.src = img.dataset.src;
// 				img.classList.remove('lazy');
// 				imageObserver.unobserve(img);
// 			}
// 		});
// 	});

// 	images.forEach((img) => imageObserver.observe(img));
// }

// Performance optimization
// window.addEventListener('load', function () {
// 	initLazyLoading();

// 	// Preload critical images
// 	const criticalImages = [
// 		'assets/images/logo.png',
// 		'assets/images/website-showcase.png',
// 	];

// 	criticalImages.forEach((src) => {
// 		const link = document.createElement('link');
// 		link.rel = 'preload';
// 		link.as = 'image';
// 		link.href = src;
// 		document.head.appendChild(link);
// 	});
// });

// Error handling
// window.addEventListener('error', function (e) {
// 	console.error('JavaScript error:', e.error);
// });

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		// Uncomment when you have a service worker
		// navigator.serviceWorker.register('/sw.js');
	});
}
