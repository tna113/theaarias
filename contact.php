<?php
$path = './';
require $path . 'assets/inc/header.php';
?>

<div id="content">
    <div id="front">
        <h2>contact</h2>
        <ul id="list">
            <li><h3><a href="https://www.linkedin.com/in/tna113/" target="_blank">linkedin</a></h3></li>
            <li><h3><a href="https://github.com/tna113" target="_blank">github</a></h3></li>
            <li><h3><a href="mailto:theaarias113@gmail.com?subject=Hello from theaarias.com!">send email</a></h3></li>
            <li><h3><button onclick="showForm()">site form</button></h3></li>
        </ul>
        <form action="">
            <label for="name">full name</label>
            <input type="text">
            <label for="email">email</label>
            <input type="email">
            <label for="message">message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
    </div>

<?php
require $path . 'assets/inc/footer.php';
?>