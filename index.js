console.log("mahbub hasan riyad");
document.write("Mahbub hasan");
//all basics practice
/* */
// Query Selector
/*
<body>

        <h1 id="myId">h1</h1>
        <h4>h4</h4>
        <h6 class="myClass">h6</h6>
        <p name="myName">p</p>
        <button ondblclick="FindEle()">Click</button>

        <script>
            function FindEle(){
                document.querySelector('h4').innerHTML ="h4 manupulated"
                document.querySelector('.myClass').innerHTML ="h6 manupulated"
                document.querySelector('#myId').innerHTML ="h1 manupulated"
                document.querySelector('p[name="myName"]').innerHTML ="p manupulated"
            }
  
        </script>
*/

//Ajax get request
/* 
        <button onclick="ExcGetRequest()">EXECUTE REQ</button>

        <script>
        function ExcGetRequest(){
            var url = "http://crud.teamrabbil.com/api/v1/ReadProduct";
            var Configaratoin = {method:"GET"};

            fetch(URL, Configaratoin)
            .then(response=>response.json())
            .then(result=>console.log(result))
            .catch(error=>console.log(error));

        }    
          
            
  
        </script>*/

//ajax post request
/*
 */
