
    // Generate the JavaScript array dynamically
    var actors = ["Rekha", "Nirupa Roy", "Hema Malini", "Shabana Azmi", "Mala Sinha", "Meena Kumari", "Shyama", "Geeta Bali", "Nutan", "Mumtaz", "Sharmila Tagore", "Juhi Chawla", "Asha Parekh", "Reena Roy", "Suraiya", "Madhubala", "Vyjayanthimala", "Waheeda Rehman", "Zeenat Aman", "Madhuri Dixit", "Nalini Jaywant", "Nargis", "Dimple Kapadia", "Sridevi", "Manisha Koirala", "Nanda", "Jaya Prada", "Shakila", "Saira Banu", "Raakhee", "Raveena Tandon", "Meenakshi Seshadri", "Karisma Kapoor", "Tabu", "Tanuja", "Smita Patil", "Moushumi Chatterjee", "Kareena Kapoor", "Rani Mukerji", "Sadhana", "Bipasha Basu", "Chitra", "Neetu Singh", "Rati Agnihotri", "Fearless Nadia", "Poonam Dhillon", "Urmila Matondkar", "Priyanka Chopra", "Nimmi", "Padmini Kolhapure", "Kamini Kaushal", "Jaya Bachchan", "Shobhana Samarth", "Parveen Babi", "Aishwarya Rai", "Babita", "Kajol", "Shilpa Shetty", "Kangana Ranaut", "Leena Chandavarkar", "Yogeeta Bali", "Ranjeeta Kaur", "Katrina Kaif", "Rehana", "Usha Kiran", "Kumkum", "Farha Naaz", "Khursheed", "Ameeta", "Anita Raj"];

    // Generate the HTML code dynamically
    var html = "";
    html += `<b>High+ confidence dataset.</b>
    <br>`;

    for (var i = 0; i < actors.length; i++) {
        var actor = actors[i];
        var avatarImagePath = `avatars/${actor}.jpg`;
        var figureImagePath = `heroine_plots/${actor}_3.png`;
        
        html += `
        <a href="${figureImagePath}" class="lightbox hero-link" title="${actor}" data-gallery="my-gallery">
            <img src="${avatarImagePath}" width="60px" height="60px">
        </a>
        `;
    }

    // Insert the generated HTML code into the desired element on your web page
    document.getElementById("heroines-section-high-confidence").innerHTML = html;
    