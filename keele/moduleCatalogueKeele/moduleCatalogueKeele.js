<script>
var length = 9;
var courseId = "@X@course.id@X@";
var moduleNo = courseId.toString();
var newModuleNo = moduleNo.toLowerCase();
var myTruncatedString = newModuleNo.substring(0,length);
var moduleLink = "https://www.keele.ac.uk/modcat/current/"
var completeLink = moduleLink + myTruncatedString + ".htm"
var moduleNoUpperCase = myTruncatedString.toUpperCase();
var finishedLink = "Click here for the " + moduleNoUpperCase + " module description.";
var strLink = finishedLink.link(completeLink);
document.write(strLink);
</script>
    
<script>
var length = 9;
var courseName = "@X@course.id@X@" ;
var moduleNo = courseId.toString();
var myTruncatedString = moduleNo.substring(0,length);
var completeWelcome = "Welcome to " + myTruncatedString + ", " + "@X@user.full_name@X@" + "!";

document.write(completeWelcome);
</script>
    
<style>
.collapseTabs {
    display: none !important;
}
</style>