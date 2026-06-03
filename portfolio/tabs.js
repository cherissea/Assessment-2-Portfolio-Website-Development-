//Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

      //Select all tab buttons and tab content sections
      const tabs = document.querySelectorAll('[data-target]'),
        tabsContents = document.querySelectorAll('[data-content]');

   //Add click event to each tab button
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

       //Get the target content linked to the clicked tab
      const targetSelector = tab.dataset.target,
            targetContent = document.querySelector('#' + targetSelector);

      //Remove active class from all content sections
      tabsContents.forEach((content) => content.classList.remove('act'));
      //Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove('act'));

      //Add active class to the selected tab
      tab.classList.add('act');
       //Display the selected content section
      targetContent.classList.add('act');
    });
  });
});
