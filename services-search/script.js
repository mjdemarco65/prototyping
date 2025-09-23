// Medical services, conditions, treatments, and tests organized by first letter
const medicalData = {
    'A': [
        { name: 'Addiction Medicine', tag: 'Services', description: 'Comprehensive treatment programs for substance abuse and addiction recovery. Our specialized team provides evidence-based therapies, medication-assisted treatment, and ongoing support to help patients achieve lasting recovery and improved quality of life.' },
        { name: 'Adolescent Medicine', tag: 'Services', description: 'Specialized healthcare services designed specifically for teenagers and young adults. Our providers understand the unique physical, emotional, and social needs of adolescents, offering confidential and age-appropriate care.' },
        { name: 'Allergy and Immunology', tag: 'Services', description: 'Expert diagnosis and treatment of allergic reactions, asthma, and immune system disorders. We provide comprehensive allergy testing, immunotherapy, and personalized treatment plans to help manage symptoms and improve quality of life.' },
        { name: 'Anesthesia Services', tag: 'Services', description: 'Advanced anesthesia care for surgical procedures, pain management, and critical care. Our board-certified anesthesiologists ensure patient safety and comfort during medical procedures using the latest techniques and monitoring technology.' },
        { name: 'Anxiety Disorders', tag: 'Conditions', description: 'Mental health conditions characterized by excessive worry, fear, or nervousness that interferes with daily activities. Treatment options include therapy, medication, and lifestyle modifications to help patients manage symptoms effectively.' },
        { name: 'Arthritis', tag: 'Conditions', description: 'Inflammatory joint conditions causing pain, stiffness, and reduced mobility. Our rheumatology team provides comprehensive care including medication management, physical therapy, and lifestyle counseling to help patients maintain active lives.' },
        { name: 'Asthma', tag: 'Conditions', description: 'Chronic respiratory condition causing airway inflammation and breathing difficulties. We offer personalized asthma management plans, including medication optimization, trigger identification, and patient education for better symptom control.' }
    ],
    'B': [
        { name: 'Bariatric Surgery', tag: 'Treatments', description: 'Surgical weight loss procedures for patients with severe obesity. Our multidisciplinary team provides comprehensive pre-operative evaluation, minimally invasive surgical techniques, and long-term follow-up care to ensure successful outcomes.' },
        { name: 'Behavioral Health', tag: 'Services', description: 'Mental health and substance abuse services including counseling, therapy, and psychiatric care. Our integrated approach addresses the whole person, combining medical treatment with psychological support and community resources.' },
        { name: 'Blood Disorders', tag: 'Conditions', description: 'Conditions affecting blood cells, clotting, or blood-forming organs. Our hematology specialists provide expert diagnosis and treatment for anemia, bleeding disorders, blood cancers, and other hematologic conditions.' },
        { name: 'Bone Density Testing', tag: 'Medical Tests', description: 'Advanced imaging to assess bone strength and diagnose osteoporosis. This non-invasive test helps identify fracture risk and guide treatment decisions to maintain bone health and prevent complications.' },
        { name: 'Breast Cancer Screening', tag: 'Medical Tests', description: 'Comprehensive screening programs including mammography, clinical exams, and genetic counseling. Early detection through regular screening significantly improves treatment outcomes and survival rates.' }
    ],
    'C': [
        { name: 'Cardiology', tag: 'Services', description: 'Comprehensive heart and vascular care including diagnosis, treatment, and prevention of cardiovascular diseases. Our cardiac specialists use advanced technology and evidence-based treatments to optimize heart health and prevent complications.' },
        { name: 'Cancer Treatment', tag: 'Treatments', description: 'Multidisciplinary cancer care combining surgery, chemotherapy, radiation therapy, and immunotherapy. Our oncology team provides personalized treatment plans and supportive care to help patients fight cancer while maintaining quality of life.' },
        { name: 'Chronic Pain Management', tag: 'Treatments', description: 'Comprehensive pain management strategies for persistent pain conditions. Our approach combines medication management, interventional procedures, physical therapy, and psychological support to improve function and quality of life.' },
        { name: 'Colonoscopy', tag: 'Medical Tests', description: 'Diagnostic procedure to examine the colon and rectum for abnormalities, polyps, or cancer. This important screening test can detect colorectal cancer early when treatment is most effective.' },
        { name: 'Congestive Heart Failure', tag: 'Conditions', description: 'Chronic condition where the heart cannot pump blood effectively. Our heart failure specialists provide advanced treatments including medications, devices, and lifestyle modifications to improve symptoms and outcomes.' }
    ],
    'D': [
        { name: 'Dermatology', tag: 'Services', description: 'Comprehensive skin care services including medical, surgical, and cosmetic dermatology. Our specialists diagnose and treat skin conditions, perform skin cancer screenings, and provide aesthetic treatments for healthy, beautiful skin.' },
        { name: 'Diabetes Management', tag: 'Treatments', description: 'Comprehensive diabetes care including blood sugar monitoring, medication management, nutrition counseling, and complication prevention. Our endocrinology team helps patients achieve optimal glucose control and prevent long-term complications.' },
        { name: 'Depression', tag: 'Conditions', description: 'Mental health condition characterized by persistent sadness, loss of interest, and other symptoms that interfere with daily functioning. Treatment includes therapy, medication, and lifestyle interventions tailored to individual needs.' },
        { name: 'Diagnostic Imaging', tag: 'Medical Tests', description: 'Advanced imaging services including MRI, CT scans, ultrasound, and X-rays. Our state-of-the-art equipment and experienced radiologists provide accurate diagnoses to guide treatment decisions.' }
    ],
    'E': [
        { name: 'Emergency Medicine', tag: 'Services', description: 'Round-the-clock emergency care for urgent and life-threatening conditions. Our emergency department is staffed by board-certified emergency physicians and equipped with advanced technology to provide rapid, high-quality care.' },
        { name: 'Endocrinology', tag: 'Services', description: 'Specialized care for hormone-related disorders including diabetes, thyroid conditions, and metabolic diseases. Our endocrinologists provide comprehensive evaluation and treatment to restore hormonal balance and optimize health.' },
        { name: 'Epilepsy', tag: 'Conditions', description: 'Neurological disorder characterized by recurrent seizures. Our epilepsy specialists provide comprehensive evaluation, medication management, and advanced treatment options including surgery and device therapy when appropriate.' },
        { name: 'EKG/ECG Testing', tag: 'Medical Tests', description: 'Non-invasive test that records the electrical activity of the heart to detect rhythm abnormalities, heart attacks, and other cardiac conditions. This quick and painless test provides valuable information about heart health.' }
    ],
    'F': [
        { name: 'Family Medicine', tag: 'Services', description: 'Comprehensive primary care for patients of all ages, from newborns to seniors. Our family physicians provide preventive care, chronic disease management, and acute illness treatment in a continuous, coordinated manner.' },
        { name: 'Fertility Services', tag: 'Services', description: 'Comprehensive reproductive health services including fertility evaluation, treatment, and assisted reproductive technologies. Our specialists help couples achieve their family planning goals through personalized, compassionate care.' },
        { name: 'Fibromyalgia', tag: 'Conditions', description: 'Chronic pain condition characterized by widespread musculoskeletal pain, fatigue, and tender points. Treatment focuses on pain management, improving sleep, and maintaining function through a multidisciplinary approach.' }
    ],
    'G': [
        { name: 'Gastroenterology', tag: 'Services', description: 'Specialized care for digestive system disorders including the esophagus, stomach, intestines, liver, and pancreas. Our gastroenterologists provide diagnostic procedures and treatments for various GI conditions.' },
        { name: 'Geriatric Medicine', tag: 'Services', description: 'Specialized healthcare for older adults addressing age-related health issues, medication management, and maintaining independence. Our geriatricians focus on comprehensive care that considers the unique needs of seniors.' },
        { name: 'Genetic Counseling', tag: 'Services', description: 'Professional guidance regarding genetic conditions, inheritance patterns, and genetic testing options. Our certified genetic counselors help patients and families understand genetic risks and make informed healthcare decisions.' }
    ],
    'H': [
        { name: 'Hematology', tag: 'Services', description: 'Specialized care for blood disorders including anemia, bleeding disorders, and blood cancers. Our hematologists provide expert diagnosis and treatment using the latest advances in blood disorder management.' },
        { name: 'Hypertension', tag: 'Conditions', description: 'High blood pressure that increases the risk of heart disease, stroke, and other complications. Our approach includes lifestyle modifications, medication management, and regular monitoring to achieve optimal blood pressure control.' },
        { name: 'Heart Disease', tag: 'Conditions', description: 'Various conditions affecting the heart and blood vessels. Our cardiology team provides comprehensive care for coronary artery disease, heart failure, arrhythmias, and other cardiovascular conditions.' }
    ],
    'I': [
        { name: 'Infectious Disease', tag: 'Services', description: 'Specialized care for complex infections, antibiotic-resistant organisms, and immunocompromised patients. Our infectious disease specialists provide expert consultation and treatment for challenging infectious conditions.' },
        { name: 'Internal Medicine', tag: 'Services', description: 'Comprehensive adult primary care focusing on prevention, diagnosis, and treatment of adult diseases. Our internists provide coordinated care for complex medical conditions and serve as the central point for specialist referrals.' },
        { name: 'Immunotherapy', tag: 'Treatments', description: 'Advanced treatment that harnesses the immune system to fight cancer and other diseases. This innovative approach offers new hope for patients with various conditions, including certain cancers and autoimmune disorders.' }
    ],
    'K': [
        { name: 'Kidney Disease', tag: 'Conditions', description: 'Chronic or acute conditions affecting kidney function. Our nephrology team provides comprehensive care including early detection, treatment to slow progression, dialysis services, and kidney transplant evaluation.' },
        { name: 'Knee Replacement', tag: 'Treatments', description: 'Surgical procedure to replace damaged knee joints with artificial implants. Our orthopedic surgeons use minimally invasive techniques and advanced implants to restore mobility and reduce pain.' }
    ],
    'L': [
        { name: 'Laboratory Services', tag: 'Medical Tests', description: 'Comprehensive diagnostic testing including blood work, urine analysis, and specialized laboratory tests. Our state-of-the-art laboratory provides accurate, timely results to support diagnosis and treatment decisions.' },
        { name: 'Liver Disease', tag: 'Conditions', description: 'Conditions affecting liver function including hepatitis, cirrhosis, and fatty liver disease. Our hepatology specialists provide expert care to preserve liver function and prevent complications.' },
        { name: 'Lung Cancer Screening', tag: 'Medical Tests', description: 'Low-dose CT screening for early detection of lung cancer in high-risk patients. Early detection through screening can significantly improve treatment outcomes and survival rates.' }
    ],
    'M': [
        { name: 'Mental Health Services', tag: 'Services', description: 'Comprehensive mental health care including psychiatry, psychology, and counseling services. Our mental health professionals provide evidence-based treatments for depression, anxiety, bipolar disorder, and other mental health conditions.' },
        { name: 'Mammography', tag: 'Medical Tests', description: 'Specialized breast imaging for early detection of breast cancer. Our advanced digital mammography and 3D tomosynthesis technology provides detailed images for accurate screening and diagnosis.' },
        { name: 'Migraine Treatment', tag: 'Treatments', description: 'Comprehensive migraine management including prevention strategies, acute treatment, and lifestyle modifications. Our neurologists work with patients to develop personalized treatment plans to reduce frequency and severity of migraines.' }
    ],
    'N': [
        { name: 'Neurology', tag: 'Services', description: 'Specialized care for disorders of the nervous system including the brain, spinal cord, and peripheral nerves. Our neurologists diagnose and treat conditions such as stroke, epilepsy, multiple sclerosis, and movement disorders.' },
        { name: 'Nephrology', tag: 'Services', description: 'Specialized kidney care including treatment of chronic kidney disease, hypertension, and electrolyte disorders. Our nephrologists provide comprehensive care to preserve kidney function and manage related complications.' },
        { name: 'Nuclear Medicine', tag: 'Medical Tests', description: 'Advanced imaging and treatment using radioactive materials to diagnose and treat various conditions. This specialized field provides unique insights into organ function and targeted treatment options.' }
    ],
    'O': [
        { name: 'Oncology', tag: 'Services', description: 'Comprehensive cancer care including medical oncology, radiation oncology, and surgical oncology. Our multidisciplinary team provides personalized treatment plans and supportive care throughout the cancer journey.' },
        { name: 'Orthopedic Surgery', tag: 'Services', description: 'Surgical treatment of musculoskeletal conditions including bones, joints, ligaments, and muscles. Our orthopedic surgeons specialize in both traditional and minimally invasive techniques for optimal outcomes.' },
        { name: 'Osteoporosis', tag: 'Conditions', description: 'Bone disease characterized by decreased bone density and increased fracture risk. Our approach includes bone density testing, medication management, and lifestyle modifications to strengthen bones and prevent fractures.' }
    ],
    'P': [
        { name: 'Pediatrics', tag: 'Services', description: 'Comprehensive healthcare for infants, children, and adolescents. Our pediatricians provide preventive care, immunizations, developmental assessments, and treatment of childhood illnesses in a child-friendly environment.' },
        { name: 'Physical Therapy', tag: 'Treatments', description: 'Rehabilitation services to restore function, improve mobility, and reduce pain. Our licensed physical therapists develop personalized treatment plans using exercise, manual therapy, and advanced techniques.' },
        { name: 'Pulmonology', tag: 'Services', description: 'Specialized care for lung and respiratory conditions including asthma, COPD, and sleep disorders. Our pulmonologists provide comprehensive evaluation and treatment for breathing-related problems.' }
    ],
    'R': [
        { name: 'Radiology', tag: 'Services', description: 'Advanced medical imaging services including X-rays, CT scans, MRI, and ultrasound. Our board-certified radiologists provide expert interpretation of imaging studies to support accurate diagnosis and treatment planning.' },
        { name: 'Rheumatology', tag: 'Services', description: 'Specialized care for autoimmune and inflammatory conditions affecting joints, muscles, and connective tissues. Our rheumatologists treat conditions such as rheumatoid arthritis, lupus, and fibromyalgia.' },
        { name: 'Rehabilitation Services', tag: 'Treatments', description: 'Comprehensive rehabilitation programs including physical, occupational, and speech therapy. Our multidisciplinary team helps patients recover function and independence after injury, illness, or surgery.', url: 'https://mjdemarco65.github.io/prototyping/rehabilitation/rehabilitation.html' }
    ],
    'S': [
        { name: 'Surgery', tag: 'Services', description: 'Comprehensive surgical services including general surgery, minimally invasive procedures, and robotic surgery. Our experienced surgeons use advanced techniques to provide safe, effective surgical care with faster recovery times.' },
        { name: 'Sleep Medicine', tag: 'Services', description: 'Specialized care for sleep disorders including sleep apnea, insomnia, and restless leg syndrome. Our sleep specialists provide comprehensive evaluation and treatment to improve sleep quality and overall health.' },
        { name: 'Stroke Care', tag: 'Treatments', description: 'Comprehensive stroke treatment including emergency care, rehabilitation, and prevention strategies. Our stroke team provides rapid intervention and coordinated care to minimize brain damage and optimize recovery.' }
    ],
    'T': [
        { name: 'Transplant Services', tag: 'Services', description: 'Comprehensive organ transplant programs including evaluation, surgery, and long-term follow-up care. Our transplant team provides expert care for kidney, liver, heart, and other organ transplants.' },
        { name: 'Thyroid Disorders', tag: 'Conditions', description: 'Conditions affecting thyroid function including hyperthyroidism, hypothyroidism, and thyroid nodules. Our endocrinologists provide comprehensive evaluation and treatment to restore normal thyroid function.' },
        { name: 'Trauma Surgery', tag: 'Services', description: 'Emergency surgical care for severe injuries and trauma. Our trauma surgeons are available 24/7 to provide life-saving surgical interventions and coordinate comprehensive trauma care.' }
    ],
    'U': [
        { name: 'Urology', tag: 'Services', description: 'Specialized care for conditions affecting the urinary system and male reproductive organs. Our urologists provide medical and surgical treatment for kidney stones, prostate conditions, and urologic cancers.', url:'https://mjdemarco65.github.io/prototyping/small-service/small-service-urology-final.html' },
        { name: 'Ultrasound', tag: 'Medical Tests', description: 'Non-invasive imaging using sound waves to visualize internal organs and structures. This safe and painless procedure is used for diagnosis, monitoring pregnancy, and guiding medical procedures.' }
    ],
    'V': [
        { name: 'Vascular Surgery', tag: 'Services', description: 'Specialized surgical care for blood vessel conditions including aneurysms, blockages, and varicose veins. Our vascular surgeons use both traditional and minimally invasive techniques to restore proper blood flow.' },
        { name: 'Vaccination Services', tag: 'Treatments', description: 'Comprehensive immunization programs for children and adults including routine vaccines, travel vaccines, and specialized immunizations. Our vaccination services help prevent serious infectious diseases.' }
    ],
    'W': [
        { name: 'Wound Care', tag: 'Treatments', description: 'Specialized treatment for chronic and complex wounds including diabetic ulcers, pressure sores, and surgical wounds. Our wound care specialists use advanced therapies to promote healing and prevent complications.' },
        { name: 'Women\'s Health', tag: 'Services', description: 'Comprehensive healthcare services for women including gynecology, obstetrics, and reproductive health. Our women\'s health specialists provide personalized care throughout all stages of a woman\'s life.' }
    ],
    'Y': [
        { name: 'Youth Mental Health', tag: 'Services', description: 'Specialized mental health services for children and adolescents. Our child psychiatrists and psychologists provide age-appropriate treatment for anxiety, depression, ADHD, and other mental health conditions in young people.' }
    ]
};

// Get letters that have no data for disabled state
const emptyLetters = ['J', 'Q', 'X', 'Z'];

// Current filter state
let currentFilter = 'all';
let currentLetter = null;
let activeCategories = new Set(); // Track which categories are selected

// Get all medical items in a flat array
function getAllMedicalItems() {
    return Object.values(medicalData).flat();
}

// Function to create a result card HTML
function createResultCard(item) {
    const isClickable = item.url ? 'clickable-result' : '';
    const clickHandler = item.url ? `onclick="window.location.href='${item.url}'"` : '';
    const cursorStyle = item.url ? 'cursor: pointer;' : '';
    
    return `
        <div class="results2 ${isClickable}" ${clickHandler} style="${cursorStyle}">
            <div class="results-result">
                <div class="content">
                    <div class="info">
                        <div class="info2">
                            <div class="tags-title">
                                <div class="tags">
                                    <div class="tags2">
                                        <div class="tag">${item.tag}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="container23">
                                <div class="service-name">${item.name}${item.url ? ' <span class="external-link-icon">↗</span>' : ''}</div>
                                <div class="description">${item.description}</div>
                                ${item.url ? '<div class="click-hint">Click to learn more</div>' : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to display results
function displayResults(items) {
    const resultsContainer = document.getElementById('results-container');
    
    if (items.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>Try selecting a different letter or view all results.</p>
            </div>
        `;
        updateResultsCount(0, 0, 0);
        return;
    }

    // Create HTML for all items
    const resultsHTML = items.map(item => createResultCard(item)).join('');
    resultsContainer.innerHTML = resultsHTML;
    
    // Update results count
    const total = items.length;
    const start = total > 0 ? 1 : 0;
    const end = Math.min(10, total); // Assuming we show 10 per page
    updateResultsCount(start, end, total);
}

// Function to update results count display
function updateResultsCount(start, end, total) {
    document.getElementById('results-start').textContent = start;
    document.getElementById('results-end').textContent = end;
    document.getElementById('results-total').textContent = total;
}

// Function to update category counts in filters
function updateCategoryCounts() {
    const allItems = getAllMedicalItems();
    const counts = {
        'Services': 0,
        'Conditions': 0,
        'Treatments': 0,
        'Medical Tests': 0
    };
    
    allItems.forEach(item => {
        if (counts.hasOwnProperty(item.tag)) {
            counts[item.tag]++;
        }
    });
    
    document.getElementById('services-count').textContent = counts['Services'];
    document.getElementById('conditions-count').textContent = counts['Conditions'];
    document.getElementById('treatments-count').textContent = counts['Treatments'];
    document.getElementById('tests-count').textContent = counts['Medical Tests'];
}

// Function to filter by letter
function filterByLetter(letter) {
    // Check if the letter is disabled
    if (emptyLetters.includes(letter)) {
        return;
    }
    
    // Remove active class from all buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Remove active class from view all button
    document.querySelector('.view-all-button').classList.remove('active');
    
    // Add active class to clicked button
    const clickedButton = document.querySelector(`[data-letter="${letter}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
    
    // Update current state
    currentLetter = letter;
    
    // Get and display items for the selected letter
    const items = medicalData[letter] || [];
    displayResults(items);
}

// Function to filter by category
function filterByCategory() {
    if (activeCategories.size === 0) {
        // No categories selected, show all results
        showAllResults();
        return;
    }
    
    // Get items that match selected categories
    const allItems = getAllMedicalItems();
    const filteredItems = allItems.filter(item => activeCategories.has(item.tag));
    
    // Clear letter selection when filtering by category
    document.querySelectorAll('.letter-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector('.view-all-button').classList.remove('active');
    
    currentLetter = null;
    displayResults(filteredItems);
}

// Function to show all results
function showAllResults() {
    // Remove active class from all letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to view all button
    document.querySelector('.view-all-button').classList.add('active');
    
    // Update current state
    currentLetter = null;
    
    // Display all items (filtered by categories if any are selected)
    if (activeCategories.size > 0) {
        filterByCategory();
    } else {
        const allItems = getAllMedicalItems();
        displayResults(allItems);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Update category counts
    updateCategoryCounts();
    
    // Display all results initially
    showAllResults();
    
    // Add click event listeners to letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        const letter = button.getAttribute('data-letter');
        
        // Check if this letter has no data and mark as disabled
        if (emptyLetters.includes(letter)) {
            button.classList.add('disabled');
        } else {
            // Only add click listener to enabled buttons
            button.addEventListener('click', () => filterByLetter(letter));
        }
    });
    
    // Add click event listener to "View all" button
    document.querySelector('.view-all-button').addEventListener('click', showAllResults);
    
    // Add category filtering to checkboxes
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            const box = this.querySelector('.empty-box');
            const filterText = this.querySelector('.filter-text').textContent;
            
            // Extract category name from filter text (e.g., "Services (34)" -> "Services")
            let category = filterText.split(' (')[0];
            
            // Handle the "Medical Tests" case
            if (category === 'Medical Tests') {
                category = 'Medical Tests';
            }
            
            const isChecked = box.style.backgroundColor === 'rgb(0, 58, 150)';
            
            if (isChecked) {
                // Uncheck the box
                box.style.backgroundColor = '#ffffff';
                box.innerHTML = '';
                activeCategories.delete(category);
            } else {
                // Check the box
                box.style.backgroundColor = '#003a96';
                box.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                activeCategories.add(category);
            }
            
            // Apply category filter
            filterByCategory();
        });
    });
    
    // Add click handler for clear filters button
    document.querySelector('.tertiary-button').addEventListener('click', function() {
        // Reset all checkboxes
        document.querySelectorAll('.empty-box').forEach(box => {
            box.style.backgroundColor = '#ffffff';
            box.innerHTML = '';
        });
        
        // Clear active categories
        activeCategories.clear();
        
        // Show all results
        showAllResults();
    });
    
    // Initialize typeahead functionality
    initializeTypeahead();
    
    // Initialize clear search functionality
    initializeClearSearch();
});

// Typeahead functionality
let typeaheadTimeout;
let currentHighlightIndex = -1;

function initializeTypeahead() {
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('typeahead-dropdown');
    
    if (!searchInput || !dropdown) return;
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        
        // Clear previous timeout
        clearTimeout(typeaheadTimeout);
        
        if (query.length < 2) {
            hideTypeahead();
            return;
        }
        
        // Debounce the search
        typeaheadTimeout = setTimeout(() => {
            performTypeaheadSearch(query);
        }, 200);
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        const dropdown = document.getElementById('typeahead-dropdown');
        const items = dropdown.querySelectorAll('.typeahead-item');
        
        if (!dropdown.classList.contains('show') || items.length === 0) return;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentHighlightIndex = Math.min(currentHighlightIndex + 1, items.length - 1);
                updateHighlight(items);
                break;
            case 'ArrowUp':
                e.preventDefault();
                currentHighlightIndex = Math.max(currentHighlightIndex - 1, -1);
                updateHighlight(items);
                break;
            case 'Enter':
                e.preventDefault();
                if (currentHighlightIndex >= 0 && items[currentHighlightIndex]) {
                    selectTypeaheadItem(items[currentHighlightIndex]);
                }
                break;
            case 'Escape':
                hideTypeahead();
                break;
        }
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            hideTypeahead();
        }
    });
}

function performTypeaheadSearch(query) {
    const allItems = getAllMedicalItems();
    const results = allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.tag.toLowerCase().includes(query.toLowerCase())
    );
    
    displayTypeaheadResults(results.slice(0, 8)); // Limit to 8 results
}

function displayTypeaheadResults(results) {
    const dropdown = document.getElementById('typeahead-dropdown');
    currentHighlightIndex = -1;
    
    if (results.length === 0) {
        dropdown.innerHTML = '<div class="no-results-typeahead">No matching services found</div>';
        dropdown.classList.add('show');
        return;
    }
    
    const resultsHTML = results.map((item, index) => `
        <div class="typeahead-item" data-index="${index}" data-name="${item.name}" data-tag="${item.tag}" data-url="${item.url || ''}">
            <div class="typeahead-item-name">${highlightMatch(item.name, document.getElementById('search-input').value)}${item.url ? ' <span class="external-link-icon">↗</span>' : ''}</div>
            <div class="typeahead-item-tag">${item.tag}</div>
            <div class="typeahead-item-description">${highlightMatch(item.description, document.getElementById('search-input').value)}</div>
        </div>
    `).join('');
    
    dropdown.innerHTML = resultsHTML;
    dropdown.classList.add('show');
    
    // Add click handlers to typeahead items
    dropdown.querySelectorAll('.typeahead-item').forEach(item => {
        item.addEventListener('click', () => selectTypeaheadItem(item));
    });
}

function highlightMatch(text, query) {
    if (!query || query.length < 2) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

function updateHighlight(items) {
    items.forEach((item, index) => {
        item.classList.toggle('highlighted', index === currentHighlightIndex);
    });
}

function selectTypeaheadItem(item) {
    const name = item.dataset.name;
    const tag = item.dataset.tag;
    const url = item.dataset.url;
    
    // If item has URL, navigate directly to it
    if (url && url !== '') {
        window.location.href = url;
        return;
    }
    
    // Set the search input value
    document.getElementById('search-input').value = name;
    
    // Hide the typeahead
    hideTypeahead();
    
    // Filter results to show only this item
    const allItems = getAllMedicalItems();
    const selectedItem = allItems.find(medItem => medItem.name === name && medItem.tag === tag);
    
    if (selectedItem) {
        // Clear all other filters
        activeCategories.clear();
        document.querySelectorAll('.empty-box').forEach(box => {
            box.style.backgroundColor = '#ffffff';
            box.innerHTML = '';
        });
        
        // Clear letter selection
        document.querySelectorAll('.letter-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector('.view-all-button').classList.remove('active');
        
        // Display only the selected item
        displayResults([selectedItem]);
    }
}

function hideTypeahead() {
    const dropdown = document.getElementById('typeahead-dropdown');
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
    currentHighlightIndex = -1;
}

// Clear search when X button is clicked
function initializeClearSearch() {
    const clearButton = document.querySelector('.x .g-6-buttons-light');
    const searchInput = document.getElementById('search-input');
    
    if (clearButton && searchInput) {
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            hideTypeahead();
            showAllResults(); // Show all results when search is cleared
        });
    }
}
