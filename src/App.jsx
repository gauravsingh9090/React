// import Data from "./Data";
// import Header from "./Header";
// import Footer from "./Footer";
// const App = () =>{
//   return(
//     <>
//      <h1>Hello This is my first React program </h1>
//      <Header/>
//      <Data/>
//      <Footer/>
//     </>
//   )
// }

// export default App;



//===========================================================================

// import College from "./College";

// const rollno=1250;
// const name="Gaurav Singh";
// const city = "Rewa"
// const fees = 12000000;

// const App = () =>{
//   return(
//     <>
//     <h1 align="center" >Welcome To cybrom</h1>
//   <College r={rollno} n={name} c={city} f={fees}/>
//     </>
//   )
// }

// export default App;



//===========================================================================



// import Student from "./Student";

// const student={
//   "rollno":121,
//   "name": "Gaurav" ,
//   "city":"Bhopal",
//   "fees":12000000
// }

// const App = () =>{
//   return(
//     <>
//     <h1>Welcome To Cybrom</h1>

//     <Student sr={student.rollno} sn={student.name} sd={student.city} sf={student.fees}/>
    
//     </>
//   )
// }

// export default App;



//=================================================================================


// const name=["Gaurav" , "Rahul" , "Bhopal" , "Rewa" , "Aman"]
// const age=[12,23,45,67,100,23,54,67,100,23,54,67,100,23,54]
//  const mynm= age.map((key)=>{
//   return(
//     <>
//     <h1>{key*2}</h1>
//     </>
//   )
// });

// const App=() =>{
//   return(
//     <>
//     <h1>Gaurav Singh Array </h1>
//     {mynm}
//     </>
//   )
// }
// export default App


//===================================================================================

// const Student =[
//   {
//     "rollno":121,
//     "name": "Gaurav" ,
//     "city":"Bhopal",
//     "fees":12000000
//   },
//   {
//     "rollno":122,
//     "name": "Rahul" ,
//     "city":"Bhopal",
//     "fees":15000000
//   },
//   {
//     "rollno":123,
//     "name": "Bhopal" ,
//     "city":"Bhopal",
//     "fees":18000000
//   }
// ]


// const ans = Student.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>
//     </tr>
//     </>
//   )
// });


// const App = () =>{
// return(
//   <table border="1" width="600" align="center">
//     <tr>
//       <th>RollNo</th>
//       <th>Name</th>
//       <th>City</th>
//       <th>Fees</th>
//     </tr>
//   {ans}
//   </table>

  
// )
// }


// export default App;

//===================================================



import EmpData from "./EmpData";


const ans = EmpData.map((key)=>{
  return(
    <>
    <tr>
      <td>{key.empno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.salary}</td>
    </tr>
    </>
  )
});


const App = () =>{
  return(
    <>
    <table border="1" bgcolor="pink" width="600">
       <tr>
        <th>Employee No</th>
        <th>Name</th>
        <th>City</th>
        <th>Salary</th>
       </tr>
       {ans}
    </table>
    </>
  )
}

export default App;