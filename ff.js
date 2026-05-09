
// --- Data ---
const skillsData = [
  {
    id: 1,
    name: 'Python & Data Science',
    category: 'tech',
    description: 'Learn Python programming, pandas, and data visualization from scratch to advanced level.',
    teacher: 'Sarah Chen',
    role: 'Senior Data Engineer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'UI/UX Design',
    rating: 4.9,
    reviews: 47
  },
  {
    id: 2,
    name: 'UI/UX Design',
    category: 'design',
    description: 'Master Figma, design systems, user research, and modern interface design principles.',
    teacher: 'Marcus Rivera',
    role: 'Lead Product Designer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Python Programming',
    rating: 4.8,
    reviews: 32
  },
  {
    id: 3,
    name: 'Digital Marketing',
    category: 'business',
    description: 'SEO, content strategy, social media growth, and paid advertising fundamentals.',
    teacher: 'Aisha Patel',
    role: 'Growth Marketing Lead',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Web Development',
    rating: 4.7,
    reviews: 28
  },
  {
    id: 4,
    name: 'Photography',
    category: 'creative',
    description: 'Composition, lighting, post-processing in Lightroom, and building a photography portfolio.',
    teacher: 'James Okafor',
    role: 'Professional Photographer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Video Editing',
    rating: 4.9,
    reviews: 51
  },
  {
    id: 5,
    name: 'React Development',
    category: 'tech',
    description: 'Build modern web apps with React, hooks, state management, and component architecture.',
    teacher: 'Emily Zhang',
    role: 'Frontend Architect',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Graphic Design',
    rating: 4.8,
    reviews: 39
  },
  {
    id: 6,
    name: 'Yoga & Mindfulness',
    category: 'lifestyle',
    description: 'Daily yoga practice, meditation techniques, and stress management for busy professionals.',
    teacher: 'Lina Morales',
    role: 'Certified Yoga Instructor',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Business Strategy',
    rating: 5.0,
    reviews: 63
  },
  {
    id: 7,
    name: 'Illustration & Drawing',
    category: 'creative',
    description: 'Digital illustration techniques, character design, and building a creative portfolio.',
    teacher: 'Tom Kowalski',
    role: 'Freelance Illustrator',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: '3D Modeling',
    rating: 4.6,
    reviews: 22
  },
  {
    id: 8,
    name: 'Business Strategy',
    category: 'business',
    description: 'Market analysis, competitive positioning, business model canvas, and growth frameworks.',
    teacher: 'David Kim',
    role: 'Strategy Consultant',
    avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Data Analysis',
    rating: 4.8,
    reviews: 35
  },
  {
    id: 9,
    name: 'Motion Graphics',
    category: 'design',
    description: 'After Effects animations, motion design principles, and creating engaging video content.',
    teacher: 'Nina Johansson',
    role: 'Motion Designer',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    wants: 'Photography',
    rating: 4.7,
    reviews: 19
  }
]

const testimonialsData = [
  {
    name: 'Alex Thompson',
    role: 'Marketing Manager turned Developer',
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    swap: 'Marketing for Coding',
    quote: 'I taught marketing strategy and learned JavaScript in return. Within 6 months, I landed my first developer role. SkillSwap changed my career trajectory completely.'
  },
  {
    name: 'Priya Sharma',
    role: 'Graphic Designer & Yoga Enthusiast',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    swap: 'Design for Yoga',
    quote: 'I swapped logo design lessons for yoga instruction. Not only did I get healthier, but my design work improved from the mindfulness practice. A win-win exchange.'
  },
  {
    name: 'Carlos Mendez',
    role: 'Chef & Amateur Photographer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    swap: 'Cooking for Photography',
    quote: 'I taught cooking techniques and learned food photography. Now I run a successful food blog combining both skills. SkillSwap made it possible without spending a dime.'
  },
  {
    name: 'Yuki Tanaka',
    role: 'Music Teacher & App Developer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    swap: 'Piano for App Development',
    quote: 'As a music teacher, I never thought I could build an app. After swapping piano lessons for coding mentorship, I launched my own music education app.'
  }
]

const faqData = [
  {
    question: 'How does skill swapping work?',
    answer: 'Skill swapping is simple: you list skills you can teach, browse skills others offer, and propose a swap. When both parties agree, you schedule sessions and exchange knowledge directly. No money changes hands.'
  },
  {
    question: 'Is SkillSwap really free?',
    answer: 'Yes, completely free. We believe knowledge should be accessible to everyone. There are no hidden fees, premium tiers, or subscription costs. Your expertise is your currency.'
  },
  {
    question: 'How do you ensure quality and safety?',
    answer: 'Every member goes through profile verification. We have a review system where swappers rate each other after sessions. Our trust score system helps you find reliable partners, and our support team is always available.'
  },
  {
    question: 'What if my skill partner and I are in different time zones?',
    answer: 'SkillSwap supports both live and async learning. You can schedule live video sessions at overlapping times, or exchange recorded lessons, assignments, and feedback on your own schedule.'
  },
  {
    question: 'How long does a typical skill swap last?',
    answer: 'It depends on the complexity of the skills and your goals. Some swaps are a few sessions, others last months. You and your partner decide the scope and timeline together.'
  },
  {
    question: 'Can I swap multiple skills at once?',
    answer: 'Absolutely. Many members teach one skill while learning another, and some have multiple active swaps. Your profile can list as many skills as you want to offer or learn.'
  }
]

// --- DOM Elements ---
const navbar = document.getElementById('navbar')
const mobileToggle = document.getElementById('mobileToggle')
const mobileMenu = document.getElementById('mobileMenu')
const skillsGrid = document.getElementById('skillsGrid')
const testimonialsTrack = document.getElementById('testimonialsTrack')
const carouselDots = document.getElementById('carouselDots')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const faqList = document.getElementById('faqList')
const modalOverlay = document.getElementById('modalOverlay')
const modalContent = document.getElementById('modalContent')
const modalClose = document.getElementById('modalClose')

// --- Navbar Scroll Effect ---
let lastScroll = 0
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY
  if (scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
  lastScroll = scrollY
})

// --- Mobile Menu ---
mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : ''
})

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active')
    mobileMenu.classList.remove('active')
    document.body.style.overflow = ''
  })
})

// --- Scroll Animations ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))

// --- Counter Animation ---
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number')
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target)
    const duration = 2000
    const startTime = performance.now()

    function update(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)

      if (target >= 1000) {
        counter.textContent = (current / 1000).toFixed(current >= 10000 ? 1 : 1) + 'K+'
      } else {
        counter.textContent = current + (target === 96 ? '%' : '+')
      }

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  })
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters()
      statsObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.5 })

const heroStats = document.querySelector('.hero-stats')
if (heroStats) statsObserver.observe(heroStats)

// --- Render Skills ---
function renderSkills(filter = 'all') {
  const filtered = filter === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === filter)

  skillsGrid.innerHTML = filtered.map(skill => `
    <div class="skill-card animate-on-scroll visible" data-category="${skill.category}">
      <div class="skill-card-header">
        <img src="${skill.avatar}" alt="${skill.teacher}" class="skill-avatar" loading="lazy">
        <div class="skill-card-info">
          <h4>${skill.teacher}</h4>
          <span>${skill.role}</span>
        </div>
      </div>
      <span class="skill-tag ${skill.category}">${skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}</span>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <div class="skill-card-footer">
        <div class="skill-rating">
          <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l2.5 5 5.5.8-4 3.9.9 5.3L10 13.5 5.1 16l.9-5.3-4-3.9 5.5-.8L10 1z"/></svg>
          ${skill.rating} <span style="color:var(--text-tertiary);font-weight:400">(${skill.reviews})</span>
        </div>
        <span class="skill-swap-tag">Wants: ${skill.wants}</span>
      </div>
    </div>
  `).join('')
}

renderSkills()

// --- Skills Filter ---
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    renderSkills(btn.dataset.filter)
  })
})

// --- Render Testimonials ---
testimonialsTrack.innerHTML = testimonialsData.map(t => `
  <div class="testimonial-card">
    <div class="testimonial-header">
      <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy">
      <div class="testimonial-info">
        <h4>${t.name}</h4>
        <span>${t.role}</span>
        <div class="testimonial-swap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          ${t.swap}
        </div>
      </div>
    </div>
    <p class="testimonial-quote">${t.quote}</p>
  </div>
`).join('')

// --- Carousel ---
let currentSlide = 0
const totalSlides = testimonialsData.length

function updateCarousel() {
  testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide)
  })
}

carouselDots.innerHTML = testimonialsData.map((_, i) =>
  `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to testimonial ${i + 1}"></button>`
).join('')

carouselDots.querySelectorAll('.carousel-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.dataset.index)
    updateCarousel()
  })
})

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
  updateCarousel()
})

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides
  updateCarousel()
})

// Auto-advance carousel
let carouselInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides
  updateCarousel()
}, 5000)

document.getElementById('testimonialsCarousel').addEventListener('mouseenter', () => {
  clearInterval(carouselInterval)
})

document.getElementById('testimonialsCarousel').addEventListener('mouseleave', () => {
  carouselInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides
    updateCarousel()
  }, 5000)
})

// --- Render FAQ ---
faqList.innerHTML = faqData.map((item, i) => `
  <div class="faq-item" data-index="${i}">
    <button class="faq-question">
      <span>${item.question}</span>
      <span class="faq-icon">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </span>
    </button>
    <div class="faq-answer">
      <div class="faq-answer-inner">${item.answer}</div>
    </div>
  </div>
`).join('')

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item')
    const wasActive = item.classList.contains('active')

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'))

    if (!wasActive) {
      item.classList.add('active')
    }
  })
})

// --- Modal ---
function openModal(type) {
  if (type === 'signup') {
    modalContent.innerHTML = `
      <h2>Create Your Account</h2>
      <p>Join SkillSwap and start exchanging skills today.</p>
      <div class="form-group">
        <label for="signup-name">Full Name</label>
        <input type="text" id="signup-name" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label for="signup-email">Email</label>
        <input type="email" id="signup-email" placeholder="you@example.com">
      </div>
      <div class="form-group">
        <label for="signup-skill-teach">Skill You Can Teach</label>
        <input type="text" id="signup-skill-teach" placeholder="e.g., Graphic Design">
      </div>
      <div class="form-group">
        <label for="signup-skill-learn">Skill You Want to Learn</label>
        <input type="text" id="signup-skill-learn" placeholder="e.g., Python Programming">
      </div>
      <button class="btn btn-primary" id="modalSubmitBtn">Get Started</button>
    `
  } else if (type === 'login') {
    modalContent.innerHTML = `
      <h2>Welcome Back</h2>
      <p>Log in to your SkillSwap account.</p>
      <div class="form-group">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" placeholder="you@example.com">
      </div>
      <div class="form-group">
        <label for="login-password">Password</label>
        <input type="password" id="login-password" placeholder="Enter your password">
      </div>
      <button class="btn btn-primary" id="modalSubmitBtn">Log In</button>
    `
  } else if (type === 'skill-detail') {
    modalContent.innerHTML = `
      <h2>Request a Skill Swap</h2>
      <p>Send a swap request to start exchanging skills.</p>
      <div class="form-group">
        <label for="swap-message">Message</label>
        <textarea id="swap-message" placeholder="Introduce yourself and explain why you'd like to swap skills..."></textarea>
      </div>
      <div class="form-group">
        <label for="swap-offer">What You Offer</label>
        <input type="text" id="swap-offer" placeholder="e.g., I can teach UI Design">
      </div>
      <button class="btn btn-primary" id="modalSubmitBtn">Send Swap Request</button>
    `
  }

  modalOverlay.classList.add('active')
  document.body.style.overflow = 'hidden'

  const submitBtn = document.getElementById('modalSubmitBtn')
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault()
      submitBtn.textContent = 'Success!'
      submitBtn.style.background = 'var(--accent-600)'
      submitBtn.disabled = true
      setTimeout(() => {
        closeModal()
        submitBtn.textContent = type === 'login' ? 'Log In' : 'Get Started'
        submitBtn.style.background = ''
        submitBtn.disabled = false
      }, 1500)
    })
  }
}

function closeModal() {
  modalOverlay.classList.remove('active')
  document.body.style.overflow = ''
}

modalClose.addEventListener('click', closeModal)
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})

// --- Button Event Listeners ---
document.getElementById('signupBtn').addEventListener('click', () => openModal('signup'))
document.getElementById('heroSignupBtn').addEventListener('click', () => openModal('signup'))
document.getElementById('ctaSignupBtn').addEventListener('click', () => openModal('signup'))
document.getElementById('loginBtn').addEventListener('click', () => openModal('login'))

document.getElementById('heroExploreBtn').addEventListener('click', () => {
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })
})

document.getElementById('viewAllSkillsBtn').addEventListener('click', () => {
  openModal('signup')
})

// Skill card click delegation
skillsGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.skill-card')
  if (card) openModal('skill-detail')
})

// Mobile menu buttons
mobileMenu.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    mobileToggle.classList.remove('active')
    mobileMenu.classList.remove('active')
    document.body.style.overflow = ''
    openModal('signup')
  })
})

mobileMenu.querySelectorAll('.btn-ghost').forEach(btn => {
  btn.addEventListener('click', () => {
    mobileToggle.classList.remove('active')
    mobileMenu.classList.remove('active')
    document.body.style.overflow = ''
    openModal('login')
  })
})

// --- Smooth scroll for nav links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'))
    if (target) {
      e.preventDefault()
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
})
