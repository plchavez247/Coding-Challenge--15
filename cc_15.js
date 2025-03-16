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


}