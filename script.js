const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        preview.src = event.target.result; // Set the image source to the result
        preview.style.display = 'block'; // Show the image
    }

    if (file) {
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

function generate(event) 
{
    //form validation
        event.preventDefault(); // Prevent form from submitting
    
        const form = document.querySelector('.inputField');
    
        // Check if the form is valid
        if (!form.checkValidity()) 
        {
            form.reportValidity(); // Show validation messages for invalid fields
            return; // Stop the function if the form is invalid
        }





    /*get basic details*/
    const name = document.querySelector('input[name="name"]').value;
    const profile = document.getElementById('profile').value;
    const mobile = document.querySelector('input[name="mobile"]').value;
    const gmail = document.querySelector('input[name="gmail"]').value;
    const address = document.querySelector('textarea[name="address"]').value;

    /*get EDUCATION input*/
    const degree = document.getElementById('degree').value;
    const college = document.querySelector('input[name="college"]').value;
    const stream = document.querySelector('input[name="stream"]').value;
    const cgpa = document.querySelector('input[name="cgpa"]').value;

    /*get links*/
    const linkedin = document.querySelector("input[name='linkedin']").value;
    const instagram = document.querySelector("input[name='instagram']").value;
    const leetcode = document.querySelector("input[name='leetcode']").value;


    /*get skills details*/
    const skills = document.querySelector('textarea[name="skills"]').value;
    const hobbies = document.querySelector('textarea[name="hobbies"]').value;
    /*get experinece */
    const expYears = document.querySelector('select[name="exp_years"]').value;
    const experience = document.querySelector('textarea[name="experience"]').value;

    // Get the project file
    const projects = document.querySelector('textarea[name="projects"]').value;
    const projectFile = document.getElementById('projectFile').files[0];
    let projectFileLink = '';
    if (projectFile) {
        projectFileLink = URL.createObjectURL(projectFile);
    }
    //get acheivements
    const achievements = document.querySelector('textarea[name="acheivements"]').value;

    // Create new window
    const newWindow = window.open('', '_blank');

    //create output container
    const outputContainer = document.querySelector(".output_container");
    const resumeHTML = `
    
     <head>
            <title>Resume</title>
             <link rel="stylesheet" href="style.css">

        </head>
            <div class="output">
                <div class="heading">
                    <h2 id="heading_name">${name}</h2>   
                    
                     <p>${profile}</p> 
                     <p>${address}</p>
                     <p>${mobile}</p>
                     <p>${gmail}</p>
                        <div class = "image" >  ${preview.src ? `<img src="${preview.src}" alt="Profile Image" style="width: 200px; border-radius: 10px; height:200px; margin-top: -190px; " >` : ''}  </div>   
                </div>    
                <div class = "info">
                    <div class="left">
                       <div class="box">
                         <h3>EDUCATION</h3>
                         <p>${degree}</p>
                         <h4>Branch:</h4>
                         <p>${stream}</p>
                         <h4>College:</h4>
                         <p>${college}</p>
                         <h4>cgpa::</h4>
                         <p>${cgpa}</p>
                       </div>

                       <div class = "box">
                       <h3>Hobbies</h3>
                         <p>${hobbies}</p>
                         <h3>Skills</h3>
                         <p>${skills}</p>
                       </div>

                    </div>
                     <div class="right">
                        <div class="box">
                            <h2>Work-Experience</h2>                           
                           years of experience : <p>${expYears}</p>
                            <p>${experience}</p>
                        </div>
                        <div class="box">
                            <h2>Projects:</h2>                           
                            <p>${projects}</p>
                            ${projectFile ? `<p><strong>Project File:</strong> <a href="${projectFileLink}" target="_blank">${projectFile.name}</a></p>` : ''}
                        </div>
                         <div class="box">
                            <h2>Achievements:S</h2>
                            <p>${achievements}</p>
                        </div>                 
                    </div>               
                </div>
                 <div  style="display: flex; justify-content: space-between;">
                                <div style="flex: 1; padding: 10px;">
                    <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
                </div>
                <div style="flex: 1; padding: 10px;">
                    <p><strong>Instagram:</strong> <a href="${instagram}" target="_blank">${instagram}</a></p>
                </div>
                 <div style="flex: 1; padding: 10px;">
                    <p><strong>LeetCode:</strong> <a href="${leetcode}" target="_blank">${leetcode}</a></p>
                </div>
                        </div>
                
            </div>  
                 `;
                
   
    newWindow.document.open();
    newWindow.document.write(resumeHTML);  
    newWindow.document.close();




}