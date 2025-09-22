document.addEventListener('DOMContentLoaded', function() {
  // Search functionality from search-home-complete
  const dropdownTrigger = document.getElementById('search-dropdown-trigger');
  const dropdownMenu = document.getElementById('search-dropdown-menu');
  const dropdownSelected = document.getElementById('search-dropdown-selected');
  const dropdownChevron = document.getElementById('search-dropdown-chevron');
  const dropdownOptions = document.querySelectorAll('.search-home-dropdown-option');
  
  // Search bar elements
  const searchBarAll = document.getElementById('search-bar-all');
  const searchBarDoctors = document.getElementById('search-bar-doctors');
  const searchBarLocations = document.getElementById('search-bar-locations');
  
  let isDropdownOpen = false;
  let currentSearchType = 'all';

  // Toggle dropdown on click
  dropdownTrigger.addEventListener('click', function() {
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Handle option selection
  dropdownOptions.forEach(option => {
    option.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const text = this.textContent;
      
      dropdownSelected.textContent = text;
      currentSearchType = value;
      switchSearchBar(value);
      closeDropdown();
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
      closeDropdown();
    }
  });

  // Handle location input focus (clear 02114 placeholder)
  const locationInputs = document.querySelectorAll('.search-home-location-input');
  locationInputs.forEach(input => {
    // No special handling needed - just use normal placeholder behavior
  });

  function openDropdown() {
    dropdownMenu.style.display = 'block';
    dropdownChevron.style.transform = 'rotate(180deg)';
    isDropdownOpen = true;
  }

  function closeDropdown() {
    dropdownMenu.style.display = 'none';
    dropdownChevron.style.transform = 'rotate(0deg)';
    isDropdownOpen = false;
  }

  function switchSearchBar(type) {
    // Hide all search bars
    searchBarAll.style.display = 'none';
    searchBarDoctors.style.display = 'none';
    searchBarLocations.style.display = 'none';
    
    // Show the selected search bar
    switch(type) {
      case 'all':
        searchBarAll.style.display = 'flex';
        break;
      case 'doctors':
        searchBarDoctors.style.display = 'flex';
        break;
      case 'locations':
        searchBarLocations.style.display = 'flex';
        break;
    }
  }

  // Card hover effects with enhanced animations
  const cards = document.querySelectorAll('.search-home-card');
  cards.forEach(card => {
    card.style.transition = 'all 0.3s ease';
    card.style.cursor = 'pointer';
    
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      
      // Animate the arrow
      const arrow = this.querySelector('.search-home-card-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(4px)';
        arrow.style.transition = 'transform 0.3s ease';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      
      // Reset arrow
      const arrow = this.querySelector('.search-home-card-arrow');
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
    
    // Add click functionality
    card.addEventListener('click', function() {
      const cardTitle = this.querySelector('.search-home-card-title-span').textContent;
      console.log(`Clicked on: ${cardTitle}`);
      // Here you would typically navigate to the appropriate page
    });
  });
  
  // Services block enhanced hover effects
  const serviceItems = document.querySelectorAll('.services-block-accordion-item');
  serviceItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s ease';
    
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f8f9fa';
      
      const caret = this.querySelector('.services-block-caret');
      if (caret) {
        caret.style.transform = 'translateX(4px)';
        caret.style.transition = 'transform 0.3s ease';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      
      const caret = this.querySelector('.services-block-caret');
      if (caret) {
        caret.style.transform = 'translateX(0)';
      }
    });
    
    // Add click functionality
    item.addEventListener('click', function() {
      const serviceName = this.querySelector('.services-block-service-name').textContent.trim();
      console.log(`Clicked on service: ${serviceName}`);
      // Here you would typically navigate to the service page
    });
  });
  
  // Services block button functionality
  const servicesButton = document.querySelector('.services-block-button');
  if (servicesButton) {
    servicesButton.style.cursor = 'pointer';
    servicesButton.style.transition = 'all 0.3s ease';
    
    servicesButton.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    });
    
    servicesButton.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
    
    servicesButton.addEventListener('click', function() {
      console.log('Clicked on: See all services');
      // Here you would typically navigate to the services page
    });
  }
});

