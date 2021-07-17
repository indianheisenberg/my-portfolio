import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  projects: any = [
    {
      name: 'Webiknowr',
      description:
        'A complete webinar solution application where user can attend webinars and also post new webinar.',
      features:
        'Free Webinar Listings, Free webinar submission, webinar management dashboard, free registrants leads, etc.',
      techList : ['Angular','Bootstrap','JAVA', 'Springboot','MySql','Firebase'],
      link: 'https://www.webiknowr.com',
      imageLink:'../assets/webiknowr_img.png'
    },
    {
      name: 'Vaccine Slots',
      description:
        'A tool which gives information on next available covid19 vaccination slots in a particular district or pincode.',
      features: 'No registration needed, Easy to search, built using public APIs provided by the government of India',
      techList : ['Angular','Bootstrap','Firebase'],
      link: 'https://vaccine-slot.web.app',
      imageLink:'../assets/vaccine-slots_img.png'
    },
    {
      name: 'My Task App',
      description:
        'A task planner application to add tasks with reminders.',
      features: 'Add tasks with detailed messages and set reminders.',
      techList : ['ReactJs','Bootstrap','Firebase'],
      link: 'https://task-planner-9c382.web.app',
      imageLink:'../assets/task-planner_ss.JPG'
    },
   
  ];

  devLogos: any = [
    { image: '../assets/angular_logo.png', name: 'Angular', skill:'dev',width:'55px' },
    { image: '../assets/js_logo.png', name: 'Javascript' , skill:'dev' ,width:'50px'},
    { image: '../assets/css_logo.png', name: 'CSS', skill:'dev',width:'50px' },
    { image: '../assets/html_logo.png', name: 'HTML', skill:'dev' ,width:'50px'},
    { image: '../assets/bootstrap_logo.png', name: 'Bootstrap', skill:'dev' ,width:'55px'},
    { image: '../assets/java_logo.png', name: 'JAVA', skill:'dev' ,width:'70px'},
    { image: '../assets/springboot_logo.png', name: 'Springboot' , skill:'dev',width:'85px'},
    { image: '../assets/react_logo.png', name: 'ReactJs', skill:'dev',width:'85px' },
    { image: '../assets/mysql_logo.png', name: 'MySql', skill:'dev' ,width:'85px'},
    { image: '../assets/mongo_logo.png', name: 'MongoDB', skill:'dev' ,width:'55px'},
    // { image: '../assets/git_logo.png', name: 'GIT', skill:'dev' ,width:'55px'},

  ];

  toolLogos: any = [
    
    { image: '../assets/maven_logo.png', name: 'Maven', skill:'tools' ,width:'55px'},
    { image: '../assets/tomcat_logo.png', name: 'Apache Tomcat', skill:'tools' ,width:'55px'},
    // { image: '../assets/jenkins_logo.png', name: 'Jenkins' , skill:'tools',width:'50px'},
   
    { image: '../assets/firebase_logo.png', name: 'Firebase', skill:'tools' ,width:'55px'},
    { image: '../assets/aws_logo.png', name: 'AWS', skill:'tools',width:'55px' },
    { image: '../assets/github_logo.png', name: 'Github', skill:'tools',width:'55px' },
    { image: '../assets/postman_logo.png', name: 'Postman', skill:'tools',width:'55px' },
    { image: '../assets/vscode_logo.png', name: 'VS Code', skill:'tools',width:'55px' },
    { image: '../assets/excel_logo.png', name: 'MS Excel', skill:'tools',width:'55px' },
  ];


  getTechImage(tech){
    console.log(tech)

    for(let i=0;i<this.devLogos.length;i++){
      if(this.devLogos[i].name === tech){
        return this.devLogos[i].image;
      }
    }

    for(let i=0;i<this.toolLogos.length;i++){
      if(this.toolLogos[i].name === tech){
        return this.devLogos[i].image;
      }
    }
  }

  contactForm : FormGroup;
  constructor(private fb : FormBuilder){

  }

  ngOnInit(){
    this.contactForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      message:['',Validators.required],
    })
  }

  successMessage = false;
  submitMessage(){
   // console.log(this.contactForm);
   if(this.contactForm.valid){
     this.successMessage = true;

     setTimeout(()=>{
      this.successMessage = false;
     },4000)
   }


  }


//   @HostListener("window:scroll", []) onWindowScroll() {
//     this.scrollFunction();
//   }
//   // When the user scrolls down 20px from the top of the document, show the button
// scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// } 
}
