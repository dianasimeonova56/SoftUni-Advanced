function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let averageSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
     let output = {}; //we will directly store restaurant info in the output object
      for (let i = 0; i < input.length; i++) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo[0];
         let workersData = restaurantInfo[1].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');
            if(!output.hasOwnProperty(restaurantName)){
               output[restaurantName] = {};
            }
            if(output.hasOwnProperty(restaurantName)){
               output[restaurantName][name] = Number(salary); 
               //in the output obj we store the restaurant with the worker's name and their salary
            }
         }
      }
      let entries = Object.entries(output);
      for (let entry of entries) {
         //we recieve an array
         //['PizzaHut', {...}]
         let key = entry[0];
         let values = Object.values(entry[1])
         for (let [name, salary] of values) {
            totalSalary += salary;
         }
         averageSalary = totalSalary / values.length;
         if(averageSalary > currAvgSalary){
            currAvgSalary = averageSalary;
            bestName = key;
            totalSalary = 0;
         }
      }
      let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]) //sort descending salaries
      let print = '';
      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]}`);
      document.querySelector('#bestRestaurant p').textContent = `Name ${bestName} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}