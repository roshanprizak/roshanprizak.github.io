
    // Generate the JavaScript array dynamically
    var actors = ["Jayasudha", "Jamuna", "Vijayashanti", "Savitri", "Vanisri", "Anjali Devi", "Sridevi", "Krishna Kumari", "Jaya Prada", "Soundarya", "Ramya Krishna", "Meena", "Radha", "Sharada", "P. Bhanumathi", "Bhanupriya", "Suhasini", "Kajal Aggarwal", "Vijaya Nirmala", "Raadhika", "Raasi", "Charmy Kaur", "Sowcar Janaki", "Anushka Shetty", "Tamannaah", "B. Saroja Devi", "Shobana", "Roja", "Shriya Saran", "Samantha", "G. Varalakshmi", "Kanchana", "Manjula", "Madhavi", "Rajani", "Lakshmi", "Devika", "Jayalalithaa", "Trisha Krishnan", "Simran", "Bhoomika Chawla", "Rakul Preet Singh", "Rambha", "Priyamani", "Rajasulochana", "Nayantara", "Raashi Khanna", "S. Varalakshmi", "Sujatha", "Nagma", "Lavanya Tripathi", "C. Krishnaveni", "C. Lakshmi Rajyam", "Sriranjani Jr.", "Jayachitra", "Sumalatha", "Kalyani", "Sanghavi", "Laya", "Ileana D'Cruz", "Regina Cassandra", "Gautami", "Aamani", "Genelia D'Souza", "Vani Viswanath", "Sneha", "Shruti Haasan", "Chandrakala", "Amala"];

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
    