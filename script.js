// // listing element
// document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
// event.preventDefault();
var _a;
// //type assertion
// const nameElement = document.getElementById('name') as HTMLInputElement;
// const emailElement = document.getElementById('email') as HTMLInputElement;
// const phoneElement = document.getElementById('phone') as HTMLInputElement;
// const educationElement = document.getElementById('education') as HTMLInputElement;
// const experienceElement = document.getElementById('experience') as HTMLInputElement;
// const skillElement = document.getElementById('skill') as HTMLInputElement;
// if (nameElement &&emailElement  &&phoneElement && educationElement&& experienceElement && educationElement){
//     const name = nameElement.value;
//     const email= emailElement.value;
//     const phone=phoneElement.value;
//     const education =  educationElement.value;
//     const experience = experienceElement.value;
//     const skill = skillElement.value;
//     //creating resue output
//     const resumeOutput =
//     <h2>Resume</h2>
//     <p><strong>Name:</strong>${name}</p>
//     <p><strong>Email:</strong>${email}</p>
//     <p> <strong>Phone Number : </strong> ${phone}</p>
//     <h3> Education </h3>
//     <p>$(education)</p>
//     <h3> Experience </h3>
//     <p>$(experience)</p>
//     <h3> Skil </h3>
//     <p>$(skill)</p>;
//     const resumeOutputElement = document.getElementById('resumeOutput')
//     if (resumeOutputElement){
//         resumeOutputElement.innerHTML = resumeOutput
//     }else{
//         console.error('the resume output element are missing')
//     }
//     else{
//         console.error('one or more output are missing')
//     }
// }
// }) 
// Listening for the form submission event
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertions for input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    // Check if all elements exist
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Creating resume output using a template literal
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skill</h3>\n            <p>").concat(skill, "</p>\n        ");
        // Outputting the resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
