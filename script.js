  let input = "";

      function addToInput(value) {
        input += value;
        document.getElementById("result").value = input;
      }

      function clearInput() {
        input = "";
        document.getElementById("result").value = input;
      }

      function calculateResult() {
        let result = eval(input);
        document.getElementById("result").value = result;
        input = "";
      }