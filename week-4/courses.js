// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        },
    ],
    enrollStudent: function (sectionNum) {
        let section = this.sections.findIndex(
            (sect) => sect.sectionNum == sectionNum
        );
        if (section >= 0) {
            this.sections[section].enrolled++;
            tableOutput(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        let section = this.sections.findIndex(
            (sect) => sect.sectionNum == sectionNum
        );
        if (section >= 0) {
            this.sections[section].enrolled--;
            tableOutput(this.sections);
        }
    },
};

function setCourseHtml(course) {
    let nameHtml = document.querySelector("#courseName");
    let codeHtml = document.querySelector("#courseCode");
    nameHtml.textContent = course.name;
    codeHtml.textContent = course.code;
};

setCourseHtml(aCourse);

function tableOutput(sections) {
    let sectionHtml = sections.map(
        (sect) => `<tr>
        <td>${sect.sectionNum}</td>
        <td>${sect.roomNum}</td>
        <td>${sect.enrolled}</td>
        <td>${sect.days}</td>
        <td>${sect.instructor}</td>
        </tr>`
    );
    document.querySelector("#sections").innerHTML = sectionHtml.join("");
};

tableOutput(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function(e) {
    e = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(e);
});
document.querySelector("#dropStudent").addEventListener("click", function(e) {
    e = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(e);
});