<script>
var length = 9;
var courseName = "@X@course.id@X@" ;
var moduleNo = courseId.toString();
var myTruncatedString = moduleNo.substring(0,length);
var completeWelcome = "Welcome to " + myTruncatedString + ", " + "@X@user.full_name@X@" + "!";

document.write(completeWelcome);
</script>