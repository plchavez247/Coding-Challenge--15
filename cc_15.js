//Task 1 - Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
const riskForm = document.getElementById("riskForm");
console.log("Risk Dashboard Loaded")
//Task 2 - Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department){
    const riskDashboard = docuemtn .getElementById("riskDashboard");
    const riskCard = document.createElement("div");
    riskCard.setAttribute("class","risk-card");
    const titleHeading =document.createElement("h3");
    titleHeading.textContent = ` Risk name: ${riskName}`;
    const riskSeverity  = document.createElement("p");
    riskSeverity.textContent = `Risk Level: ${riskLevel}`;
    const departmentParagraph = document.createElement("p");
    departmentParagraph.textContent = `Department: ${department}`;

    //Task 4: Categorizing Risks by Level
     if(riskLevel === "Low"){
        riskCard.classList.add("low-severity");
     } else if (riskLevel === "Medium"){
        riskCard.classList.add("medium-severity")
     } else if (riskLevel === "High"){
        riskCard.classList.add("high-severity")
     }//Categorized risk level by color

     //Task 3: removing Risk Items
     const resolveButton = document.createElement("button");
     resolveButton.textContent = "Resolve";
     resolveButton.classList.add("resolve-button");
     resolveButton.addEventListener("click", function(){
        riskDashboard.removeChild(riskCard);
     });

     //Task 6: Handling Event Propagation
     riskCard.addEventListener("click", function (event){
        event.stopPropagation();
        console.log("Risk Card Clicked")
     });

     riskCard.appendChild(nameHeading);
     riskCard.appendChild(riskSeverity);
     riskCard.appendChild(departmentParagraph);
     riskCard.appendChild(resolveButton);// Appending the elements
     riskDashboard.appendChild(riskCard);// New risk card to the dashboard;


}

riskForm.addEventListener("submit", (event) => {
    event.preventdefault();
    const riskName = document.getElementBy("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, department, riskLevel);
    riskForm.reset();//event listener for form submission
});

//Task 5: Implementing Bulk Updates

increaseRiskButton.addEventListener("click", function(){
    const riskCards = document.querySelectorAll(".risk-card");
    riskCards.forEach((riskCard) =>{
        const riskLevelParagraph = riskCard.querySelector("p:last-of-type");//looked up what last-of-type is , it selects the last <p> element
        let currentRiskLevel = riskLevelParagraph.textContent.replace("Risk Level: ", ""); //replacing text content
         if(currentRiskLevel === "Low"){
            currentRiskLevel = "Medium";
            riskCard.classList.remove("low-risk");
            riskCard.classList.add("medium-risk");
         } else if (currentRiskLevel=== "Medium"){
            currentRiskLevel = "High";
            riskCard.classList.remove("medium-risk");
            riskCard.classList.add("high-risk");
         }
         riskLevelParagraph.textContent = `Risk Level: ${currentRiskLevel}`;
    });
});
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");