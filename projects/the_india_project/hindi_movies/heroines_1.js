
    // Generate the JavaScript array dynamically
    var actors = ["Rekha", "Nirupa Roy", "Hema Malini", "Shabana Azmi", "Mala Sinha", "Meena Kumari", "Geeta Bali", "Shyama", "Nutan", "Juhi Chawla", "Mumtaz", "Sharmila Tagore", "Madhubala", "Asha Parekh", "Reena Roy", "Vyjayanthimala", "Suraiya", "Waheeda Rehman", "Zeenat Aman", "Madhuri Dixit", "Nalini Jaywant", "Nargis", "Dimple Kapadia", "Manisha Koirala", "Sridevi", "Nanda", "Saira Banu", "Raakhee", "Jaya Prada", "Shakila", "Raveena Tandon", "Meenakshi Seshadri", "Karisma Kapoor", "Tabu", "Smita Patil", "Tanuja", "Moushumi Chatterjee", "Kareena Kapoor", "Rani Mukerji", "Sadhana", "Bipasha Basu", "Jaya Bachchan", "Rati Agnihotri", "Urmila Matondkar", "Nimmi", "Chitra", "Neetu Singh", "Priyanka Chopra", "Fearless Nadia", "Kamini Kaushal", "Poonam Dhillon", "Padmini Kolhapure", "Shobhana Samarth", "Yogeeta Bali", "Parveen Babi", "Kajol", "Shilpa Shetty", "Aishwarya Rai", "Babita", "Kangana Ranaut", "Kumkum", "Leena Chandavarkar", "Ranjeeta Kaur", "Katrina Kaif", "Rehana", "Usha Kiran", "Ameeta", "Farha Naaz", "Khursheed", "Sarika"];

    // Generate the HTML code dynamically
    var html = "";
    html += `<b>Low+ confidence dataset.</b>
    <br>`;

    for (var i = 0; i < actors.length; i++) {
        var actor = actors[i];
        var avatarImagePath = `avatars/${actor}.jpg`;
        var figureImagePath = `heroine_plots/${actor}_1.png`;
        
        html += `
        <a href="${figureImagePath}" class="lightbox hero-link" title="${actor}" data-gallery="my-gallery">
            <img src="${avatarImagePath}" width="60px" height="60px">
        </a>
        `;
    }

    // Insert the generated HTML code into the desired element on your web page
    document.getElementById("heroines-section-low-confidence").innerHTML = html;
    