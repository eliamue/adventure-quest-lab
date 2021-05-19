
// using a form would've made madlibs way easier! It's really good for when you have lots of input fields
const form = document.querySelector('#user-form');
// const button = document.querySelector('#button');

form.addEventListener('submit', (event) => {
  //'event' here is a booger, but 'e' is often used
    event.preventDefault();
    const formData = new FormData(form);
    //^looks just like query parameters
    const user = formData.get('username');
    const userClass = formData.get('user-class');

    console.log(user, userClass);
    // 1. Get the user's class and name from the form
    // 2. Put that info in localStorage
    //     -Class
    //     -Race
    //     -Name
    //     -completed {}
    //     -initial gold
    //     -initial hp
    // 3. Redirect to the quest list page/map
    window.location = '.list';
});

// button.addEventListener('click', () => {


// });