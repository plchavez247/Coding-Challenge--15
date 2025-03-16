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
