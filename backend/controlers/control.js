var details=require('../schema/schemapath');
var blood=require("../schema/Bloodtestschema");
var operation=require('../schema/Operations');

// op details
var patietpost=(req,res)=>{
    details.create(req.body)
    .then(()=>{
        console.log("data posted successfully");
        res.send("data posted successfully")
    })
    .catch(()=>{
        console.log("data post fail");
        res.send("posting fail")
    })
}
var patiantget=(req,res)=>{
details.find()
.then((data)=>{
console.log("getting data success");
res.send(data);
})
.catch(()=>{
    console.log("data geting fail");
    res.send("data getting fail")
})

}

// blood test
var bloodpost=(req,res)=>{
    blood.create(req.body)

    .then(()=>{
        console.log("blood getting");
    })
    .catch(()=>{
        console.log("blood fail");
    })
}

var bloodget=(req,res)=>{
    blood.find()
    .then((data)=>{
        console.log("blood geting success");
        res.send(data)
    })
    .catch(()=>{
        console.log("blood geting fail");
    })
}

// operation details

var opepost=(req,res)=>{
    operation.create(req.body)
    .then(()=>{
        console.log("operation post success");
    })
    .catch(()=>{
        console.log("operation post fail");
    })
}

var opeget=(req,res)=>{
    operation.find()
    .then((data)=>{
        res.send(data)
        console.log("get success");
       
    })
    .catch(()=>{
        console.log("get fail");
    })
}

module.exports=[patietpost,patiantget,bloodpost,bloodget,opepost,opeget];

// var doct=require("../schema/doctors");
// var doctopost=(req,res)=>{
//     doct.create(req.body)
    
//     .then(()=>{
//         console.log("data posted successfully");
//         res.send("data posted successfully")
//     })

//     .catch(()=>{
//         console.log("data post fail");
//         res.send("posting fail")
//     })
// }

// var doctoget=(req,res)=>{
//     doct.find()
// .then((data)=>{
// console.log("getting data success");
// res.send(data);
// })

// .catch(()=>{
//     console.log("data geting fail");
//     res.send("data getting fail")
// })

// }    doctopost,doctoget