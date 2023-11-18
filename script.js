const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper(developer) {
    data.forEach(developer =>{
        console.log('Employee Name: ' + developer.name, '\nEmployee Age: '+ developer.age, '\nEmployee Profession: '+ developer.profession);
    });
  }
  
  // 2. Add Data
  function addData() {
    const newName = prompt('Enter the name of the employee:');
    const newAge = prompt('Enter the age of the employee:');
    const newProfession = prompt('Enter the profession of the employee:');
  
  if(newName && newAge && newProfession){
    const newEmployee= {name: newName, age: newAge, profession: newProfession};
    data.push(newEmployee);
    data.forEach(developer =>{
        console.log('Employee Name: ' + developer.name, '\nEmployee Age: '+ developer.age, '\nEmployee Profession: '+ developer.profession);
    });
  }else{
    console.log('Invalid input');
  }
}
  
  // 3. Remove Admins
  function removeAdmin() {}
  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  function averageAge() {}
  
  // 6. Age Check
  function checkAgeAbove25() {}
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {}
  
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Profession Count
  function getTotalProfessions() {}