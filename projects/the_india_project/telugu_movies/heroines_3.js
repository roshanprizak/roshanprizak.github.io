
    // Generate the JavaScript array dynamically
    var actors = ["Jayasudha", "Jamuna", "Vijayashanti", "Savitri", "Vanisri", "Sridevi", "Anjali Devi", "Krishna Kumari", "Jaya Prada", "Soundarya", "Ramya Krishna", "Meena", "Radha", "Sharada", "P. Bhanumathi", "Bhanupriya", "Suhasini", "Kajal Aggarwal", "Vijaya Nirmala", "Raadhika", "Raasi", "Charmy Kaur", "Anushka Shetty", "Sowcar Janaki", "Tamannaah", "Shobana", "B. Saroja Devi", "Roja", "Samantha", "Kanchana", "Manjula", "Madhavi", "Rajani", "Shriya Saran", "G. Varalakshmi", "Lakshmi", "Devika", "Trisha Krishnan", "Jayalalithaa", "Simran", "Bhoomika Chawla", "Rakul Preet Singh", "Rambha", "Rajasulochana", "Nayantara", "Priyamani", "Raashi Khanna", "S. Varalakshmi", "Nagma", "Lavanya Tripathi", "C. Krishnaveni", "C. Lakshmi Rajyam", "Sriranjani Jr.", "Jayachitra", "Sujatha", "Sumalatha", "Kalyani", "Sanghavi", "Laya", "Ileana D'Cruz", "Regina Cassandra", "Gautami", "Aamani", "Genelia D'Souza", "Vani Viswanath", "Sneha", "Shruti Haasan", "Chandrakala", "Amala"];

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
    