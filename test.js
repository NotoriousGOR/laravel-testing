/* 
Should return something similar to:
{
    'sally': {
        id: 1,
        metrics: {
            sales: 6000,
            missed: 0
        }
    },
    'bob': {
        id:2,
        metrics: {
            sales:1000,
            missed: 0
        }
    },
}
*/

// returns a dictionary
let testIAteShitOn = (requested_user = false, requested_metric = false) => {
  // is the array always organized the same?
  let users = [
    [1, "Sally"],
    [2, "Bob"],
    [3, "George"],
  ];

  // same here, is this always organized the same?
  //  are there only ever 2 metrics?
  let metrics = [
    [1, "sales", 5000],
    [1, "sales", 1000],
    [3, "missed", 1000],
    [2, "sales", 1000],
  ];

 for (let i = users.length - 1; i >= 0; i--) {
    let id = users[i][0];
    let data = findDiamond(id, metrics);

 }

 return obj;

}


let findDiamond = (id, array) => {
    return array.filter((item) => item[0] == id);
}
//   let obj = {};

//   //   assuming they're always organized the same
//   users.forEach((user, index) => {
//     let name = user[1];

//     // gets me the group based on user_id
//     let data = metrics.filter((metric) => metric[0] == user[0]);

//     Object.assign(obj, {
//       name: {
//         id: user[0],
//         metrics: {
//           sales: data[1] == "sales" ? data[2] : 0,
//           missed: data[1] == "missed" ? data[2] : 0,
//         },
//       },
//     });
//   });

//   console.log("obj", obj);

//   if (requested_user && requested_metric) {
//   }
// };

testIAteShitOn();
