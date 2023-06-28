
    // Generate the JavaScript array dynamically
    var actors = ["Jeetendra", "Dharmendra", "Mithun Chakraborty", "Ashok Kumar", "Dev Anand", "Rajesh Khanna", "Shashi Kapoor", "Mahipal", "Govinda", "Akshay Kumar", "Amitabh Bachchan", "P. Jairaj", "Sanjeev Kumar", "Sunil Dutt", "Rajendra Kumar", "Salman Khan", "Shammi Kapoor", "Ajay Devgn", "Bharat Bhushan", "Pradeep Kumar", "Rishi Kapoor", "Anil Kapoor", "Kishore Kumar", "Sanjay Dutt", "Raj Kapoor", "Balraj Sahni", "Vinod Khanna", "Trilok Kapoor", "Sunny Deol", "Jackie Shroff", "Dilip Kumar", "Shatrughan Sinha", "Raj Babbar", "Shah Rukh Khan", "Motilal", "Ajit", "Dara Singh", "Manoj Kumar", "Shahu Modak", "Karan Dewan", "Manhar Desai", "Vinod Mehra", "Naseeruddin Shah", "Prem Adib", "Aamir Khan", "Saif Ali Khan", "John Cawas", "Prithviraj Kapoor", "Ranjan", "Biswajeet", "Joy Mukherjee", "Sunil Shetty", "Sanjay Khan", "Shahid Kapoor", "Raaj Kumar", "Feroz Khan", "Ishwarlal", "Nasir Khan", "Abhishek Bachchan", "Emraan Hashmi", "Surendra", "Sachin", "John Abraham", "Bhagwan", "Rehman", "Abhi Bhattacharya", "Rakesh Roshan"];

    // Generate the HTML code dynamically
    var html = "";
    html += `<b>High+ confidence dataset.</b>
    <br>`;

    for (var i = 0; i < actors.length; i++) {
        var actor = actors[i];
        var avatarImagePath = `avatars/${actor}.jpg`;
        var figureImagePath = `hero_plots/${actor}_3.png`;
        
        html += `
        <a href="${figureImagePath}" class="lightbox hero-link" title="${actor}" data-gallery="my-gallery">
            <img src="${avatarImagePath}" width="60px" height="60px">
        </a>
        `;
    }

    // Insert the generated HTML code into the desired element on your web page
    document.getElementById("heroes-section-high-confidence").innerHTML = html;
    