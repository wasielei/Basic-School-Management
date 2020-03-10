var data = {
    students: [
        {
            name: "Zaky",
            age: "35",
            section: "3A",
            email: "zhacky@gmail.com",
            grade: 78,
            batch: "2010-2011"
        },{
            name: "Gary",
            age: "35",
            section: "3A",
            email: "gary@gmail.com",
            grade: 78,
            batch: "2011-2012"
        },
    ]
};

var tableEl = document.getElementById("students-table");
// var row = tableEl.insertRow(1);
// row.innerHTML = "<td>test</td>";
for (i = 0; i < data.students.length; i++) {
    var std = data.students[i];
    var row = tableEl.insertRow(i+1);
    row.innerHTML = "<td>" + std.name + "</td>" +
                    "<td>" + std.age + "</td>" +
                    "<td>" + std.section + "</td>" +
                    "<td>" + std.email + "</td>" +
                    "<td>" + std.grade + "</td>" +
                    "<td>" + std.batch + "</td>";

}
console.log(tableEl.innerHTML);
