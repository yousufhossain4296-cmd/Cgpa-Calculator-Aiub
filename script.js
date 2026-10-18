







// ===============================
// AIUB CGPA Calculator
// ===============================

// Function to convert marks into grade points
function getGradePoint(mark) {

    if (mark > 100 || mark < 0 || isNaN(mark))
        return null;

    if (mark >= 90)
        return 4.00;
    else if (mark >= 85)
        return 3.75;
    else if (mark >= 80)
        return 3.50;
    else if (mark >= 75)
        return 3.25;
    else if (mark >= 70)
        return 3.00;
    else if (mark >= 65)
        return 2.75;
    else if (mark >= 60)
        return 2.50;
    else if (mark >= 50)
        return 2.25;
    else
        return 0.00;
}

// Main Function
function calculateCGPA() {

    // Get marks
    let eng = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let phyTheory = Number(document.getElementById("physicsTheory").value);
    let programming = Number(document.getElementById("programming").value);
    let ics = Number(document.getElementById("ics").value);
    let phyLab = Number(document.getElementById("physicsLab").value);
    let programmingLab = Number(document.getElementById("programmingLab").value);

    // Grade Points
    let gpEng = getGradePoint(eng);
    let gpMath = getGradePoint(math);
    let gpPhyTheory = getGradePoint(phyTheory);
    let gpProgramming = getGradePoint(programming);
    let gpICS = getGradePoint(ics);
    let gpPhyLab = getGradePoint(phyLab);
    let gpProgrammingLab = getGradePoint(programmingLab);

    // Validation
    if (
        gpEng === null ||
        gpMath === null ||
        gpPhyTheory === null ||
        gpProgramming === null ||
        gpICS === null ||
        gpPhyLab === null ||
        gpProgrammingLab === null
    ) {
        alert("Please enter valid marks between 0 and 100.");
        return;
    }

    // Display Grade Points
    document.getElementById("gpEnglish").innerHTML = gpEng.toFixed(2);
    document.getElementById("gpMath").innerHTML = gpMath.toFixed(2);
    document.getElementById("gpPhysicsTheory").innerHTML = gpPhyTheory.toFixed(2);
    document.getElementById("gpProgramming").innerHTML = gpProgramming.toFixed(2);
    document.getElementById("gpICS").innerHTML = gpICS.toFixed(2);
    document.getElementById("gpPhysicsLab").innerHTML = gpPhyLab.toFixed(2);
    document.getElementById("gpProgrammingLab").innerHTML = gpProgrammingLab.toFixed(2);

    // Calculate CGPA
    let cgpa =
        (
            gpEng * 3 +
            gpMath * 3 +
            gpProgramming * 3 +
            gpPhyTheory * 3 +
            gpICS +
            gpPhyLab +
            gpProgrammingLab
        ) / 15;

    // Show CGPA
    document.getElementById("cgpa").innerHTML = cgpa.toFixed(2);

    // Change circle color based on result
    let circle = document.getElementById("cgpa");

    if (cgpa >= 3.75) {
        circle.style.background = "linear-gradient(135deg,#16a34a,#22c55e)";
    }
    else if (cgpa >= 3.00) {
        circle.style.background = "linear-gradient(135deg,#2563eb,#3b82f6)";
    }
    else if (cgpa >= 2.00) {
        circle.style.background = "linear-gradient(135deg,#f59e0b,#fbbf24)";
    }
    else {
        circle.style.background = "linear-gradient(135deg,#dc2626,#ef4444)";
    }
}