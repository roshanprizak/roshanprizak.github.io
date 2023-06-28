
    // Generate the JavaScript array dynamically
    var actors = ["Dharmendra", "Mithun Chakraborty", "Jeetendra", "Ashok Kumar", "Amitabh Bachchan", "Rajesh Khanna", "Dev Anand", "Akshay Kumar", "Shashi Kapoor", "Govinda", "Sanjeev Kumar", "Mahipal", "Sanjay Dutt", "Sunil Dutt", "Ajay Devgn", "Salman Khan", "P. Jairaj", "Anil Kapoor", "Rishi Kapoor", "Shammi Kapoor", "Vinod Khanna", "Sunny Deol", "Rajendra Kumar", "Bharat Bhushan", "Kishore Kumar", "Jackie Shroff", "Pradeep Kumar", "Balraj Sahni", "Naseeruddin Shah", "Shatrughan Sinha", "Dilip Kumar", "Raj Babbar", "Raj Kapoor", "Dara Singh", "Trilok Kapoor", "Shah Rukh Khan", "Motilal", "Sunil Shetty", "Ajit", "Manoj Kumar", "Prithviraj Kapoor", "Shahu Modak", "Vinod Mehra", "Aamir Khan", "Karan Dewan", "Raaj Kumar", "Saif Ali Khan", "Prem Adib", "Manhar Desai", "Bhagwan", "Biswajeet", "Emraan Hashmi", "Feroz Khan", "John Cawas", "Jimmy Sheirgill", "John Abraham", "Ranjan", "Joy Mukherjee", "Nana Patekar", "Om Puri", "Abhishek Bachchan", "Shahid Kapoor", "Sanjay Khan", "Anupam Kher", "Manoj Bajpai", "Bobby Deol", "Surendra", "Abhi Bhattacharya"];

    // Generate the HTML code dynamically
    var html = "";
    html += `<b>Low+ confidence dataset.</b>
    <br>`;

    for (var i = 0; i < actors.length; i++) {
        var actor = actors[i];
        var avatarImagePath = `avatars/${actor}.jpg`;
        var figureImagePath = `hero_plots/${actor}_1.png`;
        
        html += `
        <a href="${figureImagePath}" class="lightbox hero-link" title="${actor}" data-gallery="my-gallery">
            <img src="${avatarImagePath}" width="60px" height="60px">
        </a>
        `;
    }

    // Insert the generated HTML code into the desired element on your web page
    document.getElementById("heroes-section-low-confidence").innerHTML = html;
    