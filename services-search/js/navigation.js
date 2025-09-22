document.addEventListener('DOMContentLoaded', function() {
  const alertBanner = document.getElementById('global-nav-alert-banner');
  const alertStrip = document.getElementById('global-nav-alert-strip');
  const closeButton = document.getElementById('global-nav-alert-close');
  
  // Alert banner close functionality
  closeButton.addEventListener('click', function() {
    alertBanner.style.display = 'none';
    alertStrip.style.display = 'block';
  });

  // Get Care dropdown functionality
  const getCareNavItem = document.getElementById('get-care-nav-item');
  const getCareDropdown = document.getElementById('get-care-dropdown');
  const getCareChevron = document.getElementById('get-care-chevron');
  let isGetCareOpen = false;

  getCareNavItem.addEventListener('click', function() {
    if (isGetCareOpen) {
      // Close Get Care dropdown
      getCareDropdown.style.display = 'none';
      getCareChevron.style.transform = 'rotate(0deg)';
      isGetCareOpen = false;
    } else {
      // Close other dropdowns first, then open Get Care
      closeOtherDropdowns('get-care');
      getCareDropdown.style.display = 'block';
      getCareChevron.style.transform = 'rotate(180deg)';
      isGetCareOpen = true;
    }
  });

  // Services dropdown functionality
  const servicesNavItem = document.getElementById('services-nav-item');
  const servicesDropdown = document.getElementById('services-dropdown');
  const servicesChevron = document.getElementById('services-chevron');
  let isServicesOpen = false;

  servicesNavItem.addEventListener('click', function() {
    if (isServicesOpen) {
      // Close Services dropdown
      servicesDropdown.style.display = 'none';
      servicesChevron.style.transform = 'rotate(0deg)';
      isServicesOpen = false;
    } else {
      // Close other dropdowns first, then open Services
      closeOtherDropdowns('services');
      servicesDropdown.style.display = 'block';
      servicesChevron.style.transform = 'rotate(180deg)';
      isServicesOpen = true;
    }
  });

  // Patients dropdown functionality
  const patientsNavItem = document.getElementById('patients-nav-item');
  const patientsDropdown = document.getElementById('patients-dropdown');
  const patientsChevron = document.getElementById('patients-chevron');
  let isPatientsOpen = false;

  patientsNavItem.addEventListener('click', function() {
    if (isPatientsOpen) {
      // Close Patients dropdown
      patientsDropdown.style.display = 'none';
      patientsChevron.style.transform = 'rotate(0deg)';
      isPatientsOpen = false;
    } else {
      // Close other dropdowns first, then open Patients
      closeOtherDropdowns('patients');
      patientsDropdown.style.display = 'block';
      patientsChevron.style.transform = 'rotate(180deg)';
      isPatientsOpen = true;
    }
  });

  // Function to close other dropdowns (not the one being opened)
  function closeOtherDropdowns(except) {
    // Close Get Care if it's not the one being opened
    if (except !== 'get-care' && isGetCareOpen) {
      getCareDropdown.style.display = 'none';
      getCareChevron.style.transform = 'rotate(0deg)';
      isGetCareOpen = false;
    }
    
    // Close Services if it's not the one being opened
    if (except !== 'services' && isServicesOpen) {
      servicesDropdown.style.display = 'none';
      servicesChevron.style.transform = 'rotate(0deg)';
      isServicesOpen = false;
    }
    
    // Close Patients if it's not the one being opened
    if (except !== 'patients' && isPatientsOpen) {
      patientsDropdown.style.display = 'none';
      patientsChevron.style.transform = 'rotate(0deg)';
      isPatientsOpen = false;
    }
  }

  // Function to close all dropdowns
  function closeAllDropdowns() {
    // Close Get Care
    if (isGetCareOpen) {
      getCareDropdown.style.display = 'none';
      getCareChevron.style.transform = 'rotate(0deg)';
      isGetCareOpen = false;
    }
    
    // Close Services
    if (isServicesOpen) {
      servicesDropdown.style.display = 'none';
      servicesChevron.style.transform = 'rotate(0deg)';
      isServicesOpen = false;
    }
    
    // Close Patients
    if (isPatientsOpen) {
      patientsDropdown.style.display = 'none';
      patientsChevron.style.transform = 'rotate(0deg)';
      isPatientsOpen = false;
    }
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!getCareNavItem.contains(event.target) && !getCareDropdown.contains(event.target) &&
        !servicesNavItem.contains(event.target) && !servicesDropdown.contains(event.target) &&
        !patientsNavItem.contains(event.target) && !patientsDropdown.contains(event.target)) {
      closeAllDropdowns();
    }
  });
});

