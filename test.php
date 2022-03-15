<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
    <style>
        .box_holder {
            display:flex;
            flex-direction: column;
        }
        .stack {
            margin: 0 auto;
            width: 80%;
            text-align: center;
            margin-top: 20%;
        }
        .stack > * {
            margin: 0 auto;
            width: 80%;
            height: 200px;
            position: absolute;
        }
        .proj {
            border: 1px solid red;
            z-index: 0;
        }
        .hover {
            border: 1px solid blue;
            z-index: 1;
            margin-top: 2px;
        }
    </style>
</head>
<body>
    <div class="box_holder">
        <div class="stack">
            <div class="proj">
                <img src="./assets/img/penguin_flip.gif" alt="">
            </div>
            <div class="hover">
                <h3>title</h3>
                <p>details and shit</p>
            </div>
        </div>

        <div class="stack">
            <div class="proj">
                <img src="./assets/img/penguin_flip.gif" alt="">
            </div>
            <div class="hover">
                <h3>title</h3>
                <p>details and shit</p>
            </div>
        </div>
    </div>
</body>
</html>