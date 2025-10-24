document.addEventListener('DOMContentLoaded', () => {



	// --- АНІМАЦІЯ ХЕДЕРА ---
	const headerContainer = document.getElementById('about-head');
	const iconImages = [
		'img/lab4/free-icon-wrench-513743.png',
		'img/lab4/free-icon-tools-1077198.png',
		'img/lab4/free-icon-tire-12988450.png'
	];
	const animationInterval = 500;
	const animationDuration = 5000;

	function createFloatingIcon() {
		const logo = document.querySelector('.title-icon');
		let iconHeight = 40;
		if (logo) {
			iconHeight = logo.clientHeight * 0.3;
		}
		const icon = document.createElement('img');
		const randomSrc = iconImages[Math.floor(Math.random() * iconImages.length)];
		icon.src = randomSrc;
		icon.className = 'floating-icon';
		icon.style.height = `${iconHeight}px`;
		icon.style.width = 'auto';
		const randTop = Math.random() * (headerContainer.offsetHeight - iconHeight);
		const randLeft = Math.random() * (headerContainer.offsetWidth - (iconHeight * 1.2)); // * 1.2 щоб не вилазило за правий край
		icon.style.top = `${randTop}px`;
		icon.style.left = `${randLeft}px`;
		headerContainer.appendChild(icon);
		setTimeout(() => {
			icon.remove();
		}, animationDuration);
	}
	function startHeaderAnimation() {
		createFloatingIcon();
		setInterval(createFloatingIcon, animationInterval);
	}
	if (headerContainer) {
		startHeaderAnimation();
	}

	// --- АНІМАЦІЯ ТЕКСТУ СЕРВІСІВ ---
	const allTriggers = document.querySelectorAll('.details-trigger');
	allTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			trigger.classList.toggle('active');
			if (trigger.classList.contains('active')) {
				trigger.textContent = 'Згорнути';
			} else {
				trigger.textContent = 'Детальніше';
			}
		});
	});

	// --- АНІМАЦІЯ ФЛІП-КАРТОК ---
	const allFlipCards = document.querySelectorAll('.flip-card');
	allFlipCards.forEach(card => {
		const cardInner = card.querySelector('.flip-card-inner');
		if (cardInner) {
			card.addEventListener('mouseenter', () => {
				cardInner.classList.add('is-flipped');
			});
			card.addEventListener('mouseleave', () => {
				cardInner.classList.remove('is-flipped');
			});
		}
	});

	// --- TOOLTIP НА СТОРІНЦІ ЗВОРОТНОГО ЗВ'ЯЗКУ ---
	const detailsTextarea = document.getElementById('details');
	const detailsWrapper = document.querySelector('.textarea-wrapper');
	const detailsTooltip = detailsWrapper ? detailsWrapper.querySelector('.tooltip-text') : null;
	if (detailsTextarea && detailsTooltip) {
		detailsTextarea.addEventListener('mouseenter', () => {
			detailsTextarea.classList.add('is-hovered');
			detailsTooltip.classList.add('is-active');
		});
		detailsTextarea.addEventListener('mouseleave', () => {
			detailsTextarea.classList.remove('is-hovered');
			detailsTooltip.classList.remove('is-active');
		});
	}

	// --- БУРГЕР-МЕНЮ ---
	const burger = document.getElementById('burger');
	const navLinks = document.querySelector('.main-menu');

	if (burger && navLinks) {
		function toggleMenu() {
			navLinks.classList.toggle('active');
			burger.classList.toggle('active');
		}

		function closeMenuOnClickOutside(event) {
			if (navLinks.classList.contains('active')) {
				const isClickInsideMenu = navLinks.contains(event.target);
				const isClickOnBurger = burger.contains(event.target);
				if (!isClickInsideMenu && !isClickOnBurger) {
					navLinks.classList.remove('active');
					burger.classList.remove('active');
				}
			}
		}

		burger.addEventListener('click', toggleMenu);
		document.addEventListener('click', closeMenuOnClickOutside);
	}

});