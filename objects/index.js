const employee={
    ename:"Rahul Kumar",
    eage:"30",
    eadress:"Ghaziabad",
    planguage:[{
        lang1: "java",
        lang2:"python"
    },
    {
        database1:"Oracle",
        database2:"Mysql"
    },
    {
        framework1:"Hibernate",
        framework2:"Spring"
    }
    ]
}
//console.log(employee.planguage[0].lang2);

// employee.company="Infosys";
// console.log(employee);

// employee.planguage[1].database1="MongoDB";
// console.log(employee)

//console.log(employee.company)

//console.log(employee[30]);

delete employee.ename

console.log(employee)
