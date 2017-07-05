<p><input type="text" id="userInput" onkeyup="searchFunction()" placeholder="Filter page content..." /></p>

<script type="text/javascript">/*<![CDATA[*/
function searchFunction() {
    var input, filter, ul, li, a, d, i;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("content_listContainer");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        d = li[i].getElementsByClassName("details")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1 || d.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
/*]]>*/</script>

<script type="text/javascript">/*<![CDATA[*/
    /* Insert CSS to style search input */
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://humsstel.github.io/blackboard_hacks/generic/contentFilterGeneric/contentFilterGeneric.css");
    var head = document.getElementsByTagName("head") [0];
    head.appendChild(link);
    /* Insert Font Awesome for search icon */
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    var head = document.getElementsByTagName("head") [0];
    head.appendChild(link);

/*]]>*/</script>