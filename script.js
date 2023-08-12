document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const container = document.querySelector(".container")
    const floorValue = parseInt(document.getElementById('floor').value);
    const liftValue = parseInt(document.getElementById('lift').value);
  
    // Check if both values are valid (greater than 0)
    if (floorValue > 0 && liftValue > 0) {
      // Clear previous divs, if any
      document.getElementById('container').innerHTML = '';
      document.getElementById('container').style.display = 'none';
      
    
  
      // Generate the floor divs
      for (let i = 1; i <= floorValue; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `Floor ${i}`;
        newDiv.classList.add("floor-container");
        document.getElementById('resultDivs').appendChild(newDiv);

        const upButton = document.createElement('button');
      upButton.textContent = 'Up';

      const downButton = document.createElement('button');
      downButton.textContent = 'Down';

      newDiv.appendChild(upButton);
      newDiv.appendChild(downButton);


      }
  
      // Generate the lift divs
      for (let i = 1; i <= liftValue; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `Lift ${i}`;
        newDiv.classList.add("lift");
        document.getElementById('lift-con').appendChild(newDiv);
      }
    } else {
      alert('Please enter valid values. Floor and Lift values should be greater than 0.');
    }
  });
function reset(){
  window.location.reload();
}
