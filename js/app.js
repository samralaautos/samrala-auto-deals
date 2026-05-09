// ============================================================
// CONSTANTS
// ============================================================
const OWNER_PHONE = '917973850653';
const OWNER_EMAIL = 'gursimran38281221@gmail.com';
const EMAILJS_SERVICE_ID = 'service_ik3ic6e';
const EMAILJS_TEMPLATE_ID = 'template_lrv5iit';
const EMAILJS_PUBLIC_KEY = 'C0ioeHHgS1p2Bil3L';

// ============================================================
// VEHICLE DATA
// ============================================================
const defaultVehicles = [
    { id: 1, brand: 'Royal Enfield', model: 'Hunter 350', year: 2023, kilometers: 4500, price: 175000, dealingPrice: 150000, owner: '1st', insurance: 'Valid upto 2028 (Full Party)', condition: 'Brand New / Non-Accidental', type: 'petrol', image: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/hunter/loader/desktop/loader-2.jpg' },
    { id: 13, brand: 'Royal Enfield', model: 'Bullet 350 Standard', year: 2019, kilometers: 2100, price: 110000, dealingPrice: 100000, owner: '1st', insurance: 'Valid upto 2027', condition: 'Brand New / Non-Accidental', type: 'petrol', image: 'https://imgd.aeplcdn.com/1056x594/bw/ec/26288/Royal-Enfield-Bullet-350-Twinspark-Side-86212.jpg?v=201711021421&q=80' },
    { id: 2, brand: 'Honda', model: 'Activa 6G', year: 2023, kilometers: 2500, price: 82000, dealingPrice: 75000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Excellent / Non-Accidental', type: 'petrol', image: 'https://tse3.mm.bing.net/th/id/OIP.WKVB_QETLY8ceIQqKMXgzwHaEE?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 3, brand: 'Honda', model: 'Activa 5G', year: 2019, kilometers: 15000, price: 45000, dealingPrice: 40000, owner: '2nd', insurance: 'Valid (Third Party)', condition: 'Good / Well Maintained', type: 'petrol', image: 'https://img.indianautosblog.com/crop/1200x675/2019/05/27/honda-activa-5g-limited-edition-b-b5d7.jpeg' },
    { id: 4, brand: 'Honda', model: 'Grazia', year: 2021, kilometers: 8000, price: 65000, dealingPrice: 58000, owner: '1st', insurance: 'Valid upto 2026', condition: 'Mint Condition', type: 'petrol', image: 'https://www.indiacarnews.com/wp-content/uploads/2021/01/Grazia-Sports-Edition-Pearl-Nightstar-Black.jpg' },
    { id: 5, brand: 'TVS', model: 'Jupiter 125', year: 2023, kilometers: 3000, price: 85000, dealingPrice: 78000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Like New', type: 'petrol', image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/tvs-select-model-indiblue-drum-1701166884190.png?q=80' },
    { id: 6, brand: 'TVS', model: 'Jupiter 110', year: 2022, kilometers: 6000, price: 72000, dealingPrice: 65000, owner: '1st', insurance: 'Valid upto 2027', condition: 'Very Good', type: 'petrol', image: 'https://asset.autocarindia.com/static/image-galleries/images/20260210_092305_1ef6312f.jpg?w=728&q=75' },
    { id: 7, brand: 'Honda', model: 'Activa 125', year: 2023, kilometers: 1500, price: 88000, dealingPrice: 82000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Brand New', type: 'petrol', image: 'https://cdn.bikedekho.com/processedimages/honda/2025-activa-125/source/2025-activa-12568ce3a43579a4.jpg' },
    { id: 12, brand: 'Hero', model: 'Splendor Plus', year: 2025, kilometers: 0, price: 80000, dealingPrice: 75000, owner: '1st', insurance: 'Valid upto 2030 (Full Party)', condition: 'Brand New / Zero KM', type: 'petrol', image: 'https://www.rushlane.com/wp-content/uploads/2024/05/2024-hero-splendor-xtec-2-launch-price-new-1200x900.jpg' },
    { id: 8, brand: 'Bajaj', model: 'Chetak', year: 2023, kilometers: 1200, price: 125000, dealingPrice: 115000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Brand New', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/bajaj/2022-chetak/source/2022-chetak69a9252c23b41.jpg' },
    { id: 9, brand: 'TVS', model: 'iQube', year: 2023, kilometers: 1500, price: 130000, dealingPrice: 120000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Mint Condition', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/tvs/iqube-s/source/iqube-s68d3dc0be19ef.jpg?imwidth=412&impolicy=resize' },
    { id: 10, brand: 'TVS', model: 'Orbitor', year: 2024, kilometers: 500, price: 145000, dealingPrice: 135000, owner: '1st', insurance: 'Valid upto 2029', condition: 'Pristine', type: 'ev', image: 'https://cdn.bikedekho.com/processedimages/tvs/tvs-electric-scooter/source/tvs-electric-scooter68ce61ab38fac.jpg?imwidth=412&impolicy=resize' },
    { id: 11, brand: 'Ola', model: 'S1 Air', year: 2023, kilometers: 800, price: 110000, dealingPrice: 100000, owner: '1st', insurance: 'Valid upto 2028', condition: 'Like New', type: 'ev', image: 'https://assets.otocapital.in/prod/midnight-blue-ola-electric-s1-air-image' }
];

// ============================================================
// GLOBAL FUNCTIONS (available before DOM loads)
// ============================================================

window.navigateTo = function(targetId) {
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-target="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    document.querySelectorAll('.page-section').forEach(s => {
        s.classList.toggle('active', s.id === targetId);
    });

    window.scrollTo(0, 0);

    if (targetId === 'buy-section') window.fetchVehicles();
    if (targetId === 'admin-section') loadAdminStats();

    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('nav-active');
};

window.getVehicles = function() {
    const VERSION = 'v3'; // bump this whenever defaultVehicles changes
    const storedVersion = localStorage.getItem('vehicles_version');
    if (storedVersion !== VERSION) {
        localStorage.setItem('vehicles', JSON.stringify(defaultVehicles));
        localStorage.setItem('vehicles_version', VERSION);
        return defaultVehicles;
    }
    const stored = localStorage.getItem('vehicles');
    if (stored) {
        try { return JSON.parse(stored); } catch(e) { return defaultVehicles; }
    }
    localStorage.setItem('vehicles', JSON.stringify(defaultVehicles));
    return defaultVehicles;
};

window.fetchVehicles = async function() {
    const grid = document.getElementById('vehicles-grid');
    if (!grid) return;
    grid.innerHTML = '<div class="loader"><i class="fa-solid fa-circle-notch fa-spin"></i> Loading inventory...</div>';
    await new Promise(r => setTimeout(r, 400));
    const vehicles = window.getVehicles();
    window._allVehicles = vehicles;
    window.renderVehicles(vehicles);
};

window.renderVehicles = function(vehicles) {
    const grid = document.getElementById('vehicles-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!vehicles.length) {
        grid.innerHTML = '<div class="loader">No vehicles found matching criteria.</div>';
        return;
    }
    vehicles.forEach(v => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => { if (!e.target.closest('button')) window.showVehicleDetails(v.id); };
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${v.image}" alt="${v.brand} ${v.model}">
                <div class="card-badge">${v.year}</div>
            </div>
            <div class="card-content">
                <div class="card-title">${v.brand} ${v.model}</div>
                <div class="card-details">
                    <span><i class="fa-solid fa-road"></i> ${v.kilometers.toLocaleString()} km</span>
                    <span><i class="fa-solid fa-tag"></i> ${v.brand}</span>
                </div>
                <div class="card-price-row">
                    <div class="card-price">₹${v.price.toLocaleString()}</div>
                    <button class="btn-buy" onclick="window.contactSeller('${v.brand}','${v.model}',${v.price})">Contact <i class="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
};

window.showVehicleDetails = function(id) {
    const vehicle = window.getVehicles().find(v => v.id == id);
    if (!vehicle) return;
    const modal = document.getElementById('vehicle-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image-wrapper">
                <img src="${vehicle.image}" class="modal-image" alt="${vehicle.brand} ${vehicle.model}">
            </div>
            <div class="modal-details">
                <h2>${vehicle.brand} ${vehicle.model}</h2>
                <div class="year-tag">Model Year ${vehicle.year}</div>
                <ul class="spec-list">
                    <li class="spec-item"><span class="spec-label">Condition</span><span class="spec-value">${vehicle.condition || 'Brand New'}</span></li>
                    <li class="spec-item"><span class="spec-label">Accidental Status</span><span class="spec-value">Non-Accidental</span></li>
                    <li class="spec-item"><span class="spec-label">Owner</span><span class="spec-value">${vehicle.owner || '1st'}</span></li>
                    <li class="spec-item"><span class="spec-label">Insurance</span><span class="spec-value">${vehicle.insurance || 'Valid'}</span></li>
                    <li class="spec-item"><span class="spec-label">KM Driven</span><span class="spec-value">${vehicle.kilometers.toLocaleString()} km</span></li>
                </ul>
                <div class="price-box">
                    <div class="price-item" style="margin-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:1rem;">
                        <span class="price-label">Expecting Price</span>
                        <span class="price-value">₹${vehicle.price.toLocaleString()}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-label">Dealing Price</span>
                        <span class="price-value dealing-price">₹${(vehicle.dealingPrice || Math.round(vehicle.price * 0.9)).toLocaleString()}</span>
                    </div>
                </div>
                <button class="btn btn-primary btn-large" style="width:100%;margin-top:1.5rem;" onclick="window.contactSeller('${vehicle.brand}','${vehicle.model}',${vehicle.price})">
                    Inquire via WhatsApp <i class="fa-brands fa-whatsapp"></i>
                </button>
            </div>
        </div>`;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    const modal = document.getElementById('vehicle-modal');
    if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
};

window.contactSeller = function(brand, model, price) {
    const text = `Hi, I am interested in buying the ${brand} ${model} listed for ₹${Number(price).toLocaleString()}. Is it still available?`;
    window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
};

window.submitContact = async function(method) {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const msg = document.getElementById('contact-message').value;
    if (!name || !email || !subject || !msg) { showToast('Please fill all required fields.'); return; }
    const text = `*New Contact Query*\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${msg}`;
    if (method === 'whatsapp') {
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
        showToast('Redirecting to WhatsApp...');
    } else {
        showToast('Sending email...');
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: name, from_email: email, subject, message: msg, reply_to: email });
            showToast('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } catch (e) { showToast('Failed to send. Please try WhatsApp.'); }
    }
};

window.submitSell = async function(method) {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const km = document.getElementById('kilometers').value;
    const price = document.getElementById('price').value;
    const sellerName = document.getElementById('seller-name').value;
    const sellerPhone = document.getElementById('seller-phone').value;
    const imageFile = document.getElementById('image').files[0];
    const agreed = document.getElementById('agree').checked;
    if (!brand || !model || !year || !km || !price || !sellerName || !sellerPhone || !agreed) {
        showToast('Please fill all required fields.'); return;
    }
    const text = `*New Sell Vehicle Request*\nName: ${sellerName}\nPhone: ${sellerPhone}\nBrand: ${brand}\nModel: ${model}\nYear: ${year}\nKilometers: ${km}\nExpected Price: ₹${price}`;
    if (method === 'whatsapp') {
        window.open(`https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
        showToast('Redirecting to WhatsApp...');
    } else {
        showToast('Sending details...');
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: sellerName, message: `${brand} ${model} (${year}), ${km}km, ₹${price}. Phone: ${sellerPhone}`, phone: sellerPhone, brand, model, year, kilometers: km, price });
            const sc = document.getElementById('sell-status-container');
            sc.innerHTML = `<div style="text-align:center;background:rgba(0,210,255,0.1);padding:2rem;border-radius:12px;border:1px solid var(--accent-secondary);">
                <i class="fa-solid fa-circle-check" style="font-size:3rem;color:var(--accent-secondary);margin-bottom:1rem;display:block;"></i>
                <h3 style="margin-bottom:0.5rem;">Details Received!</h3>
                <p style="margin-bottom:1.5rem;">Your vehicle details have been sent successfully.</p>
                <button class="btn btn-primary" style="width:100%;background:#25D366;border:none;" onclick="window.open('https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(text)}','_blank')">Chat on WhatsApp <i class="fa-brands fa-whatsapp"></i></button>
                <p style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted);cursor:pointer;" onclick="location.reload()">Send another vehicle</p>
            </div>`;
            showToast('Details sent successfully!');
        } catch (e) { showToast('Failed to send. Please try WhatsApp.'); }
    }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function renderFeaturedPetrol() {
    const grid = document.getElementById('featured-petrol-grid');
    if (!grid) return;
    const petrol = window.getVehicles().filter(v => v.type === 'petrol').slice(-3).reverse();
    grid.innerHTML = '';
    petrol.forEach(v => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => { if (!e.target.closest('button')) window.showVehicleDetails(v.id); };
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${v.image}" alt="${v.brand} ${v.model}">
                <div class="card-badge">${v.year}</div>
            </div>
            <div class="card-content">
                <div class="card-title">${v.brand} ${v.model}</div>
                <div class="card-details">
                    <span><i class="fa-solid fa-road"></i> ${v.kilometers.toLocaleString()} km</span>
                    <span><i class="fa-solid fa-tag"></i> ${v.brand}</span>
                </div>
                <div class="card-price-row">
                    <div class="card-price">₹${v.price.toLocaleString()}</div>
                    <button class="btn-buy" onclick="window.contactSeller('${v.brand}','${v.model}',${v.price})">Contact <i class="fa-brands fa-whatsapp"></i></button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

function loadAdminStats() {
    try {
        const vehicles = window.getVehicles();
        const total = vehicles.length;
        const value = vehicles.reduce((s, v) => s + parseInt(v.price || 0), 0);
        const avg = total > 0 ? Math.round(value / total) : 0;
        const tv = document.getElementById('total-vehicles');
        const tval = document.getElementById('total-value');
        const ap = document.getElementById('avg-price');
        if (tv) tv.textContent = total;
        if (tval) tval.textContent = '₹' + value.toLocaleString();
        if (ap) ap.textContent = '₹' + avg.toLocaleString();
    } catch(e) { console.error('Admin stats error:', e); }
}

// ============================================================
// DOM READY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // Init EmailJS
    if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

    // --- Nav link click listeners ---
    document.querySelectorAll('.nav-links a[data-target]').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            window.navigateTo(el.getAttribute('data-target'));
        });
    });

    // --- Mobile menu toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-active');
        });
    }

    // --- Modal close ---
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) closeBtn.onclick = window.closeModal;
    window.onclick = function(e) {
        const modal = document.getElementById('vehicle-modal');
        if (e.target === modal) window.closeModal();
    };

    // --- Inventory filters ---
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const typeSelect = document.getElementById('type-filter');

    function applyFilters() {
        let filtered = [...(window._allVehicles || window.getVehicles())];
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const type = typeSelect ? typeSelect.value : 'all';
        if (term) filtered = filtered.filter(v => v.brand.toLowerCase().includes(term) || v.model.toLowerCase().includes(term));
        if (type !== 'all') filtered = filtered.filter(v => v.type === type);
        const sort = sortSelect ? sortSelect.value : 'default';
        if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
        else if (sort === 'newest') filtered.sort((a, b) => b.year - a.year);
        window.renderVehicles(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    if (typeSelect) typeSelect.addEventListener('change', applyFilters);

    // --- Admin AI Chat ---
    const chatForm = document.getElementById('chat-form');
    if (chatForm) {
        const chatInput = document.getElementById('chat-input');
        const chatWindow = document.getElementById('chat-window');
        const submitBtn = document.getElementById('chat-submit');
        let history = [];

        function addMsg(role, content) {
            const d = document.createElement('div');
            d.className = `chat-message ${role}`;
            d.innerHTML = `<div class="avatar"><i class="fa-solid ${role === 'user' ? 'fa-user' : 'fa-robot'}"></i></div><div class="bubble">${content.replace(/\n/g,'<br>')}</div>`;
            chatWindow.appendChild(d);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        function showTyping() {
            const d = document.createElement('div');
            d.className = 'chat-message assistant temp-typing';
            d.innerHTML = `<div class="avatar"><i class="fa-solid fa-robot"></i></div><div class="typing-indicator"><span></span><span></span><span></span></div>`;
            chatWindow.appendChild(d);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        function hideTyping() { const t = document.querySelector('.temp-typing'); if(t) t.remove(); }

        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const msg = chatInput.value.trim();
            if (!msg) return;

            // Replace YOUR_NEW_GROQ_API_KEY with a valid Groq API Key
            const apiKey = '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';

            if (apiKey === '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') {
                alert('Admin AI Error: Please update the Groq API key in js/app.js');
                addMsg('assistant', 'System Error: API Key missing or revoked. Please update the API key in the code.');
                return;
            }

            addMsg('user', msg);
            chatInput.value = '';
            submitBtn.disabled = true;
            showTyping();
            try {
                const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                    body: JSON.stringify({ model: 'llama-3.1-8b-instant', messages: [
                        { role: 'system', content: 'You are an AI assistant for Samrala Auto Deals, a used two-wheeler dealership in Ludhiana, Punjab. Address: Shop no 19-55 Model Town, Harnam Nagar, Ludhiana 141003. Contact: +91 7973850653. Inventory includes petrol bikes and EVs. Be helpful and concise.' },
                        ...history, { role: 'user', content: msg }
                    ]})
                });

                if (res.status === 401) {
                    throw new Error('Unauthorized: Your API key is invalid or has been revoked (e.g. by GitHub secret scanning).');
                }

                const data = await res.json();
                hideTyping();
                if (data.choices && data.choices[0]) {
                    const reply = data.choices[0].message.content;
                    addMsg('assistant', reply);
                    history.push({ role: 'user', content: msg }, { role: 'assistant', content: reply });
                    if (history.length > 10) history = history.slice(-10);
                } else throw new Error('No reply');
            } catch(err) {
                hideTyping();
                console.error(err);
                addMsg('assistant', `Sorry, I encountered an error: ${err.message}`);
            } finally {
                submitBtn.disabled = false;
                chatInput.focus();
            }
        });
    }

    // --- Scroll reveal ---
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal-active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.feature-box, .stat-item, .trusted-brands, .home-featured-section').forEach(el => {
        el.classList.add('reveal-item');
        observer.observe(el);
    });

    // --- Typing effect on hero ---
    const line1 = document.querySelector('.hero-line-1');
    const line2 = document.querySelector('.hero-line-2');
    if (line1 && line2) {
        const t1 = line1.textContent, t2 = line2.textContent;
        line1.textContent = ''; line2.textContent = '';
        let i = 0;
        function type1() { if (i < t1.length) { line1.textContent += t1[i++]; setTimeout(type1, 20); } else { i = 0; setTimeout(type2, 400); } }
        function type2() { if (i < t2.length) { line2.textContent += t2[i++]; setTimeout(type2, 20); } }
        type1();
    }

    // --- Initial page render ---
    renderFeaturedPetrol();
    window.fetchVehicles();
    loadAdminStats();
});
