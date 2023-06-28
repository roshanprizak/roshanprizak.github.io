
    // Generate the JavaScript array dynamically
    var actors = ["N. T. Rama Rao", "Akkineni Nageswara Rao", "Krishna", "Rajendra Prasad", "Chiranjeevi", "Sobhan Babu", "Nandamuri Balakrishna", "Jagapathi Babu", "Nagarjuna", "Daggubati Venkatesh", "Krishnam Raju", "Srikanth", "Mohan Babu", "Kanta Rao", "Ravi Teja", "Rajasekhar", "Chandra Mohan", "Allari Naresh", "Suman", "Jaggayya", "Sivaji", "Naresh", "Jr. NTR", "Gummadi", "Srihari", "Nithiin", "Mahesh Babu", "Pawan Kalyan", "Sumanth", "Nani", "Gopichand", "Murali Mohan", "Kamal Haasan", "Prabhas", "Sharwanand", "Tarun", "J. D. Chakravarthy", "Allu Arjun", "Vishnu Manchu", "Kalyan Ram", "Varun Sandesh", "Naga Chaitanya", "Navdeep", "Suresh", "Sundeep Kishan", "Naga Shourya", "Vinod Kumar", "Nara Rohit", "Aadi", "V. Nagayya", "S. V. Ranga Rao", "Uday Kiran", "Sunil", "Nikhil Siddharth", "R. Narayana Murthy", "Raj Tarun", "Sai Dharam Tej", "K. Raghuramaiah", "Rajinikanth", "Venu", "Manoj Manchu", "Ram Charan", "C. H. Narayana Rao", "Bhanuchander", "Ali", "Vadde Naveen", "Siddharth", "Chalam", "Vikram"];

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
    