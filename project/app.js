// ============================================
// STORAGE & INITIALIZATION
// ============================================

// Initialize default users if localStorage is empty
function initializeStorage() {
    if (!localStorage.getItem('users')) {
        const defaultUsers = [
            { username: 'admin', password: 'admin123' },
            { username: 'user', password: 'user123' },
            { username: 'chef', password: 'chef123' },
            { username: 'miriam', password: 'miriam123' },
            { username: 'else', password: 'else123' }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem('recipes')) {
        const defaultRecipes = [
            {
                id: 1,
                name: 'Chocolate Cake',
                ingredients: ['2 cups flour', '1 cup sugar', '3 eggs', '1 cup milk', '1/2 cup cocoa powder', '1 tsp vanilla extract', '1/2 cup butter'],
                steps: ['Preheat oven to 180 degrees', 'Mix dry ingredients in a bowl', 'Add wet ingredients and mix well', 'Pour batter into greased pan', 'Bake for 30 minutes', 'Let cool before serving'],
                thumbsUp: 0,
                thumbsDown: 0
            },
            {
                id: 2,
                name: 'Pasta Carbonara',
                ingredients: ['400g spaghetti', '200g bacon', '4 eggs', '100g parmesan cheese', 'Black pepper', 'Salt'],
                steps: ['Boil pasta in salted water', 'Fry bacon until crispy', 'Mix eggs and cheese in a bowl', 'Drain pasta and combine with bacon', 'Add egg mixture off heat and stir quickly', 'Season with black pepper']
            },
            {
                id: 3,
                name: 'Caesar Salad',
                ingredients: ['1 romaine lettuce', '1 cup croutons', '1/2 cup parmesan', '1/4 cup Caesar dressing', '2 chicken breasts', 'Olive oil'],
                steps: ['Grill chicken breasts with olive oil', 'Chop lettuce into bite-sized pieces', 'Slice cooked chicken', 'Toss lettuce with dressing', 'Add chicken, croutons and parmesan', 'Serve immediately']
            },
            {
                id: 4,
                name: 'Margherita Pizza',
                ingredients: ['Pizza dough', '1 cup tomato sauce', '200g mozzarella', 'Fresh basil', 'Olive oil', '1 clove garlic'],
                steps: ['Preheat oven to 250 degrees', 'Roll out pizza dough', 'Spread tomato sauce on dough', 'Add sliced mozzarella', 'Drizzle with olive oil', 'Bake for 12-15 minutes', 'Top with fresh basil']
            },
            {
                id: 5,
                name: 'Chicken Stir Fry',
                ingredients: ['500g chicken breast', '2 bell peppers', '1 onion', '3 tbsp soy sauce', '2 tbsp sesame oil', '1 cup broccoli', 'Garlic and ginger'],
                steps: ['Cut chicken into strips', 'Chop all vegetables', 'Heat sesame oil in wok', 'Stir fry chicken until golden', 'Add vegetables and stir fry', 'Add soy sauce and seasonings', 'Serve with rice']
            },
            {
                id: 6,
                name: 'Beef Tacos',
                ingredients: ['500g ground beef', '8 taco shells', '1 cup shredded cheese', 'Lettuce', 'Tomatoes', 'Sour cream', 'Taco seasoning'],
                steps: ['Brown ground beef in pan', 'Add taco seasoning and water', 'Simmer for 10 minutes', 'Warm taco shells in oven', 'Chop lettuce and tomatoes', 'Fill shells with beef', 'Top with cheese, lettuce, tomatoes and sour cream']
            },
            {
                id: 7,
                name: 'Greek Salad',
                ingredients: ['3 tomatoes', '1 cucumber', '1 red onion', '200g feta cheese', 'Kalamata olives', 'Olive oil', 'Oregano'],
                steps: ['Chop tomatoes and cucumber', 'Slice red onion thinly', 'Cube feta cheese', 'Combine all vegetables in bowl', 'Add olives and feta', 'Drizzle with olive oil', 'Sprinkle oregano and serve']
            },
            {
                id: 8,
                name: 'Pancakes',
                ingredients: ['2 cups flour', '2 eggs', '1.5 cups milk', '2 tbsp sugar', '2 tsp baking powder', 'Pinch of salt', 'Butter for cooking'],
                steps: ['Mix flour, sugar, baking powder and salt', 'Whisk eggs and milk together', 'Combine wet and dry ingredients', 'Heat butter in pan', 'Pour batter to form pancakes', 'Flip when bubbles appear', 'Serve with syrup or honey']
            },
            {
                id: 9,
                name: 'Tomato Soup',
                ingredients: ['1kg tomatoes', '1 onion', '3 cloves garlic', '2 cups vegetable broth', 'Heavy cream', 'Basil', 'Olive oil'],
                steps: ['Chop onion and garlic', 'Sauté in olive oil until soft', 'Add chopped tomatoes', 'Pour in vegetable broth', 'Simmer for 20 minutes', 'Blend until smooth', 'Stir in cream and basil']
            },
            {
                id: 10,
                name: 'Chocolate Chip Cookies',
                ingredients: ['2 cups flour', '1 cup butter', '1 cup brown sugar', '2 eggs', '2 cups chocolate chips', '1 tsp vanilla', '1 tsp baking soda'],
                steps: ['Preheat oven to 180 degrees', 'Cream butter and sugar', 'Beat in eggs and vanilla', 'Mix in flour and baking soda', 'Fold in chocolate chips', 'Drop spoonfuls on baking sheet', 'Bake for 10-12 minutes']
            },
            {
                id: 11,
                name: 'Sushi Rolls',
                ingredients: ['2 cups sushi rice', '4 nori sheets', '200g salmon', '1 cucumber', '1 avocado', 'Rice vinegar', 'Soy sauce'],
                steps: ['Cook sushi rice and season with vinegar', 'Place nori on bamboo mat', 'Spread rice on nori', 'Add salmon, cucumber and avocado strips', 'Roll tightly using mat', 'Slice into pieces', 'Serve with soy sauce']
            },
            {
                id: 12,
                name: 'French Toast',
                ingredients: ['4 slices bread', '2 eggs', '1/2 cup milk', '1 tsp cinnamon', '1 tsp vanilla', 'Butter', 'Maple syrup'],
                steps: ['Whisk eggs, milk, cinnamon and vanilla', 'Heat butter in pan', 'Dip bread in egg mixture', 'Fry until golden on both sides', 'Repeat with remaining slices', 'Serve hot with maple syrup']
            },
            {
                id: 13,
                name: 'Lasagna',
                ingredients: ['12 lasagna noodles', '500g ground beef', '3 cups marinara sauce', '2 cups ricotta', '2 cups mozzarella', 'Parmesan', 'Italian herbs'],
                steps: ['Cook lasagna noodles', 'Brown ground beef with herbs', 'Mix beef with marinara sauce', 'Layer noodles, meat sauce, ricotta and mozzarella', 'Repeat layers', 'Top with parmesan', 'Bake at 180 degrees for 45 minutes']
            },
            {
                id: 14,
                name: 'Chicken Curry',
                ingredients: ['500g chicken', '2 onions', '3 tomatoes', '2 tbsp curry powder', 'Coconut milk', 'Garlic and ginger', 'Rice'],
                steps: ['Cut chicken into cubes', 'Sauté onions, garlic and ginger', 'Add curry powder and cook', 'Add chicken and brown', 'Add tomatoes and coconut milk', 'Simmer for 30 minutes', 'Serve with rice']
            },
            {
                id: 15,
                name: 'Guacamole',
                ingredients: ['3 avocados', '1 lime', '1 tomato', '1/4 onion', 'Cilantro', 'Salt', 'Jalapeño'],
                steps: ['Mash avocados in bowl', 'Squeeze lime juice', 'Dice tomato and onion', 'Chop cilantro and jalapeño', 'Mix all ingredients', 'Season with salt', 'Serve with chips']
            },
            {
                id: 16,
                name: 'Beef Burger',
                ingredients: ['500g ground beef', '4 burger buns', 'Lettuce', 'Tomato', 'Cheese slices', 'Pickles', 'Ketchup and mustard'],
                steps: ['Form beef into 4 patties', 'Season with salt and pepper', 'Grill patties for 4 minutes each side', 'Toast burger buns', 'Add cheese on patties to melt', 'Assemble burgers with toppings', 'Serve hot']
            },
            {
                id: 17,
                name: 'Pad Thai',
                ingredients: ['200g rice noodles', '200g shrimp', '2 eggs', 'Bean sprouts', 'Peanuts', 'Lime', 'Pad Thai sauce'],
                steps: ['Soak rice noodles in water', 'Stir fry shrimp until pink', 'Push aside and scramble eggs', 'Add drained noodles', 'Pour Pad Thai sauce', 'Add bean sprouts', 'Top with peanuts and lime']
            },
            {
                id: 18,
                name: 'Tiramisu',
                ingredients: ['6 egg yolks', '3/4 cup sugar', '1 cup mascarpone', '1.5 cups coffee', 'Ladyfinger cookies', 'Cocoa powder', 'Marsala wine'],
                steps: ['Whisk egg yolks and sugar', 'Fold in mascarpone cheese', 'Mix coffee with Marsala', 'Dip ladyfingers in coffee', 'Layer cookies and cream mixture', 'Repeat layers', 'Dust with cocoa and refrigerate 4 hours']
            },
            {
                id: 19,
                name: 'Falafel',
                ingredients: ['2 cups chickpeas', '1 onion', '4 cloves garlic', 'Parsley', 'Cumin', 'Coriander', 'Flour'],
                steps: ['Soak chickpeas overnight', 'Blend chickpeas with onion and garlic', 'Add herbs and spices', 'Mix in flour', 'Form into balls', 'Deep fry until golden', 'Serve in pita with tahini']
            },
            {
                id: 20,
                name: 'Ramen',
                ingredients: ['Ramen noodles', '4 cups chicken broth', '2 eggs', 'Green onions', 'Nori', 'Soy sauce', 'Sesame oil'],
                steps: ['Boil chicken broth', 'Cook ramen noodles separately', 'Soft boil eggs', 'Add soy sauce and sesame oil to broth', 'Place noodles in bowl', 'Pour hot broth over', 'Top with eggs, green onions and nori']
            }
        ];
        localStorage.setItem('recipes', JSON.stringify(defaultRecipes));
    }

    if (!localStorage.getItem('settings')) {
        const defaultSettings = {
            theme: 'light',
            delay: 2,
            voiceIndex: 0,
            musicEnabled: false
        };
        localStorage.setItem('settings', JSON.stringify(defaultSettings));
    }

    if (!localStorage.getItem('recipeLikes')) {
        localStorage.setItem('recipeLikes', JSON.stringify({}));
    }
}

// Get data from localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function getRecipes() {
    return JSON.parse(localStorage.getItem('recipes')) || [];
}

function getSettings() {
    return JSON.parse(localStorage.getItem('settings')) || { theme: 'light', delay: 2, voiceIndex: 0, musicEnabled: false };
}

function getRecipeLikes() {
    return JSON.parse(localStorage.getItem('recipeLikes')) || {};
}

function saveRecipeLikes(likes) {
    localStorage.setItem('recipeLikes', JSON.stringify(likes));
}

// Save data to localStorage
function saveRecipes(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function saveSettings(settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
}

// ============================================
// AUTHENTICATION
// ============================================

let currentUser = null;

function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = username;
        sessionStorage.setItem('currentUser', username);
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    showScreen('loginScreen');
}

function checkSession() {
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        return true;
    }
    return false;
}

// ============================================
// SCREEN NAVIGATION
// ============================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    // Show/hide global navbar
    const navbar = document.getElementById('globalNavbar');
    if (screenId === 'loginScreen') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
        updateGreeting();
    }
}

function updateGreeting() {
    if (currentUser) {
        document.getElementById('userGreeting').textContent = `Hello ${currentUser}`;
    }
}

// ============================================
// RECIPE MANAGEMENT
// ============================================

let currentRecipeId = null;

function displayRecipes(searchTerm = '') {
    const recipes = getRecipes();
    const recipeList = document.getElementById('recipeList');
    
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recipeIcons = {
        'Chocolate Cake': '🍰',
        'Pasta Carbonara': '🍝',
        'Caesar Salad': '🥗',
        'Margherita Pizza': '🍕',
        'Chicken Stir Fry': '🍜',
        'Beef Tacos': '🌮',
        'Greek Salad': '🥗',
        'Pancakes': '🥞',
        'Tomato Soup': '🍲',
        'Chocolate Chip Cookies': '🍪',
        'Sushi Rolls': '🍣',
        'French Toast': '🍞',
        'Lasagna': '🍝',
        'Chicken Curry': '🍛',
        'Guacamole': '🥑',
        'Beef Burger': '🍔',
        'Pad Thai': '🍜',
        'Tiramisu': '🍰',
        'Falafel': '🧆',
        'Ramen': '🍜'
    };

    recipeList.innerHTML = filtered.map((recipe) => {
        const icon = recipeIcons[recipe.name] || '🍽️';
        return `
        <div class="col-md-6 col-lg-4">
            <div class="recipe-card" onclick="viewRecipe(${recipe.id})">
                <div class="recipe-card-header">
                    <div class="recipe-card-icon">${icon}</div>
                </div>
                <div class="recipe-card-body">
                    <h3>${recipe.name}</h3>
                    <div class="recipe-meta">
                        <span><i class="bi bi-basket"></i> ${recipe.ingredients.length}</span>
                        <span><i class="bi bi-list-ol"></i> ${recipe.steps.length} steps</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

function viewRecipe(id) {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === id);
    
    if (!recipe) return;

    currentRecipeId = id;
    document.getElementById('recipeTitle').textContent = recipe.name;
    
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = recipe.ingredients.map(ing => 
        `<li><i class="bi bi-check-circle-fill text-primary"></i> ${ing}</li>`
    ).join('');
    
    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
    
    // Update thumbs up/down counts
    const likes = getRecipeLikes();
    const recipeLikes = likes[id] || { up: 0, down: 0 };
    document.getElementById('thumbsUpCount').textContent = recipeLikes.up;
    document.getElementById('thumbsDownCount').textContent = recipeLikes.down;
    
    showScreen('recipeViewScreen');
    resetTTS();
}

function toggleThumb(type) {
    const likes = getRecipeLikes();
    if (!likes[currentRecipeId]) {
        likes[currentRecipeId] = { up: 0, down: 0 };
    }
    likes[currentRecipeId][type]++;
    saveRecipeLikes(likes);
    
    document.getElementById(`thumbs${type === 'up' ? 'Up' : 'Down'}Count`).textContent = likes[currentRecipeId][type];
}

function addRecipe(name, ingredients, steps) {
    const recipes = getRecipes();
    const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
    
    const newRecipe = {
        id: newId,
        name,
        ingredients: ingredients.split('\n').filter(i => i.trim()),
        steps: steps.split('\n').filter(s => s.trim())
    };
    
    recipes.push(newRecipe);
    saveRecipes(recipes);
    displayRecipes();
}

function deleteRecipe(id) {
    const recipes = getRecipes();
    const filtered = recipes.filter(r => r.id !== id);
    saveRecipes(filtered);
    showScreen('recipeListScreen');
    displayRecipes();
}

// ============================================
// TEXT-TO-SPEECH (TTS)
// ============================================

let ttsState = {
    isPlaying: false,
    isPaused: false,
    currentStep: 0,
    utterances: []
};

let availableVoices = [];
let backgroundMusic = null;

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
    const voiceSelect = document.getElementById('voiceSelect');
    if (voiceSelect && availableVoices.length > 0) {
        voiceSelect.innerHTML = availableVoices.map((voice, index) => 
            `<option value="${index}">${voice.name} (${voice.lang})</option>`
        ).join('');
        const settings = getSettings();
        voiceSelect.value = settings.voiceIndex || 0;
    }
}

function initBackgroundMusic() {
    // Create multiple audio sources as fallback
    backgroundMusic = new Audio();
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.2;
    // Using a simple royalty-free music URL
    backgroundMusic.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    backgroundMusic.load();
}

function resetTTS() {
    window.speechSynthesis.cancel();
    ttsState = { isPlaying: false, isPaused: false, currentStep: 0, utterances: [] };
    document.getElementById('playBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    
    // Remove active highlighting
    document.querySelectorAll('#stepsList li').forEach(li => li.classList.remove('active'));
}

async function playTTS() {
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) return;

    const settings = getSettings();
    const delay = settings.delay * 1000; // Convert to milliseconds

    ttsState.isPlaying = true;
    ttsState.isPaused = false;
    document.getElementById('playBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;

    const steps = recipe.steps;
    const stepElements = document.querySelectorAll('#stepsList li');

    // Start from current step or beginning
    for (let i = ttsState.currentStep; i < steps.length; i++) {
        if (!ttsState.isPlaying) break;

        ttsState.currentStep = i;

        // Highlight current step
        stepElements.forEach(el => el.classList.remove('active'));
        stepElements[i].classList.add('active');

        // Speak the step and wait for it to finish
        await speakText(steps[i]);

        // Wait for the user-defined delay before next step
        if (i < steps.length - 1 && ttsState.isPlaying) {
            await sleep(delay);
        }
    }

    // Finished reading all steps
    if (ttsState.currentStep >= steps.length - 1) {
        resetTTS();
    }
}

function pauseTTS() {
    ttsState.isPlaying = false;
    window.speechSynthesis.cancel();
    document.getElementById('playBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

// Helper function to speak text and return a promise
function speakText(text) {
    return new Promise((resolve) => {
        if (!ttsState.isPlaying) {
            resolve();
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        
        const settings = getSettings();
        if (availableVoices.length > 0 && settings.voiceIndex < availableVoices.length) {
            utterance.voice = availableVoices[settings.voiceIndex];
        }
        
        utterance.onend = () => {
            resolve();
        };

        utterance.onerror = () => {
            resolve();
        };

        window.speechSynthesis.speak(utterance);
    });
}

function toggleBackgroundMusic() {
    const settings = getSettings();
    settings.musicEnabled = !settings.musicEnabled;
    saveSettings(settings);
    
    const musicBtn = document.getElementById('musicToggle');
    if (settings.musicEnabled) {
        musicBtn.innerHTML = '<i class="bi bi-pause-circle"></i> On';
        musicBtn.classList.add('btn-success');
        musicBtn.classList.remove('btn-outline-primary');
        if (backgroundMusic) {
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Music playing');
                }).catch(err => {
                    console.log('Music error:', err);
                    settings.musicEnabled = false;
                    saveSettings(settings);
                    musicBtn.innerHTML = '<i class="bi bi-play-circle"></i> Off';
                    musicBtn.classList.remove('btn-success');
                    musicBtn.classList.add('btn-outline-primary');
                    alert('Background music requires user interaction. Try clicking play again.');
                });
            }
        }
    } else {
        musicBtn.innerHTML = '<i class="bi bi-play-circle"></i> Off';
        musicBtn.classList.remove('btn-success');
        musicBtn.classList.add('btn-outline-primary');
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    }
}

// Helper function for delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================
// SETTINGS
// ============================================

function applyTheme() {
    const settings = getSettings();
    document.body.setAttribute('data-theme', settings.theme);
    
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.innerHTML = settings.theme === 'dark' 
        ? '<i class="bi bi-sun-fill"></i> Light Mode' 
        : '<i class="bi bi-moon-stars-fill"></i> Dark Mode';
}

function toggleTheme() {
    const settings = getSettings();
    settings.theme = settings.theme === 'light' ? 'dark' : 'light';
    saveSettings(settings);
    applyTheme();
}

function updateDelay(value) {
    const settings = getSettings();
    settings.delay = parseFloat(value);
    saveSettings(settings);
    document.getElementById('delayValue').textContent = value;
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeStorage();
    applyTheme();
    initBackgroundMusic();
    
    // Load voices
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Check if user is already logged in
    if (checkSession()) {
        showScreen('recipeListScreen');
        displayRecipes();
    }

    // Login
    document.getElementById('loginBtn').addEventListener('click', () => {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const errorEl = document.getElementById('loginError');

        if (login(username, password)) {
            errorEl.textContent = '';
            showScreen('recipeListScreen');
            displayRecipes();
        } else {
            errorEl.textContent = 'Invalid username or password';
        }
    });

    // Logout
    document.getElementById('navLogoutBtn').addEventListener('click', logout);

    // Search
    document.getElementById('searchBar').addEventListener('input', (e) => {
        displayRecipes(e.target.value);
    });

    // Add Recipe Modal
    document.getElementById('addRecipeBtn').addEventListener('click', () => {
        document.getElementById('modalTitle').innerHTML = '<i class="bi bi-plus-circle"></i> Add New Recipe';
        document.getElementById('recipeName').value = '';
        document.getElementById('recipeIngredients').value = '';
        document.getElementById('recipeSteps').value = '';
        const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
        modal.show();
    });

    document.getElementById('saveRecipeBtn').addEventListener('click', () => {
        const name = document.getElementById('recipeName').value.trim();
        const ingredients = document.getElementById('recipeIngredients').value.trim();
        const steps = document.getElementById('recipeSteps').value.trim();

        if (name && ingredients && steps) {
            addRecipe(name, ingredients, steps);
            bootstrap.Modal.getInstance(document.getElementById('recipeModal')).hide();
        } else {
            alert('Please fill in all fields');
        }
    });

    document.getElementById('cancelRecipeBtn').addEventListener('click', () => {
        bootstrap.Modal.getInstance(document.getElementById('recipeModal')).hide();
    });

    // Navigation
    document.getElementById('navHome').addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('recipeListScreen');
        displayRecipes();
    });

    document.getElementById('navSettingsBtn').addEventListener('click', () => {
        showScreen('settingsScreen');
        const settings = getSettings();
        document.getElementById('delaySlider').value = settings.delay;
        document.getElementById('delayValue').textContent = settings.delay;
        
        const voiceSelect = document.getElementById('voiceSelect');
        if (voiceSelect) voiceSelect.value = settings.voiceIndex || 0;
        
        const musicBtn = document.getElementById('musicToggle');
        if (settings.musicEnabled) {
            musicBtn.innerHTML = '<i class="bi bi-pause-circle"></i> On';
            musicBtn.classList.add('btn-success');
            musicBtn.classList.remove('btn-outline-primary');
        } else {
            musicBtn.innerHTML = '<i class="bi bi-play-circle"></i> Off';
            musicBtn.classList.remove('btn-success');
            musicBtn.classList.add('btn-outline-primary');
        }
    });

    document.getElementById('backToListBtn').addEventListener('click', () => {
        pauseTTS();
        showScreen('recipeListScreen');
        displayRecipes();
    });

    document.getElementById('backFromSettingsBtn').addEventListener('click', () => {
        showScreen('recipeListScreen');
        displayRecipes();
    });

    document.getElementById('thumbsUpBtn').addEventListener('click', () => {
        toggleThumb('up');
    });

    document.getElementById('thumbsDownBtn').addEventListener('click', () => {
        toggleThumb('down');
    });

    document.getElementById('voiceSelect').addEventListener('change', (e) => {
        const settings = getSettings();
        settings.voiceIndex = parseInt(e.target.value);
        saveSettings(settings);
    });

    document.getElementById('musicToggle').addEventListener('click', toggleBackgroundMusic);

    document.getElementById('deleteRecipeBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(currentRecipeId);
        }
    });

    // TTS Controls
    document.getElementById('playBtn').addEventListener('click', playTTS);
    document.getElementById('pauseBtn').addEventListener('click', pauseTTS);

    // Settings
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('delaySlider').addEventListener('input', (e) => {
        updateDelay(e.target.value);
    });
});
