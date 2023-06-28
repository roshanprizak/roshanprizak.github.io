
    // Generate the JavaScript array dynamically
    var actors = ["N. T. Rama Rao", "Akkineni Nageswara Rao", "Krishna", "Chiranjeevi", "Rajendra Prasad", "Nandamuri Balakrishna", "Sobhan Babu", "Daggubati Venkatesh", "Jagapathi Babu", "Nagarjuna", "Krishnam Raju", "Ravi Teja", "Rajasekhar", "Srikanth", "Mohan Babu", "Kanta Rao", "Chandra Mohan", "Suman", "Allari Naresh", "Jaggayya", "Naresh", "Jr. NTR", "Nithiin", "Pawan Kalyan", "Mahesh Babu", "Sivaji", "Gopichand", "Sumanth", "Srihari", "Nani", "Gummadi", "Prabhas", "Kamal Haasan", "J. D. Chakravarthy", "Sharwanand", "Varun Sandesh", "Murali Mohan", "Tarun", "Kalyan Ram", "Naga Chaitanya", "Naga Shourya", "Vishnu Manchu", "Aadi", "Uday Kiran", "Allu Arjun", "Sunil", "Vinod Kumar", "Navdeep", "Sundeep Kishan", "Raj Tarun", "Sai Dharam Tej", "Suresh", "Manoj Manchu", "Nikhil Siddharth", "Vadde Naveen", "Siddharth", "V. Nagayya", "C. H. Narayana Rao", "Venu", "Tanish", "Nara Rohit", "Vijay Deverakonda", "K. Raghuramaiah", "Bhanuchander", "Ram Charan", "Sudheer Babu", "Sumanth Ashwin", "Chalam"];

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
    